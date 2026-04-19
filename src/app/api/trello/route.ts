import { NextResponse } from "next/server";

// --- Custom Field Mappings ---
// prettier-ignore
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
  auto: "692b32dda4efe347996e6594",
  adresa1: "694577205bbfd42d5edf78dc",
  poschodie1: "692b331d44943934cf91f71a",
  adresa2: "692b3331f2ebbe9487c5e7bc",
  brigadnici: "692b333dada1ee73e7821b53",
  typ: "692b33670e622cf0321b40ee",
  fixCena: "692b33c4c640edd7f5c60f59",
  pocetPracovnikov: "692b33d3bd81404b2eb2b4b9",
  cenaZaHod: "692b33eaaab7349e0558fd45",
  doprava: "692b33fe57e288e1b2f9223d",
  baliaciMaterial: "692b34084fe81562fdaaa971",
  bremeno: "692b341248a8645a8a1796ae",
  inePriplatky: "692b341c3df9836ed8928ba6",
  formaUhrady: "692b34499b4be55024561237",
};

// prettier-ignore
const druhOptionsIdMap: { [key: string]: string } = {
  "stahovanie": "692b3272791ea79f04711845",
  "vypratavanie": "692b32779a12415761121c1d",
  "stahovanie + vypratavanie": "692b32692a4bd66895aa55b1",
  "montaz": "692b328358ecae1fc6245391",
  "sofo osobne": "692b328cb54a16145d8d0d68",
};

function normalizeKey(key: string): string {
  return key
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function toStringValue(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  try {
    const withToString = value as { toString?: unknown };
    if (typeof withToString.toString === "function") {
      return withToString.toString();
    }
    return String(value);
  } catch {
    return "";
  }
}

async function updateCustomFields(
  cardId: string,
  normalizedData: Record<string, string>,
  apiKey: string,
  apiToken: string
) {
  const get = (...aliases: string[]) => {
    for (const a of aliases) {
      const key = normalizeKey(a);
      if (normalizedData[key]) return normalizedData[key];
    }
    return "";
  };

  const updatePromises: Promise<unknown>[] = [];

  const createUpdatePromise = (
    fieldId: string,
    value: { text?: string; number?: string; idValue?: string }
  ) => {
    const url = `https://api.trello.com/1/cards/${cardId}/customField/${fieldId}/item?key=${apiKey}&token=${apiToken}`;
    
    // Trello API might be inconsistent. For dropdowns (`idValue`), we try sending 
    // the payload directly, as per community examples. For other types, 
    // we wrap it in a 'value' object as per official docs.
    const body = value.idValue
      ? JSON.stringify(value)
      : JSON.stringify({ value });

    return fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      cache: "no-store",
      body: body,
    });
  };

  // --- Map Text & Number Fields ---
  const fieldMappings: {
    [key in keyof typeof customFieldIdMap]?: {
      aliases: string[];
      type: "text" | "number";
    };
  } = {
    meno: { aliases: ["name", "full_name", "meno"], type: "text" },
    email: { aliases: ["email", "e_mail"], type: "text" },
    telDobre: { aliases: ["phone", "tel", "tel č"], type: "text" },
    tel: { aliases: ["phone", "tel", "tel č"], type: "number" },
    firmaNazov: { aliases: ["firma", "company", "firma nazov"], type: "text" },
    ico: { aliases: ["ico"], type: "number" },
    adresa1: { aliases: ["address", "adresa", "adresa 1"], type: "text" },
  };

  for (const key in fieldMappings) {
    const config = fieldMappings[key as keyof typeof fieldMappings];
    if (config) {
      const value = get(...config.aliases);
      if (value) {
        const payload =
          config.type === "text" ? { text: value } : { number: value };
        updatePromises.push(
          createUpdatePromise(customFieldIdMap[key as keyof typeof customFieldIdMap], payload)
        );
      }
    }
  }

  // --- Map List (Dropdown) Fields ---
  const druhRaw = get("service_type", "service", "typ", "druh", "sluzba");
  if (druhRaw) {
    const druhKey = Object.keys(druhOptionsIdMap).find((k) =>
      druhRaw.toLowerCase().includes(k)
    );
    if (druhKey && druhOptionsIdMap[druhKey]) {
      updatePromises.push(
        createUpdatePromise(customFieldIdMap.druh, {
          idValue: druhOptionsIdMap[druhKey],
        })
      );
    }
  }

  // --- Date Fields ---
  // "Kedy prišiel" – current date when the card is created
  const kedyPrisiel = new Date().toLocaleString("sk-SK", { timeZone: "Europe/Bratislava", day: "numeric", month: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
  updatePromises.push(
    createUpdatePromise(customFieldIdMap.kedyPrisiel, { text: kedyPrisiel })
  );

  // --- Static & URL Fields ---
  // Zdroj Typ is always "Formular"
  const zdrojTypOptionId = "692b31d5d3975c70d391e440";
  updatePromises.push(
    createUpdatePromise(customFieldIdMap.zdrojTyp, { idValue: zdrojTypOptionId })
  );

  // Zdroj Link from page_url
  const pageUrl = get("page_url", "page", "url");
  if (pageUrl) {
    updatePromises.push(
      createUpdatePromise(customFieldIdMap.zdrojLink, { text: pageUrl })
    );
  }

  const results = await Promise.allSettled(updatePromises);
  results.forEach((result) => {
    if (result.status === 'rejected') {
      console.error(`Failed to update Trello custom field`, result.reason);
    }
  });
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.TRELLO_API_KEY || "";
    const apiToken = process.env.TRELLO_API_TOKEN || "";
    const listId = process.env.TRELLO_LIST_ID || "";

    if (!apiKey || !apiToken || !listId) {
      return NextResponse.json(
        { ok: false, error: "Missing Trello configuration" },
        { status: 500 }
      );
    }

    const ct = req.headers.get("content-type") || "";
    const body = ct.includes("application/json")
      ? await req.json()
      : Object.fromEntries(await req.formData());

    const normalized: Record<string, string> = {};
    Object.entries(body as Record<string, unknown>).forEach(([k, v]) => {
      normalized[normalizeKey(k)] = toStringValue(v).trim();
    });

    const getFirst = (...aliases: string[]) => {
      for (const a of aliases) {
        const key = normalizeKey(a);
        if (normalized[key]) return normalized[key];
      }
      return "";
    };

    const serviceTypeRaw = getFirst("service_type", "service", "typ", "sluzba");
    const st = serviceTypeRaw.toLowerCase();
    const serviceLabel = st.includes("montaz")
      ? "Montáž nábytku"
      : st.replace(/[^a-z]/g, "").includes("general")
      ? "Všeobecný dotaz"
      : "";

    const name = getFirst("name", "full_name", "meno");
    const email = getFirst("email", "e_mail");
    const phone = getFirst("phone", "tel", "tel č", "telefon");

    const message = getFirst(
      "message",
      "sprava",
      "popis",
      "popiste",
      "description",
      "poznamka"
    );

    const cardName = serviceLabel || name || email || phone || "Nový web lead";
    const desc = message;

    const params = new URLSearchParams({
      key: apiKey,
      token: apiToken,
      idList: listId,
      name: cardName,
      desc,
    });

    const trelloRes = await fetch("https://api.trello.com/1/cards", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      cache: "no-store",
      body: params.toString(),
    });

    const trelloData = await trelloRes.json();

    if (!trelloRes.ok) {
      const errorMessage =
        trelloData.message || trelloData.error || "Trello API error";
      return NextResponse.json(
        { ok: false, error: errorMessage },
        { status: 502 }
      );
    }

    const cardId = trelloData.id || "";
    if (cardId) {
      await updateCustomFields(cardId, normalized, apiKey, apiToken);
    }

    return NextResponse.json({ ok: true, card_id: cardId });
  } catch (e: unknown) {
    console.error("/api/trello error", e);
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
