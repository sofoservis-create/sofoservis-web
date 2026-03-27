export interface StaticReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
}

const NOW = 1773580000;
const WEEK = 604800;

export const staticReviews: StaticReview[] = [
  {
    author_name: "Gabriela Földváry",
    rating: 5,
    text: "Spoľahlivosť, dochvíľnost, spokojnosť a ani som nečakala že v deň zadania zákazky sa nájde pre mňa ešte aj termín. Ďakujem za skvelé služby!",
    relative_time_description: "3 weeks ago",
    time: NOW - 3 * WEEK,
  },
  {
    author_name: "Dominika Oroszova",
    rating: 5,
    text: "chlapci 😊este raz dakujeme ozaj za velmi dobru pristup aj za pracu a vdaka vam mame spokojné prestahovanie 😊 Prajem vam vela zarobkov dobrych a nech sa vam dari, ste super partia. Dakujeme (IVAN, MAREK, KAROL)",
    relative_time_description: "3 weeks ago",
    time: NOW - 3 * WEEK - 3600,
  },
  {
    author_name: "dasa vrazdova",
    rating: 5,
    text: "Pan Vajdak bol velmi ochotny, profesionalny, mily a vsetko prebiehalo s jasnym vysvetlenim a velmi promptne. Ocenujem seriozny pristup a velku ochotu. Dakujem, urcite vyuzijeme sluzby opat ak bude potrebne.",
    relative_time_description: "3 weeks ago",
    time: NOW - 3 * WEEK - 7200,
  },
  {
    author_name: "Katarína Kundriková",
    rating: 5,
    text: "Ak sa sťahovať, tak len so SofoServis. Od prvého telefonátu top profi prístup. Všetko dohodnuté rýchlo, pomoc so všetkým. Veľmi odporúčam!",
    relative_time_description: "4 weeks ago",
    time: NOW - 4 * WEEK,
  },
  {
    author_name: "Roman Svikruha",
    rating: 5,
    text: "Maximálna spokojnosť so všetkým. Od prvotnej komunikácie až po samotné služby.",
    relative_time_description: "5 weeks ago",
    time: NOW - 5 * WEEK,
  },
  {
    author_name: "Bea Pisarčíková",
    rating: 5,
    text: "Šikovní a ochotní chlapci za dobrú cenu. Odporúčam.",
    relative_time_description: "6 weeks ago",
    time: NOW - 6 * WEEK,
  },
  {
    author_name: "Mila Milie",
    rating: 5,
    text: "Moja skúsenosť so sťahovaním: Movex vs. SofoServis. SofoServis jednoznačne vyhráva — profesionálny prístup, komunikácia na úrovni a skvelý tím.",
    relative_time_description: "7 weeks ago",
    time: NOW - 7 * WEEK,
  },
  {
    author_name: "Barbora Hidbani Fialová",
    rating: 5,
    text: "Znova som využila, chalani boli úžasný. Klobúk dole.",
    relative_time_description: "8 weeks ago",
    time: NOW - 8 * WEEK,
  },
  {
    author_name: "Mária Zmeková",
    rating: 5,
    text: "Ďakujem pánom Marekovi, Ivanovi a Andrejovi za vysoko kvalitnú prácu. Prišli presne na čas ako sme sa dohodli, pracovali rýchlo a ochotne. Sánka dole za takú prácu. Veľmi nám pomohli, odporúčam.",
    relative_time_description: "8 weeks ago",
    time: NOW - 8 * WEEK - 3600,
  },
  {
    author_name: "Adriána Opatova",
    rating: 5,
    text: "Sme nadmieru spokojný, pán veľmi šikovný, precízna práca.",
    relative_time_description: "9 weeks ago",
    time: NOW - 9 * WEEK,
  },
  {
    author_name: "Gabika Spackova",
    rating: 5,
    text: "Ďakujem Ivanovi a Marekovi za prácu, ktorú vykonali. Odviezli starý majetok, pracovali rýchlo, boli profesionálni. Odporúčam.",
    relative_time_description: "10 weeks ago",
    time: NOW - 10 * WEEK,
  },
  {
    author_name: "Karin Trebulová Forró",
    rating: 5,
    text: "SofoServis môžeme len a len odporučiť. Menili nám dve skrinky v kuchynskej linke a zároveň nastavovali dvierka na celej kuchynskej linke. Profesionálny prístup, odporúčam.",
    relative_time_description: "10 weeks ago",
    time: NOW - 10 * WEEK - 3600,
  },
  {
    author_name: "Martin Tkáč",
    rating: 5,
    text: "Sťahovanie prebehlo bez problémov. Ďakujeme.",
    relative_time_description: "3 months ago",
    time: NOW - 13 * WEEK,
  },
  {
    author_name: "Ján Jakel",
    rating: 5,
    text: "Výborná služba, ďakujeme!",
    relative_time_description: "3 months ago",
    time: NOW - 13 * WEEK - 3600,
  },
];
