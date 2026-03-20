import { PageContent } from "./types";

const initialPageContent: PageContent = {
  hero: {
    title: "Sťahovacie služby s úsmevom a bez stresu",
    description:
      "Profesionálna sťahovacia spoločnosť s rozsiahlou flotilou vozidiel, skúseným tímom a špecializovaným vybavením.",
    backgroundImage: "/images/sofoservis zamestnanci.jpg",
    formTitle: "Dohodnite si kalkuláciu úplne zadarmo",
    formSubtitle: "Vyplňte formulár a získajte nezáväznú ponuku ešte dnes",
  },
  features: {
    title: "Komplexné sťahovacie služby",
    description: "Bezpečne presúvame váš majetok z bodu A do bodu B.",
    items: [
      {
        image: "/images/icon1.webp",
        title: "Komplexné sťahovacie služby",
        description:
          "Nech sa vaša cesta z bodu A do B uskutoční bez stresu! S našimi službami sťahovanie premeníte na hladký a bezpečný zážitok.",
        link: "/komplexne-stahovanie",
      },
      {
        image: "/images/icon2.webp",
        title: "Sťahovanie 24/6",
        description:
          "Jediná sťahovacia spoločnosť v Bratislave, ktorá vám ponúka flexibilitu kedykoľvek a kdekoľvek.",
        link: "/stahovanie-24-7",
      },
    ],
  },
  faq: {
    title: "Často kladené otázky o sťahovaní",
    items: [
      {
        question: "Aké sťahovacie služby ponúkate?",
        answer:
          "Ponúkame kompletné sťahovacie služby vrátane sťahovania bytov, domov, kancelárií a firiem, montáže a demontáže nábytku, balenia a vybaľovania vecí, a prepravy ťažkých bremien.",
      },
      {
        question: "V ktorých lokalitách poskytujete vaše služby?",
        answer:
          "Naše služby poskytujeme predovšetkým v Bratislave a okolí, ale pôsobíme aj v ďalších mestách ako Trnava, Senec, Pezinok a po celom Slovensku.",
      },
    ],
  },
  clients: {
    title: "Naši klienti",
    logos: [
      { src: "/images/sofoClient1.png", alt: "Google", height: 32 },
      {
        src: "/images/BratislavaRuzinov.png",
        alt: "Bratislava Ružinov",
        height: 64,
      },
    ],
  },
  reviews: {
    title: "Prečo nám zákazníci dôverujú",
    videoReviews: [
      {
        id: "video-1",
        thumbnail: "/images/video1.webp",
        videoUrl: "https://www.youtube.com/embed/cNtLIAon9HM?autoplay=1",
      },
      {
        id: "video-2",
        thumbnail: "/images/video2.webp",
        videoUrl: "https://www.youtube.com/embed/cNtLIAon9HM?autoplay=1",
      },
    ],
  },
  reviewsShowcase: {
    title: "Pridajte sa k naším spokojným klientom",
    variant: "default",
  },
  googleReviews: {
    title: "Google recenzie",
  },
  instagramFeed: {
    title: "Spokojní zákazníci, šťastný život.",
    username: "sofoservis",
    link: "https://instagram.com/sofoservis",
    images: [
      {
        url: "/images/ig1.webp",
        alt: "Sťahovací tím v akcii",
        link: "https://instagram.com/sofoservis/post1",
      },
      {
        url: "/images/ig2.webp",
        alt: "Usmievajúci sa členovia tímu Sofo",
        link: "https://instagram.com/sofoservis/post2",
      },
    ],
  },
  cta: {
    title: "Pomáhame neziskovkám rásť",
    description:
      "Podporujeme dobré veci. Pre neziskové organizácie máme špeciálne podmienky a výhodné ceny na všetky naše služby.",
    buttonText: "Kontaktujte nás",
    buttonLink: "/kontakt",
    image: "/images/sofo_bratislava_stahovanie.jpg",
  },
  lastUpdated: new Date().toISOString(),
};

export default initialPageContent;
