// Server-side Trello sender — extracted from src/app/api/trello/route.ts
// so it can be called directly from /api/lead without an HTTP hop.

const customFieldIdMap = {
  cisloZ: "692704ec2456a6357b334bc8",
  zdrojTyp: "692b31d5d3975c70d391e43f",
  zdrojLink: "69371c98577c20668a71cad1",
  kedyPrisiel: "698bab10f6fea830c8538e06",
  meno: "692b31eed110a5209245405b",
  firmaNazov: "69371a58f9600b320c8d917b",
  ico: "692b31faeb9abd4690989980",
  telDobre: "698baa28b2fea6936726e6e5",
  tel: "692b321ad5ba4c2cbcfa4aab",
  email: "692b3227101f496885da5ad2",
  druh: "692b32692a4bd66895aa55b0",
} as const;

const druhOptionsIdMap: Record<string, string> = {
  stahovanie: "692b3272791ea79f04711845",
  vypratavanie: "692b32779a12415761121c1d",
  "stahovanie + vypratavanie": "692b32692a4bd66895aa55b1",
  montaz: "692b328358ecae1fc6245391",
  "sofo osobne": "692b328cb54a16145d8d0d68",
};

function normalizeKey(k: string): string {
  return k
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export interface TrelloLead {
  name: string;
  phone: string;
  email: string;
  description: string;
  service_type: string;
  page_url: string;
  request_id: string;
  // optional extras
  firma?: string;
  ico?: string;
  adresa?: string;
}

export interface TrelloSendResult {
  ok: boolean;
  attempts: number;
  cardId: string | null;
  lastError: string | null;
}

async function createCard(
  apiKey: string,
  apiToken: string,
  listId: string,
  name: string,
  desc: string
): Promise<{ ok: boolean; status: number; cardId: string | null; error: string | null }> {
  const params = new URLSearchParams({ key: apiKey, token: apiToken, idList: listId, name, desc });
  try {
    const r = await fetch("https://api.trello.com/1/cards", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      cache: "no-store",
      body: params.toString(),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      return { ok: false, status: r.status, cardId: null, error: data?.message || data?.error || `HTTP ${r.status}` };
    }
    return { ok: true, status: r.status, cardId: data?.id || null, error: null };
  } catch (e) {
    return { ok: false, status: 0, cardId: null, error: e instanceof Error ? e.message : String(e) };
  }
}

async function setCustomField(
  cardId: string,
  fieldId: string,
  value: { text?: string; number?: string; idValue?: string },
  apiKey: string,
  apiToken: string
): Promise<void> {
  const url = `https://api.trello.com/1/cards/${cardId}/customField/${fieldId}/item?key=${apiKey}&token=${apiToken}`;
  const body = value.idValue ? JSON.stringify(value) : JSON.stringify({ value });
  await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    cache: "no-store",
    body,
  });
}

export async function sendToTrello(lead: TrelloLead): Promise<TrelloSendResult> {
  const apiKey = process.env.TRELLO_API_KEY || "";
  const apiToken = process.env.TRELLO_API_TOKEN || "";
  const listId = process.env.TRELLO_LIST_ID || "";
  if (!apiKey || !apiToken || !listId) {
    return { ok: false, attempts: 0, cardId: null, lastError: "Missing Trello configuration" };
  }

  const isMontaz = lead.service_type.toLowerCase().includes("montaz");
  const cardName = isMontaz ? "Montáž nábytku" : lead.name || lead.email || lead.phone || "Nový web lead";
  const desc = `${lead.description || ""}\n\n— request_id: ${lead.request_id}`;

  // Retry the card creation itself with exponential backoff
  const backoff = [0, 1000, 3000, 8000];
  let lastErr: string | null = null;
  let cardId: string | null = null;
  let attempts = 0;
  for (const wait of backoff) {
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    attempts++;
    const r = await createCard(apiKey, apiToken, listId, cardName, desc);
    if (r.ok && r.cardId) {
      cardId = r.cardId;
      lastErr = null;
      break;
    }
    lastErr = r.error;
  }

  if (!cardId) {
    return { ok: false, attempts, cardId: null, lastError: lastErr };
  }

  // Custom fields — best effort, not retried (card already exists)
  try {
    const tasks: Promise<void>[] = [];
    if (lead.name) tasks.push(setCustomField(cardId, customFieldIdMap.meno, { text: lead.name }, apiKey, apiToken));
    if (lead.email) tasks.push(setCustomField(cardId, customFieldIdMap.email, { text: lead.email }, apiKey, apiToken));
    if (lead.phone) {
      tasks.push(setCustomField(cardId, customFieldIdMap.telDobre, { text: lead.phone }, apiKey, apiToken));
      const numeric = lead.phone.replace(/\D/g, "");
      if (numeric) tasks.push(setCustomField(cardId, customFieldIdMap.tel, { number: numeric }, apiKey, apiToken));
    }
    if (lead.firma) tasks.push(setCustomField(cardId, customFieldIdMap.firmaNazov, { text: lead.firma }, apiKey, apiToken));
    if (lead.ico) tasks.push(setCustomField(cardId, customFieldIdMap.ico, { number: lead.ico }, apiKey, apiToken));

    // druh dropdown
    const stKey = Object.keys(druhOptionsIdMap).find((k) =>
      lead.service_type.toLowerCase().includes(k)
    );
    if (stKey) {
      tasks.push(setCustomField(cardId, customFieldIdMap.druh, { idValue: druhOptionsIdMap[stKey] }, apiKey, apiToken));
    }

    // zdrojTyp = "Formular"
    tasks.push(setCustomField(cardId, customFieldIdMap.zdrojTyp, { idValue: "692b31d5d3975c70d391e440" }, apiKey, apiToken));

    if (lead.page_url) tasks.push(setCustomField(cardId, customFieldIdMap.zdrojLink, { text: lead.page_url }, apiKey, apiToken));

    // kedyPrisiel = current Bratislava time
    const kedy = new Date().toLocaleString("sk-SK", {
      timeZone: "Europe/Bratislava",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    tasks.push(setCustomField(cardId, customFieldIdMap.kedyPrisiel, { text: kedy }, apiKey, apiToken));

    // request_id appended into cisloZ for cross-system tracing
    tasks.push(setCustomField(cardId, customFieldIdMap.cisloZ, { text: lead.request_id }, apiKey, apiToken));

    await Promise.allSettled(tasks);
    void normalizeKey;
  } catch (e) {
    console.error("[trello] custom field update failed", e);
  }

  return { ok: true, attempts, cardId, lastError: null };
}
