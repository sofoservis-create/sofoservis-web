# Trello Setup Guide - Podrobný návod

## Krok 1: Získanie API Key

Trello zmenilo spôsob získavania API kľúčov. Stará stránka na `trello.com/app-key` už nefunguje ako predtým a je potrebné postupovať cez tzv. Power-Ups.

1. Otvorte si stránku pre správu Power-Ups: [https://trello.com/power-ups/admin](https://trello.com/power-ups/admin)
2. Prihláste sa do Trello účtu.
3. Kliknite na **"Create a new Power-Up"** a vytvorte nový Power-Up.
4. Vyplňte údaje:
    - **Power-Up name**: Napríklad `SofoServis Integrácia`.
    - **Workspace**: Vyberte váš Trello workspace.
    - **Iframe connector URL**: Zadajte akúkoľvek platnú URL, napr. `https://sofoservis.sk`. Pre náš účel nie je dôležitá.
5. Po vytvorení Power-Upu prejdite v menu naľavo na **"API key"**.
6. Kliknite na **"Generate a new API key"**.
7. Zobrazí sa váš nový **API Key**. Skopírujte si ho.

## Krok 2: Získanie API Token

1. Vytvorte tento odkaz (nahraďte `YOUR_API_KEY` vaším API Key z kroku 1):

   ```
   https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&name=SofoServis&key=YOUR_API_KEY
   ```

2. Otvorte tento odkaz v prehliadači
3. Kliknite na **"Allow"** (Povoliť)
4. Skopírujte **Token** (dlhý reťazec, ktorý sa zobrazí na stránke)

## Krok 3: Získanie Board ID

1. Otvorte váš Trello board v prehliadači
2. Pozrite sa na URL v adresnom riadku
3. Board ID je časť medzi `/b/` a ďalším `/`

   Príklad URL: `https://trello.com/b/5f8a9b2c3d4e5f6a7b8c9d0/my-board`
   Board ID: `5f8a9b2c3d4e5f6a7b8c9d0`

## Krok 4: Získanie List ID

### Metóda 1: Pomocou API (Odporúčané)

1. Otvorte tento odkaz v prehliadači (nahraďte hodnoty):

   ```
   https://api.trello.com/1/boards/BOARD_ID/lists?key=API_KEY&token=API_TOKEN
   ```

   Príklad:

   ```
   https://api.trello.com/1/boards/5f8a9b2c3d4e5f6a7b8c9d0/lists?key=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6&token=abc123def456...
   ```

2. Zobrazí sa JSON s všetkými zoznamami (lists) na boarde
3. Nájdite zoznam, do ktorého chcete pridávať karty
4. Skopírujte hodnotu `"id"` pre tento zoznam

### Metóda 2: Pomocou JavaScriptu v konzole prehliadača

1. Otvorte váš Trello board v prehliadači
2. Otvorte Developer Tools (F12 alebo Cmd+Option+I na Mac)
3. Prejdite na záložku **Console**
4. Vložte tento kód (nahraďte hodnoty):

```javascript
// Nahraďte tieto hodnoty:
const API_KEY = "váš-api-key";
const API_TOKEN = "váš-api-token";
const BOARD_ID = "váš-board-id";

// Spustite tento kód:
fetch(
  `https://api.trello.com/1/boards/${BOARD_ID}/lists?key=${API_KEY}&token=${API_TOKEN}`
)
  .then((res) => res.json())
  .then((lists) => {
    console.log("=== Všetky zoznamy na boarde ===");
    lists.forEach((list) => {
      console.log(`Názov: ${list.name}`);
      console.log(`ID: ${list.id}`);
      console.log("---");
    });
  });
```

5. V konzole uvidíte všetky zoznamy s ich ID

### Metóda 3: Z URL karty

1. Vytvorte alebo otvorte kartu v zozname, do ktorého chcete pridávať karty
2. Kliknite na kartu a pozrite sa na URL
3. V URL nájdete `list=` parameter - toto je List ID

## Krok 5: Pridanie do .env.local

Vytvorte alebo upravte súbor `.env.local` v koreňovom adresári projektu:

```env
# Pipedrive (už máte)
PIPEDRIVE_API_TOKEN=your_pipedrive_token
PIPEDRIVE_COMPANY_DOMAIN=your_company_domain

# Trello (nové)
TRELLO_API_KEY=váš-api-key-z-kroku-1
TRELLO_API_TOKEN=váš-token-z-kroku-2
TRELLO_LIST_ID=váš-list-id-z-kroku-4
```

## Overenie nastavenia

Po pridaní všetkých premenných do `.env.local`:

1. Reštartujte development server:

   ```bash
   npm run dev
   ```

2. Otestujte odoslanie formulára
3. Skontrolujte, či sa vytvorila karta v Trello

## Bezpečnostné poznámky

⚠️ **DÔLEŽITÉ:**

- Nikdy necommitnite `.env.local` do gitu (je už v `.gitignore`)
- Pre produkciu nastavte tieto premenné v nastaveniach Vercel/Deploy platformy
- API Token má plný prístup k vášmu Trello účtu - chráňte ho

## Rýchly test API

Môžete otestovať, či máte správne údaje pomocou tohto príkazu:

```bash
curl "https://api.trello.com/1/boards/BOARD_ID/lists?key=API_KEY&token=API_TOKEN"
```

Nahraďte `BOARD_ID`, `API_KEY` a `API_TOKEN` vašimi hodnotami.







