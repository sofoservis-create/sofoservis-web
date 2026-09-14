export type InlinePart = {
  text: string;
  href?: string;
  external?: boolean;
};

export type InlineContent = string | InlinePart[];

export type FAQItem = {
  question: string;
  answer: InlineContent;
};

export type ArticleBlock =
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "paragraph"; content: InlineContent; lead?: boolean }
  | { type: "list"; items: string[] }
  | { type: "cta"; content: InlineContent; label: string }
  | { type: "faq"; items: FAQItem[] };

export type BlogArticleData = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  datePublished: string;
  readingTime: string;
  category: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageSourceUrl: string;
  imageSourceLabel: string;
  intro: string;
  toc: { id: string; label: string }[];
  blocks: ArticleBlock[];
  faq: FAQItem[];
};

export function inlineText(content: InlineContent): string {
  return typeof content === "string"
    ? content
    : content.map((part) => part.text).join("");
}

const faq: FAQItem[] = [
  {
    question: "Môžem chladničku prevážať naležato?",
    answer:
      "Áno, pokiaľ to manuál k danému modelu pripúšťa. Väčšina výrobcov povoľuje len bočnú stenu, nikdy nie prednú s dverami. Po prevoze nechajte spotrebič odstáť 24 hodín.",
  },
  {
    question: "Ako dlho má chladnička odstáť po prevoze vo zvislej polohe?",
    answer:
      "Pri zvislom prevoze mnohé značky nevyžadujú žiadnu čakaciu dobu a je možné chladničku zapojiť takmer ihneď. Iné modely uvádzajú približne hodinu. Ak si nie ste istí, hodina navyše nič nepokazí.",
  },
  {
    question: "Treba chladničku pred sťahovaním odmraziť?",
    answer:
      "Áno, chladničku je pred sťahovaním vhodné úplne odmraziť, ak sa v nej nachádza námraza alebo ľad. Beznámrazové modely No Frost zvyčajne nevyžadujú klasické odmrazovanie. Po vypnutí však chladničku vyprázdnite a vnútro aj odkvapkávaciu časť dôkladne vysušte.",
  },
  {
    question: "Ako dlho odmrazovanie trvá?",
    answer:
      "Závisí od množstva námrazy. Pri menšej vrstve môže trvať niekoľko hodín, pri hrubej námraze aj dlhšie. Námrazu neodporúčame odstraňovať ostrými predmetmi, pretože by ste mohli poškodiť chladiaci systém.",
  },
  {
    question: "Čo ak chladničku zapojím skôr?",
    answer:
      "Kompresor sa spustí s nedostatočným mazaním. Spotrebič spravidla chladí ďalej, ale hlučnejšie a s vyššou spotrebou. Porucha sa môže objaviť až po niekoľkých týždňoch.",
  },
  {
    question: "Zvládnem prevoz chladničky sám?",
    answer: [
      {
        text: "Pri krátkej trase a bezbariérovom prístupe áno, vždy však vo dvojici a s vhodným vozidlom. Pri schodoch, úzkych priestoroch alebo veľkých spotrebičoch, napr. pri americkej chladničke, je bezpečnejšie zavolať ",
      },
      { text: "sťahovaciu firmu", href: "/" },
      { text: ", ktorá má skúsenosti aj so " },
      {
        text: "sťahovaním ťažkých bremien",
        href: "/stahovanie/stahovanie-tazkych-bremien",
      },
      { text: "." },
    ],
  },
];

export const refrigeratorArticle: BlogArticleData = {
  slug: "preprava-chladnicky-nalezato-alebo-zvislo-ako-prevazat-spravne",
  title: "Preprava chladničky naležato alebo zvislo: ako na to správne",
  description:
    "Preprava chladničky naležato alebo zvislo? ✅ Zistite, ktorá poloha je bezpečnejšia, ako chladničku pripraviť na prevoz a ako dlho ju nechať odstáť. Čítajte viac",
  summary:
    "Preprava chladničky naležato alebo zvislo? Zistite, ktorá poloha je bezpečnejšia, ako chladničku pripraviť na prevoz a ako dlho ju nechať odstáť. Čítajte viac",
  datePublished: "2026-09-13",
  readingTime: "7 min čítania",
  category: "Praktické rady",
  image: "/images/blog/preprava-chladnicky-kuchyna.jpg",
  imageAlt: "Chladnička v kuchyni pripravená na prepravu",
  imageWidth: 2048,
  imageHeight: 1365,
  imageSourceUrl:
    "https://unsplash.com/photos/a-kitchen-with-white-cabinets-and-stainless-steel-appliances-ln0Y-eVnrBc",
  imageSourceLabel:
    "unsplash.com/photos/a-kitchen-with-white-cabinets-and-stainless-steel-appliances-ln0Y-eVnrBc",
  intro:
    "Stručná odpoveď na to, ako prevážať chladničku, je zvislo. Zhodujú sa na tom veľkí výrobcovia. Preprava chladničky naležato je skôr núdzové riešenie než rovnocenná možnosť. Ak sa z nejakého dôvodu nemôžete prevozu naležato vyhnúť, rozhoduje strana, na ktorú spotrebič položíte, a čas, ktorý mu dáte odstáť pred zapojením. Práve v tom sa výrobcovia rozchádzajú, takže jedna univerzálna rada pre všetky chladničky neexistuje a najlepšou možnosťou je vždy držať sa pokynov uvedených v manuáli.",
  toc: [
    { id: "odporucania-vyrobcov", label: "Výber polohy" },
    { id: "priprava-spotrebica", label: "Príprava spotrebiča" },
    { id: "prevoz-nalezato", label: "Prevoz naležato" },
    { id: "odstatie-pred-zapojenim", label: "Odstátie pred zapojením" },
    { id: "caste-otazky", label: "Časté otázky" },
  ],
  faq,
  blocks: [
    {
      type: "heading",
      level: 2,
      id: "odporucania-vyrobcov",
      text: "Ako prepravovať chladničku: čo odporúčajú niektorí výrobcovia",
    },
    {
      type: "paragraph",
      content: [
        {
          text: "Bosch",
          href: "https://www.bosch-home.com/sk/inspirujte-sa/tipy-triky/caste-otazky-chladenie",
          external: true,
        },
        {
          text: " prevoz naležato neodporúča, pripúšťa ho len v krajnom prípade na krátku vzdialenosť a vyžaduje odstátie aspoň 12 hodín.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          text: "Liebherr",
          href: "https://www.liebherr.com/sk-sk/chladni%C4%8Dky-mrazni%C4%8Dky/sprievodca-dopravou-chladnicky-3101365",
          external: true,
        },
        {
          text: " povoľuje zvislú alebo mierne naklonenú polohu. Po preprave na boku odporúča počkať 12 hodín, pri starších chladničkách 24 hodín, po zvislej preprave 2 hodiny.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          text: "Electrolux",
          href: "https://support.electrolux.sk/support-articles/article/pokyny-na-prepravu-chladiacich-spotrebicov",
          external: true,
        },
        {
          text: " predpisuje pre prípad, že zvislá preprava nie je možná, uloženie na chrbát s podložením hornej časti minimálne 15 cm a odstátie na aspoň 4 hodiny.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          text: "LG",
          href: "https://www.lg.com/sk/podpora/rady-tipy-navody/CT20214040-20155255784640",
          external: true,
        },
        {
          text: " odporúča držať spotrebič vzpriamene a pri položení na bok počkať aspoň 2 hodiny, a to aj pri veľmi krátkom prevoze.",
        },
      ],
    },
    {
      type: "paragraph",
      content:
        "Prevoz chladničky naležato teda výrobcovia neodporúčajú ako prvú možnosť. Časť výrobcov ho pripúšťa ako výnimku s určitými podmienkami.",
    },
    {
      type: "cta",
      label: "Získajte cenovú ponuku",
      content: [
        {
          text: "Potrebujete presťahovať nábytok, vybavenie alebo spotrebiče vrátane chladničky? Obráťte sa na ",
        },
        {
          text: "profesionálov v oblasti sťahovania",
          href: "/stahovanie",
        },
        {
          text: ". Za roky praxe od roku 2018 vieme, ako prenášať chladničku aj nábytok cez schody, úzke priestory a v aute bez rizika.",
        },
      ],
    },
    {
      type: "heading",
      level: 3,
      id: "preco-je-poloha-dolezita",
      text: "Prečo je poloha chladničky pri prevoze dôležitá",
    },
    {
      type: "paragraph",
      content:
        "Pri tom, ako prenášať chladničku, rozhodujú dva faktory: poloha oleja v kompresore a namáhanie jeho pružného uloženia.",
    },
    {
      type: "paragraph",
      content:
        "Vo zvislej polohe je olej v kompresore a uloženie zaťažené v smere, na ktorý je konštruované. Pri preprave chladničky naležato môže olej preniknúť do chladiaceho okruhu a na uloženie pôsobia bočné sily. Dôsledkom toho môže byť zhoršené chladenie alebo porucha kompresora.",
    },
    {
      type: "heading",
      level: 2,
      id: "priprava-spotrebica",
      text: "Ako prevážať chladničku, aby ste ju nepoškodili",
    },
    {
      type: "paragraph",
      content:
        "Výrobcovia okrem zvislého prevozu odporúčajú chladničku vo vozidle pevne zaistiť. Tak sa dokáže predísť nežiaducemu posúvaniu, nakláňaniu alebo nárazom, ktorým je počas jazdy autom vystavená.",
    },
    {
      type: "paragraph",
      content: "Odporúčame vám chladničku pred prepravou pripraviť takto:",
    },
    {
      type: "list",
      items: [
        "Spotrebič odpojte niekoľko hodín pred prevozom, vyprázdnite ho a nechajte úplne odmraziť. Pri konkrétnom modeli sa riaďte pokynmi výrobcu.",
        "Vylejte vodu z odkvapkávacej tácky a interiér vytrite do sucha. Zvyšková voda pri prevoze môže vytiecť na podlahu alebo do elektroinštalácie.",
        "Vyberte sklenené police, priehradky a zásuvky. Prevezte ich zabalené zvlášť.",
        "Prelepte dvere páskou, aby sa počas nakladania neotvorili.",
        "Spotrebič obaľte dekou alebo fóliou. Chráni to lak aj vaše steny a zábradlia.",
        "Kábel zviňte a pripevnite k zadnej stene.",
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          text: "Ak nechcete riskovať poškodenie chladničky alebo nábytku pri manipulácii, využite naše ",
        },
        { text: "profesionálne sťahovacie služby", href: "/" },
        { text: "." },
      ],
    },
    {
      type: "cta",
      label: "Kontaktujte nás",
      content: [
        { text: "V Sofoservise vykonávame " },
        {
          text: "sťahovanie bytov, domov",
          href: "/stahovanie/stahovanie-bytov-domov",
        },
        { text: " aj " },
        {
          text: "ťažkých a objemných predmetov",
          href: "/stahovanie/stahovanie-tazkych-bremien",
        },
        {
          text: ". Poradíme si s objemnými či americkými chladničkami a všetok prepravovaný tovar aj nábytok vám bezpečne dopravíme všade, kam potrebujete.",
        },
      ],
    },
    {
      type: "paragraph",
      content:
        "Obalový materiál si u nás môžete objednať vopred, prípadne vám ho vieme zabezpečiť a dodať priamo v deň sťahovania. Nemusíte tak zháňať vhodné materiály samostatne.",
    },
    {
      type: "heading",
      level: 2,
      id: "prevoz-nalezato",
      text: "Ako prepravovať chladničku naležato?",
    },
    {
      type: "paragraph",
      content:
        "Preprava chladničky naležato je možná, ale len na bok, s trubkami kompresora smerom nahor a s odstátím 24 hodín pred zapojením. Na prednú stenu s dverami spotrebič neukladajte nikdy. V otázke bočnej verzus zadnej steny sa výrobcovia rozchádzajú, preto rozhoduje manuál k vášmu modelu.",
    },
    {
      type: "paragraph",
      content: [
        { text: "V praxi pri " },
        {
          text: "sťahovaní bytov a domácností",
          href: "/stahovanie/stahovanie-bytov-domov",
        },
        {
          text: " preferujeme prevoz vo zvislej polohe, no v prípade, že chladničku prevážame naležato, odporúčame nechať chladničku pred zapojením odstáť.",
        },
      ],
    },
    {
      type: "paragraph",
      content:
        "Krátka trasa nie je výnimka. Aj desať minút v ležiacej polohe stačí na to, aby z kompresora vytiekol olej. Preprava chladničky naležato teda nie je bezpečnejšia tým, že je krátka.",
    },
    {
      type: "paragraph",
      content:
        "Pri prevoze chladničky naležato je dôležitá aj šetrná manipulácia. Chladničku nepúšťajte prudko na bok, neotáčajte ju cez rohy a pri ukladaní do auta použite mäkkú podložku. Počas nakladania a vykladania ju neťahajte po zemi, aby ste nepoškodili jej spodnú časť alebo povrch.",
    },
    {
      type: "paragraph",
      content:
        "Pozor si dajte aj na samotnú jazdu. Chladnička položená na boku je citlivejšia na otrasy a prudké brzdenie, preto ju treba vo vozidle dobre zaistiť a nezaťažovať ďalším nákladom.",
    },
    {
      type: "cta",
      label: "Kontaktujte nás",
      content:
        "Sťahujeme domácnosti od roku 2018 a za tie roky sme sa naučili jedno: chladničky sa najčastejšie poškodia ešte pred naložením, nie na ceste. Práve preto v praxi podľa potreby chránime nábytok aj spotrebiče bublinkovou fóliou, sťahovacími dekami a ďalším obalovým materiálom. Ten si môžete objednať vopred alebo vám ho vieme zabezpečiť priamo v deň sťahovania.",
    },
    {
      type: "heading",
      level: 2,
      id: "odstatie-pred-zapojenim",
      text: "Prečo nechať chladničku 24 hodín odstáť",
    },
    {
      type: "paragraph",
      content:
        "Po vyložení postavte chladničku na miesto, kde bude stáť, nožičkami ju vyrovnajte do vodorovnej polohy a nechajte ju 24 hodín odstáť. Až potom ju zapojte. Olej, ktorý počas ležania odtiekol do chladiaceho okruhu, sa musí vrátiť späť. Ak sa kompresor spustí skôr, beží s nedostatočným mazaním.",
    },
    {
      type: "paragraph",
      content:
        "Manuály výrobcov uvádzajú rôzne lehoty, no tie sa líšia podľa modelu aj podľa toho, ako dlho spotrebič ležal. Preto je 24 hodín bezpečná hranica, ktorá platí pre každú chladničku. Lehota sa vzťahuje aj na krátke trasy, pretože na presun oleja stačí niekoľko minút v ležiacej polohe.",
    },
    {
      type: "heading",
      level: 2,
      id: "caste-otazky",
      text: "Často kladené otázky",
    },
    { type: "faq", items: faq },
    {
      type: "heading",
      level: 2,
      id: "prevezieme-za-vas",
      text: "Prevezieme nábytok aj spotrebiče za vás",
    },
    {
      type: "paragraph",
      content: [
        {
          text: "Sťahujete sa a neviete, ako prevážať chladničku, nábytok a vybavenie bez rizika? Spotrebiče presúvame v rámci ",
        },
        {
          text: "sťahovania bytov a domov",
          href: "/stahovanie/stahovanie-bytov-domov",
        },
        {
          text: ", samostatný prevoz jednej bežnej chladničky neponúkame. Veľké americké chladničky riešime v rámci ",
        },
        {
          text: "sťahovania ťažkých bremien",
          href: "/stahovanie/stahovanie-tazkych-bremien",
        },
        { text: " vrátane vynášky po schodoch bez výťahu." },
      ],
    },
    {
      type: "paragraph",
      content: [
        { text: "Obhliadka je bezplatná a orientačné ceny nájdete v " },
        { text: "cenníku", href: "/cennik" },
        { text: ". Obráťte sa na nás a dohodneme termín obratom." },
      ],
    },
  ],
};

export const blogArticles: BlogArticleData[] = [refrigeratorArticle];