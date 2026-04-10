import React from "react";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Všeobecné obchodné podmienky | VOP | Sofoservis",
  description:
    "Všeobecné obchodné podmienky spoločnosti Sofoservices s.r.o. – podmienky poskytovania služieb sťahovania, vypratávania, montáže nábytku a handyman služieb.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.sofoservis.sk/vseobecne-obchodne-podmienky",
    languages: {
      sk: "https://www.sofoservis.sk/vseobecne-obchodne-podmienky",
      en: "https://www.sofoservis.sk/en/terms-of-service",
      "x-default": "https://www.sofoservis.sk/vseobecne-obchodne-podmienky",
    },
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="w-2 h-8 bg-yellow-400 mr-4 rounded flex-shrink-0"></span>
        {title}
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">{children}</div>
    </section>
  );
}

function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 ml-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Ol({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="space-y-3 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-yellow-600 font-semibold flex-shrink-0 min-w-[1.5rem]">{i + 1}.</span>
          <span className="text-gray-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function VOPPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-6 sm:py-16 lg:py-24 mt-0 md:mt-4 lg:mt-28">
          <div className="max-w-4xl mx-auto">

            <header className="mb-8 sm:mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Všeobecné obchodné podmienky
              </h1>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg space-y-3">
                <p className="text-gray-800 leading-relaxed">
                  Spoločnosť <strong className="text-gray-900">Sofoservices s. r. o.</strong>, so sídlom{" "}
                  <strong className="text-gray-900">Lermontovova 3, 811 05 Bratislava – mestská časť Staré Mesto</strong>,
                  IČO: 55 333 800, zapísaná v Obchodnom registri Mestského súdu Bratislava III,
                  oddiel: Sro, vložka č. 167437/B (ďalej len {'„'}<strong>Spoločnosť</strong>{'"'} alebo {'„'}<strong>Sofoservices</strong>{'"'}),
                  vydáva tieto všeobecné obchodné podmienky (ďalej len {'„'}<strong>VOP</strong>{'"'}), ktoré upravujú právne
                  vzťahy medzi Spoločnosťou a jej klientmi pri poskytovaní služieb.
                </p>
                <ul className="space-y-1 text-gray-800 text-sm">
                  <li>
                    <strong className="text-yellow-600">Web:</strong>{" "}
                    <a href="https://www.sofoservis.sk" className="text-blue-600 hover:text-blue-800 transition-colors">
                      www.sofoservis.sk
                    </a>
                  </li>
                  <li>
                    <strong className="text-yellow-600">E-mail:</strong>{" "}
                    <a href="mailto:info@sofoservis.sk" className="text-blue-600 hover:text-blue-800 transition-colors">
                      info@sofoservis.sk
                    </a>
                  </li>
                  <li>
                    <strong className="text-yellow-600">Telefón:</strong>{" "}
                    <a href="tel:+421905771151" className="text-blue-600 hover:text-blue-800 transition-colors">
                      +421 905 771 151
                    </a>
                  </li>
                </ul>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">

              <Section title="I. Úvodné ustanovenia">
                <Ol items={[
                  "Tieto VOP upravujú práva a povinnosti Spoločnosti a klientov pri poskytovaní služieb najmä v oblasti sťahovania, vypratávania, montáže a demontáže nábytku, montáže kuchýň, odvozu a likvidácie odpadu, handyman služieb a ďalších súvisiacich činností.",
                  "Tieto VOP tvoria neoddeliteľnú súčasť každej zmluvy o poskytnutí služby uzatvorenej medzi Spoločnosťou a klientom, ak nie je medzi stranami písomne dohodnuté inak.",
                  "Ak je medzi Spoločnosťou a klientom uzatvorená osobitná písomná zmluva, jej ustanovenia majú prednosť pred týmito VOP.",
                ]} />
              </Section>

              <Section title="II. Definície pojmov">
                <Ol items={[
                  <><strong>Služby</strong> sú činnosti poskytované Spoločnosťou, najmä sťahovanie bytov, domov, kancelárií a firiem, medzinárodné sťahovanie, vypratávanie bytov, domov, pivníc, garáží a nebytových priestorov, odvoz a likvidácia odpadu, montáž a demontáž nábytku, montáž kuchýň, handyman práce a ďalšie dohodnuté činnosti.</>,
                  <><strong>Predmet služby</strong> je priestor, nehnuteľnosť, hnuteľná vec alebo súbor vecí, pri ktorých alebo s ktorými má byť služba vykonaná.</>,
                  <><strong>Klient</strong> je fyzická osoba alebo právnická osoba, ktorá si objedná službu od Spoločnosti.</>,
                  <><strong>Spotrebiteľ</strong> je fyzická osoba, ktorá pri uzatváraní a plnení zmluvy nekoná v rámci predmetu svojho podnikania, zamestnania alebo povolania.</>,
                  <><strong>Podnikateľ</strong> je klient, ktorý nie je spotrebiteľom, najmä právnická osoba alebo fyzická osoba – podnikateľ.</>,
                  <><strong>Zmluva</strong> je zmluva o poskytnutí služby uzatvorená medzi Spoločnosťou a klientom.</>,
                  <><strong>Objednávka</strong> je požiadavka klienta na poskytnutie služby doručená Spoločnosti telefonicky, e-mailom, cez webový formulár, prostredníctvom WhatsApp, Messengeru alebo iným komunikačným kanálom.</>,
                  <><strong>Potvrdenie objednávky</strong> je akceptácia objednávky zo strany Spoločnosti zaslaná klientovi e-mailom, SMS, prostredníctvom WhatsApp, Messengeru alebo iným preukázateľným spôsobom.</>,
                  <><strong>Cena služby</strong> je cena dohodnutá medzi Spoločnosťou a klientom za poskytnutie služby; ak nie je výslovne uvedené inak, ceny sú uvádzané bez DPH. Ak je klient spotrebiteľom, Spoločnosť ho pred záväzným potvrdením objednávky informuje aj o celkovej konečnej cene vrátane DPH, ak sa DPH uplatňuje.</>,
                  <><strong>Viacpráce</strong> sú práce, úkony, čas alebo náklady nad rámec pôvodne dohodnutého rozsahu služby.</>,
                  <><strong>Časové rozmedzie začatia služby</strong> je orientačný interval, v ktorom má byť služba začatá.</>,
                  <><strong>Preberací protokol</strong> je písomné alebo elektronické potvrdenie o priebehu, rozsahu, odovzdaní, prevzatí, prípadných výhradách, cenovom vyúčtovaní alebo inom podstatnom údaji súvisiacom so službou. Za elektronický preberací protokol sa považuje aj potvrdenie vykonania služby e-mailom, SMS, prostredníctvom WhatsApp alebo iným preukázateľným elektronickým spôsobom.</>,
                ]} />
              </Section>

              <Section title="III. Uzavretie zmluvy">
                <Ol items={[
                  "Klient prejaví záujem o službu zaslaním dopytu alebo objednávky Spoločnosti.",
                  "Na základe dopytu Spoločnosť spravidla zašle klientovi cenovú ponuku, orientačný rozsah služby, návrh termínu, prípadne ďalšie podmienky.",
                  "Zmluva je uzatvorená až okamihom, keď Spoločnosť objednávku klienta potvrdí.",
                  "Potvrdenie objednávky môže byť uskutočnené e-mailom, SMS, telefonicky s následným záznamom, prostredníctvom WhatsApp, Messengeru alebo iným preukázateľným spôsobom.",
                  "Súčasťou zmluvy sú najmä: objednávka klienta, potvrdenie objednávky, individuálne dohodnutá cenová ponuka, tieto VOP a prípadné preberacie alebo odovzdávacie protokoly.",
                  "Klient uzatvorením zmluvy vyhlasuje, že je oprávnený zmluvu uzatvoriť, že poskytol Spoločnosti pravdivé a úplné údaje a že sa oboznámil s týmito VOP.",
                  "Objednávka potvrdená Spoločnosťou je záväzná.",
                ]} />
              </Section>

              <Section title="IV. Predmet a rozsah služieb">
                <Ol items={[
                  "Spoločnosť poskytuje služby podľa individuálnej dohody s klientom.",
                  "Konkrétny rozsah služby je vždy určený v objednávke, potvrdení objednávky, cenovej ponuke alebo v inej preukázateľnej komunikácii medzi stranami.",
                  <>
                    Spoločnosť je oprávnená odmietnuť alebo prerušiť vykonanie služby, ak:
                    <Ul items={[
                      "by jej vykonanie bolo v rozpore s právnymi predpismi,",
                      "by jej vykonanie bolo v rozpore s bezpečnostnými pravidlami,",
                      "klient neposkytne potrebnú súčinnosť,",
                      "sa dodatočne preukáže, že skutočný rozsah alebo podmienky služby sa podstatne líšia od údajov poskytnutých klientom.",
                    ]} />
                  </>,
                  "Spoločnosť poskytuje služby s odbornou starostlivosťou, v rozsahu a za podmienok dohodnutých s klientom.",
                ]} />
              </Section>

              <Section title="V. Povinnosti klienta a súčinnosť">
                <Ol items={[
                  <>
                    Klient je povinný pred začatím služby pravdivo, úplne a včas informovať Spoločnosť najmä o:
                    <Ul items={[
                      "rozsahu vecí alebo prác,",
                      "poschodí, výťahu, prístupnosti objektu a možnostiach parkovania,",
                      "ťažkých bremenách, nadrozmerných predmetoch a osobitne citlivých veciach,",
                      "prekážkach na trase, časových obmedzeniach objektu alebo osobitných pravidlách objektu,",
                      "potrebnej súčinnosti tretích osôb,",
                      "nebezpečných, rizikových alebo osobitne chránených veciach.",
                    ]} />
                  </>,
                  <>
                    Klient je povinný zabezpečiť najmä:
                    <Ul items={[
                      "prístup na miesto plnenia,",
                      "prítomnosť svoju alebo poverenej osoby, ak nie je dohodnuté inak,",
                      "bezpečný a voľný pohyb pracovníkov,",
                      "prístup k elektrine, vode alebo iným zdrojom, ak sú potrebné,",
                      "pokyny na umiestňovanie vecí, ak je to potrebné na riadne vykonanie služby.",
                    ]} />
                  </>,
                  <>
                    Ak klient neposkytne potrebnú súčinnosť, Spoločnosť je oprávnená službu primerane prerušiť, odložiť alebo ukončiť. V takom prípade má Spoločnosť nárok najmenej na úhradu:
                    <Ul items={[
                      "už vykonaných prác,",
                      "preukázateľne vzniknutých nákladov,",
                      "nákladov márneho výjazdu,",
                      "rezervovanej kapacity,",
                      "dohodnutých alebo vzniknutých viacprác.",
                    ]} />
                  </>,
                  "Klient zodpovedá za správnosť a úplnosť informácií poskytnutých Spoločnosti. Ak sa počas vykonávania služby ukáže, že tieto informácie boli neúplné, nepravdivé alebo zavádzajúce, Spoločnosť je oprávnená primerane upraviť cenu, čas, personálne alebo technické zabezpečenie služby.",
                  "Klient je povinný bezodkladne upozorniť Spoločnosť na akékoľvek okolnosti, ktoré môžu viesť ku vzniku škody alebo ohrozeniu života a zdravia osôb.",
                ]} />
              </Section>

              <Section title="VI. Čas a miesto poskytovania služby">
                <Ol items={[
                  "Miesto, dátum a predpokladané časové rozmedzie začatia služby sa určujú dohodou strán.",
                  "Čas začatia služby je vzhľadom na povahu služieb orientačný, ak nie je výslovne dohodnuté inak.",
                  "Spoločnosť je oprávnená primerane upraviť čas začatia, priebeh alebo trvanie služby z prevádzkových, dopravných, technických, bezpečnostných alebo iných objektívnych dôvodov. O takejto zmene bude klient podľa možností bezodkladne informovaný.",
                  "Klient je povinný byť v deň poskytovania služby dostupný na dohodnutých kontaktných údajoch.",
                  "Ak klient nie je dostupný, neposkytne prístup na miesto výkonu služby alebo neposkytne údaje potrebné na riadne vykonanie služby, Spoločnosť má nárok najmenej na úhradu podľa čl. V ods. 3 týchto VOP.",
                ]} />
              </Section>

              <Section title="VII. Služba v neprítomnosti klienta">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg -mx-2 mb-2">
                  <p className="text-sm text-yellow-800">
                    <strong>Odporúčanie:</strong> Spoločnosť odporúča, aby pri poskytovaní služby bol vždy prítomný klient alebo ním poverená osoba.
                  </p>
                </div>
                <Ol items={[
                  "Spoločnosť odporúča, aby pri poskytovaní služby bol prítomný klient alebo ním poverená osoba.",
                  "Na výslovnú žiadosť klienta môže byť služba poskytnutá aj bez jeho prítomnosti.",
                  "Ak klient žiada vykonanie služby bez svojej prítomnosti, berie na vedomie, že tým obmedzuje možnosť okamžite namietať priebeh, rozsah alebo spôsob vykonania služby na mieste.",
                  "Ak klient odovzdá Spoločnosti kľúče, prístupové údaje alebo iný spôsob vstupu do objektu, zodpovedá za to, že tak urobil oprávnene. Spoločnosť je oprávnená použiť tieto prístupové prostriedky výlučne na účel vykonania služby.",
                ]} />
              </Section>

              <Section title="VIII. Cena služieb">
                <Ol items={[
                  "Ceny služieb sú určované individuálne podľa typu služby, rozsahu, času, počtu pracovníkov, potreby vozidiel, vybavenia, náročnosti manipulácie, dopravnej vzdialenosti, prístupnosti objektu, potreby obalového materiálu, likvidácie odpadu a ďalších okolností.",
                  "Ak nie je výslovne uvedené inak, ceny uvádzané Spoločnosťou sú bez DPH.",
                  "Ak je klient spotrebiteľom, Spoločnosť ho pred záväzným potvrdením objednávky oboznámi aj s konečnou cenou vrátane DPH, ak sa DPH uplatňuje.",
                  <>
                    Cena môže byť dohodnutá ako:
                    <Ul items={[
                      <><strong>fixná cena</strong>, alebo</>,
                      <><strong>hodinová cena</strong>, prípadne kombinácia oboch.</>,
                    ]} />
                  </>,
                  "Ak je cena dohodnutá ako fixná, vzťahuje sa výlučne na rozsah a podmienky služby, ktoré boli dohodnuté pred potvrdením objednávky.",
                  "Ak sa po potvrdení objednávky ukáže, že skutočný rozsah služby alebo podmienky jej vykonania sú odlišné od dohodnutých, Spoločnosť je oprávnená cenu primerane upraviť.",
                  "Ak je cena dohodnutá ako hodinová, klient uhrádza cenu podľa skutočne odpracovaného času a ďalších dohodnutých položiek.",
                  "Ak Spoločnosť poskytne klientovi iba orientačný cenový odhad, nejde o fixnú cenu. Konečná cena sa v takom prípade určí podľa skutočne vykonaných prác, času a nákladov.",
                  "Nad rámec pôvodne dohodnutej ceny sa účtujú viacpráce podľa čl. IX týchto VOP.",
                ]} />
              </Section>

              <Section title="IX. Viacpráce a zmena rozsahu služby">
                <Ol items={[
                  <>
                    Za viacpráce sa považujú najmä:
                    <Ul items={[
                      "práce alebo úkony nad rámec pôvodnej objednávky,",
                      "vyšší objem vecí alebo odpadu, než bol pôvodne oznámený,",
                      "neohlásené poschodia, absencia alebo nepoužiteľnosť výťahu,",
                      "nemožnosť parkovania v primeranej vzdialenosti,",
                      "dodatočne zistené ťažké bremená alebo nadrozmerné predmety,",
                      "dodatočná demontáž, montáž, balenie alebo manipulácia,",
                      "čakanie spôsobené klientom,",
                      "prekážky v objekte alebo obmedzenia, ktoré klient vopred neoznámil,",
                      "potreba ďalších pracovníkov, vozidiel, materiálu alebo času.",
                    ]} />
                  </>,
                  "Rozšírenie rozsahu služby na mieste je možné len po odsúhlasení Spoločnosťou.",
                  "Zúženie rozsahu služby zo strany klienta po potvrdení objednávky nemá automaticky vplyv na zníženie dohodnutej fixnej ceny, ak už bola rezervovaná kapacita, pracovníci, vozidlá, čas alebo iné zdroje.",
                  "Viacpráce môžu byť odsúhlasené osobne na mieste, telefonicky, e-mailom, SMS, prostredníctvom WhatsApp alebo iným preukázateľným spôsobom; také odsúhlasenie je záväzné.",
                  "Ak okolnosti prípadu neumožňujú bezodkladne vyžiadať odsúhlasenie viacprác, no ich vykonanie je potrebné na bezpečné, riadne alebo vôbec možné dokončenie služby, Spoločnosť je oprávnená vykonať nevyhnutný rozsah takýchto prác a klient je povinný uhradiť primerane vzniknuté náklady.",
                ]} />
              </Section>

              <Section title="X. Osobitný režim pre cennosti a veci mimoriadnej hodnoty">
                <Ol items={[
                  <>
                    Klient je povinný vopred písomne upozorniť Spoločnosť na veci mimoriadnej hodnoty alebo osobitného režimu, najmä na:
                    <Ul items={[
                      "hotovosť,",
                      "šperky, hodinky a drahé kovy,",
                      "zbrane a strelivo,",
                      "umelecké diela, starožitnosti a zberateľské predmety,",
                      "dôležité listiny, nosiče dát a dokumenty mimoriadnej hodnoty,",
                      "veci s mimoriadnou citovou hodnotou,",
                      "technické zariadenia alebo veci vyžadujúce špeciálnu manipuláciu,",
                      "veci, ktorých hodnota obvykle presahuje bežný štandard vybavenia domácnosti alebo prevádzky.",
                    ]} />
                  </>,
                  "Klient je povinný takéto veci osobitne označiť a zabezpečiť, prípadne si pre ne dohodnúť osobitný režim manipulácie.",
                  "Ak klient nesplní svoju oznamovaciu povinnosť podľa tohto článku, Spoločnosť nezodpovedá za škodu v rozsahu, v akom jej nebolo umožnené prijať primerané opatrenia na ochranu takýchto vecí.",
                  "Spoločnosť je oprávnená odmietnuť manipuláciu s vecami, pri ktorých by vzhľadom na ich povahu, hodnotu, rizikovosť alebo nevyhnutnosť osobitných povolení nebolo možné zabezpečiť primeranú odbornú, technickú alebo poistnú ochranu.",
                ]} />
              </Section>

              <Section title="XI. Platobné podmienky">
                <Ol items={[
                  "Klient je povinný uhradiť cenu služby riadne a včas.",
                  "Ak nie je dohodnuté inak, cena jednorazovo poskytnutej služby je splatná v deň poskytnutia služby, najneskôr však v lehote uvedenej na faktúre.",
                  "Ak je cena hradená na základe faktúry, záväzok klienta je splnený dňom pripísania celej dlžnej sumy na účet Spoločnosti.",
                  "Spoločnosť je oprávnená požadovať od klienta primeraný preddavok alebo zálohu.",
                  <>
                    V prípade omeškania klienta s úhradou má Spoločnosť právo na:
                    <Ul items={[
                      "zákonné úroky z omeškania,",
                      "zmluvnú pokutu, ak je dohodnutá,",
                      "náhradu účelne vynaložených nákladov spojených s uplatnením pohľadávky,",
                      "pri podnikateľovi aj na paušálnu náhradu nákladov spojených s uplatnením pohľadávky, ak na ňu Spoločnosti vznikne nárok podľa právnych predpisov.",
                    ]} />
                  </>,
                  "Ak je klient podnikateľom, v prípade omeškania s úhradou sa zaväzuje zaplatiť Spoločnosti zmluvnú pokutu vo výške 0,1 % z dlžnej sumy za každý začatý deň omeškania, pokiaľ právne predpisy neustanovujú inak. Nárok na náhradu škody a zákonné úroky z omeškania tým nie sú dotknuté.",
                  "Spoločnosť je oprávnená pri omeškaní klienta s úhradou pozastaviť poskytovanie ďalších služieb až do úplného zaplatenia všetkých splatných záväzkov klienta.",
                ]} />
              </Section>

              <Section title="XII. Elektronická fakturácia a doručovanie">
                <Ol items={[
                  "Klient súhlasí s tým, aby mu Spoločnosť doručovala faktúry, výzvy, preberacie protokoly, potvrdenia objednávok a inú dokumentáciu elektronicky, najmä e-mailom alebo prostredníctvom iného dohodnutého elektronického komunikačného kanála.",
                  "Klient je povinný poskytnúť Spoločnosti správne a funkčné kontaktné údaje a bezodkladne oznámiť ich zmenu.",
                  "Elektronická písomnosť sa považuje za doručenú dňom jej odoslania na poslednú klientom oznámenú e-mailovú adresu alebo iný dohodnutý elektronický kontakt, ak sa nepreukáže opak.",
                  "Spoločnosť je oprávnená vyhotovovať a doručovať faktúry výlučne elektronicky, ak právne predpisy alebo osobitná dohoda nevyžadujú inú formu.",
                ]} />
              </Section>

              <Section title="XIII. Preberací protokol, prevzatie služby a dôkazné ustanovenia">
                <Ol items={[
                  "Po skončení služby je klient povinný službu bezodkladne prevziať, skontrolovať a podľa možností potvrdiť jej prevzatie.",
                  <>
                    Za dôkaz o riadnom vykonaní a odovzdaní služby sa považuje najmä:
                    <Ul items={[
                      "podpísaný preberací protokol,",
                      "elektronický preberací protokol,",
                      "e-mailové, SMS alebo WhatsApp potvrdenie klienta,",
                      "fotodokumentácia alebo videodokumentácia,",
                      "záznam o telefonickom odsúhlasení,",
                      "interný pracovný výkaz Spoločnosti, ak klient odmietol potvrdenie bez uvedenia konkrétnych výhrad,",
                      "iný preukázateľný záznam o odovzdaní a prevzatí služby.",
                    ]} />
                  </>,
                  "Ak klient pri prevzatí neuvedie konkrétne výhrady, má sa za to, že služba bola prevzatá bez zjavných výhrad.",
                  "Ak klient odmietne podpísať preberací protokol alebo inak potvrdiť prevzatie služby bez uvedenia konkrétnych výhrad, nemá táto skutočnosť sama osebe vplyv na vznik nároku Spoločnosti na úhradu ceny služby, ak bolo vykonanie služby preukázané iným spôsobom.",
                  "Ak klient z dôvodov na svojej strane neprevezme službu bezodkladne po jej skončení, považuje sa služba za riadne vykonanú a odovzdanú okamihom, keď mu Spoločnosť umožnila jej prevzatie.",
                ]} />
              </Section>

              <Section title="XIV. Reklamácie a zodpovednosť za vady služby">
                <Ol items={[
                  "Spoločnosť zodpovedá za vady služby v rozsahu ustanovenom príslušnými právnymi predpismi.",
                  "Vadou služby sa rozumie najmä to, že služba nebola vykonaná v dohodnutom rozsahu alebo nebola vykonaná s primeranou odbornou starostlivosťou obvyklou pre daný typ služby.",
                  "Klient je povinný zjavné vady namietať bez zbytočného odkladu, ideálne priamo pri poskytovaní služby alebo pri jej prevzatí.",
                  "Ak sa vada prejaví až po skončení služby alebo ju nebolo možné rozumne zistiť počas jej poskytovania, klient je povinný oznámiť ju bez zbytočného odkladu po jej zistení, najneskôr však do 48 hodín od jej zistenia.",
                  <>
                    Reklamácia musí byť uplatnená písomne, najmä e-mailom, a musí obsahovať aspoň:
                    <Ul items={[
                      "identifikáciu klienta,",
                      "identifikáciu služby,",
                      "opis reklamovanej vady,",
                      "čas, kedy bola vada zistená,",
                      "dostupnú fotodokumentáciu alebo inú dokumentáciu, ak to povaha veci umožňuje.",
                    ]} />
                  </>,
                  "Ak je to možné, klient je povinný umožniť Spoločnosti preveriť reklamovaný stav a prijať primerané opatrenia na odstránenie vady.",
                  "Neskoré alebo nedostatočne zdokumentované uplatnenie reklamácie môže sťažiť alebo znemožniť posúdenie reklamácie a preukázanie nároku klienta.",
                  "Týmto článkom nie sú dotknuté práva spotrebiteľa, ktoré nemožno podľa právnych predpisov vylúčiť alebo obmedziť.",
                ]} />
              </Section>

              <Section title="XV. Zodpovednosť za škodu">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg -mx-2 mb-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Poistenie:</strong> Spoločnosť je poistená u poisťovne <strong>Generali Poisťovňa a. s.</strong> —
                    všeobecná zodpovednosť za škodu do výšky <strong>€ 100 000</strong> a zodpovednosť za škodu
                    na prevzatých/uložených veciach do výšky <strong>€ 10 000</strong>.
                  </p>
                </div>
                <Ol items={[
                  "Spoločnosť zodpovedá za škodu spôsobenú klientovi pri poskytovaní služby podľa príslušných právnych predpisov.",
                  "Klient je povinný akúkoľvek škodu, ktorú považuje za spôsobenú v súvislosti s poskytovaním služby, oznámiť Spoločnosti bez zbytočného odkladu po jej zistení, najneskôr však do 48 hodín od jej zistenia.",
                  <>
                    Oznámenie škody musí byť písomné a musí obsahovať aspoň:
                    <Ul items={[
                      "opis škody,",
                      "okolnosti, za ktorých mala vzniknúť,",
                      "čas jej zistenia,",
                      "fotodokumentáciu alebo inú dostupnú dokumentáciu, ak to povaha prípadu umožňuje.",
                    ]} />
                  </>,
                  "Klient je povinný prijať primerané opatrenia na zabránenie zväčšovaniu škody.",
                  "Klient je povinný poskytnúť Spoločnosti a prípadne poisťovni potrebnú súčinnosť pri preverovaní vzniku a rozsahu škody.",
                  "Neskoré oznámenie škody alebo nedostatočné preukázanie okolností jej vzniku môže sťažiť alebo znemožniť preukázanie príčinnej súvislosti medzi škodou a činnosťou Spoločnosti.",
                  <>
                    Spoločnosť nezodpovedá za škodu, ak bola spôsobená:
                    <Ul items={[
                      "neúplnými alebo nepravdivými informáciami poskytnutými klientom,",
                      "pokynom klienta, na ktorého nevhodnosť alebo rizikovosť bol klient upozornený,",
                      "vlastnosťou veci, jej nevhodným zabalením alebo nedostatočným zabezpečením zo strany klienta,",
                      "okolnosťami, ktoré Spoločnosť nemohla pri vynaložení primeranej starostlivosti odvrátiť.",
                    ]} />
                  </>,
                  "Ak je to primerané a možné, škoda sa primárne rieši uvedením do predošlého stavu, opravou, primeranou zľavou alebo peňažnou náhradou podľa povahy prípadu a podľa príslušných právnych predpisov.",
                ]} />
              </Section>

              <Section title="XVI. Čiastočné plnenie a nemožnosť dokončenia služby">
                <Ol items={[
                  <>
                    Ak je služba z dôvodov na strane klienta vykonaná len sčasti alebo ju nie je možné dokončiť, Spoločnosť má nárok najmenej na úhradu:
                    <Ul items={[
                      "už vykonaných prác,",
                      "času pracovníkov,",
                      "dopravných nákladov,",
                      "nákladov na materiál,",
                      "vzniknutých viacprác,",
                      "rezervovanej kapacity a ďalších preukázateľne vzniknutých nákladov.",
                    ]} />
                  </>,
                  "Ak nie je možné službu dokončiť z dôvodov na strane klienta, nemá táto skutočnosť sama osebe vplyv na nárok Spoločnosti na primeranú úhradu podľa ods. 1.",
                ]} />
              </Section>

              <Section title="XVII. Odstúpenie od zmluvy, zrušenie objednávky a storno podmienky">
                <Ol items={[
                  "Klient môže objednávku zrušiť aj pred začatím poskytovania služby.",
                  "Ak klient zruší objednávku menej ako 48 hodín pred začiatkom dohodnutého časového rozmedzia, je Spoločnosť oprávnená požadovať storno náhradu vo výške 50 % z dohodnutej ceny služby, najmenej však vo výške preukázateľne rezervovanej kapacity a vzniknutých nákladov.",
                  "Ak klient zruší objednávku menej ako 12 hodín pred začiatkom dohodnutého časového rozmedzia alebo po výjazde pracovníkov na miesto plnenia, je Spoločnosť oprávnená požadovať storno náhradu až do výšky 100 % z dohodnutej ceny služby, ak tomu zodpovedá rozsah rezervovanej kapacity a vzniknutých nákladov.",
                  "Ustanovenia ods. 2 a 3 sa použijú primerane aj vtedy, ak klient svojím konaním alebo opomenutím znemožní začatie alebo pokračovanie služby.",
                  "Týmto článkom nie sú dotknuté osobitné práva spotrebiteľa podľa čl. XX týchto VOP.",
                ]} />
              </Section>

              <Section title="XVIII. Pravidelné poskytovanie služieb">
                <Ol items={[
                  "Pri pravidelnom poskytovaní služieb možno medzi stranami uzatvoriť osobitnú písomnú zmluvu.",
                  "V takom prípade sa tieto VOP použijú v rozsahu, v akom osobitná zmluva nestanoví inak.",
                  "Ak nie je v osobitnej zmluve dohodnuté inak, pre jednotlivé výkony v rámci pravidelného poskytovania služieb sa primerane použijú ustanovenia týchto VOP.",
                ]} />
              </Section>

              <Section title="XIX. Ochrana osobných údajov">
                <Ol items={[
                  "Spoločnosť spracúva osobné údaje klientov v rozsahu a za podmienok určených príslušnými právnymi predpismi o ochrane osobných údajov.",
                  <>
                    Podrobné informácie o spracúvaní osobných údajov sú zverejnené na webovom sídle Spoločnosti v dokumente{" "}
                    <a href="/zasady-spracovania-osobnych-udajov" className="text-blue-600 hover:text-blue-800 transition-colors">
                      Zásady spracúvania osobných údajov
                    </a>.
                  </>,
                ]} />
              </Section>

              <Section title="XX. Osobitné ustanovenia pre spotrebiteľa">
                <Ol items={[
                  "Ak je klient spotrebiteľom a zmluva je uzatvorená na diaľku alebo mimo prevádzkových priestorov Spoločnosti, má práva spotrebiteľa podľa príslušných právnych predpisov o ochrane spotrebiteľa.",
                  "Spotrebiteľ má právo odstúpiť od zmluvy v zákonnej lehote, ak zákon alebo povaha služby neustanovujú inak.",
                  <>
                    Ak spotrebiteľ výslovne požiada o začatie poskytovania služby pred uplynutím lehoty na odstúpenie od zmluvy, berie na vedomie, že:
                    <Ul items={[
                      "v prípade úplného poskytnutia služby môže za podmienok ustanovených právnymi predpismi stratiť právo na odstúpenie od zmluvy,",
                      "v prípade odstúpenia po začatí poskytovania služby je povinný uhradiť pomernú časť ceny za služby, ktoré boli do okamihu odstúpenia preukázateľne poskytnuté.",
                    ]} />
                  </>,
                  "Spoločnosť pri uzatváraní zmluvy so spotrebiteľom poskytne spotrebiteľovi informácie v rozsahu vyžadovanom právnymi predpismi.",
                  "Ak spotrebiteľ nie je spokojný so spôsobom vybavenia reklamácie alebo sa domnieva, že Spoločnosť porušila jeho práva, má právo obrátiť sa na Spoločnosť so žiadosťou o nápravu.",
                  "Ak Spoločnosť na žiadosť spotrebiteľa odpovie zamietavo alebo na ňu neodpovie do 30 dní odo dňa jej odoslania, spotrebiteľ má právo podať návrh na alternatívne riešenie sporu príslušnému subjektu alternatívneho riešenia sporov.",
                  <>
                    Príslušným subjektom alternatívneho riešenia sporov môže byť najmä{" "}
                    <a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                      Slovenská obchodná inšpekcia
                    </a>{" "}
                    (www.soi.sk), ak právne predpisy neustanovujú inak.
                  </>,
                ]} />
              </Section>

              <Section title="XXI. Komunikácia a doručovanie">
                <Ol items={[
                  "Komunikácia medzi Spoločnosťou a klientom prebieha najmä prostredníctvom e-mailu, telefónu, SMS, WhatsApp, Messengeru alebo iného dohodnutého komunikačného kanála.",
                  "Úkony smerujúce k vzniku, zmene alebo zániku práv a povinností, najmä objednávka, potvrdenie objednávky, reklamácia, oznámenie škody, odstúpenie od zmluvy alebo storno, môžu byť urobené aj elektronicky, ak sú preukázateľné.",
                  "Klient súhlasí s tým, že komunikácia vedená medzi stranami prostredníctvom elektronických komunikačných prostriedkov môže slúžiť ako dôkaz o obsahu právneho vzťahu medzi stranami.",
                ]} />
              </Section>

              <Section title="XXII. Záverečné ustanovenia">
                <Ol items={[
                  "Právne vzťahy medzi Spoločnosťou a klientom sa riadia právnym poriadkom Slovenskej republiky.",
                  "Ak vzťah obsahuje medzinárodný prvok, použije sa slovenské právo, tým však nie sú dotknuté kogentné ustanovenia na ochranu spotrebiteľa.",
                  "Spoločnosť je oprávnená tieto VOP meniť alebo dopĺňať. Na konkrétny zmluvný vzťah sa však vždy použije znenie VOP účinné v čase uzavretia danej zmluvy, ak nie je medzi stranami výslovne dohodnuté inak.",
                  "Zmenené znenie VOP sa vzťahuje na nové zmluvy uzatvorené po nadobudnutí jeho účinnosti; pri pravidelných zmluvných vzťahoch sa nové znenie použije až po jeho oznámení klientovi, ak to povaha vzťahu pripúšťa.",
                  "Ak je niektoré ustanovenie týchto VOP neplatné, neúčinné alebo nevykonateľné, nemá to vplyv na platnosť a účinnosť ostatných ustanovení.",
                  "Tieto VOP nadobúdajú účinnosť dňa 1. 4. 2025.",
                ]} />
              </Section>

              <section className="mb-12">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontaktné údaje Spoločnosti</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li><strong className="text-yellow-600">Spoločnosť:</strong> Sofoservices s. r. o.</li>
                    <li><strong className="text-yellow-600">Adresa:</strong> Lermontovova 3, 811 05 Bratislava – mestská časť Staré Mesto</li>
                    <li><strong className="text-yellow-600">IČO:</strong> 55 333 800</li>
                    <li>
                      <strong className="text-yellow-600">E-mail:</strong>{" "}
                      <a href="mailto:info@sofoservis.sk" className="text-blue-600 hover:text-blue-800 transition-colors">info@sofoservis.sk</a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">Telefón:</strong>{" "}
                      <a href="tel:+421905771151" className="text-blue-600 hover:text-blue-800 transition-colors">+421 905 771 151</a>
                    </li>
                  </ul>
                </div>
              </section>

            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
