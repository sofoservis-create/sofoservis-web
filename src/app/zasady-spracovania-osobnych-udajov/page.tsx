// src/app/zasady-spracovania-osobnych-udajov/page.tsx
import React from "react";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Zásady spracovania osobných údajov | GDPR | Sofoservis",
  description:
    "Zásady spracovania osobných údajov a systém ochrany osobných údajov podľa nariadenia GDPR spoločnosti Sofoservices s.r.o.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.sofoservis.sk/zasady-spracovania-osobnych-udajov",
  },
};

export default function GDPRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-6 sm:py-16 lg:py-24 mt-0 md:mt-4 lg:mt-28">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8 sm:mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Zásady spracovania osobných údajov a systém ochrany osobných
                údajov podľa nariadenia GDPR
              </h1>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-gray-800 leading-relaxed">
                  <strong className="text-yellow-600">
                    Prevádzkovateľ (správca)
                  </strong>{" "}
                  Vašich osobných údajov podľa článku 4 bod 7. Nariadenia
                  Európskeho parlamentu a rady (EÚ) 2016/679 o ochrane fyzických
                  osôb v súvislosti so spracovaním osobných údajov a o voľnom
                  pohybe takýchto údajov (ďalej len GDPR) je spoločnosť:{" "}
                  <strong className="text-gray-900">
                    Sofoservices s. r. o., Lermontovova 3, 811 05 Bratislava –
                    mestská časť Staré Mesto, IČO: 55 333 800
                  </strong>
                </p>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Kontaktné údaje správcu
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center">
                      <strong className="w-20 text-yellow-600">Email:</strong>
                      <a
                        href="mailto:info@sofoservis.sk"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        info@sofoservis.sk
                      </a>
                    </li>
                    <li className="flex items-center">
                      <strong className="w-20 text-yellow-600">Telefón:</strong>
                      <a
                        href="tel:+421905771151"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        +421 905 771 151
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Čo je osobný údaj?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Osobnými údajmi sú údaje týkajúce sa identifikovanej fyzickej
                  osoby, alebo identifikovateľnej fyzickej osoby, ktorú možno
                  identifikovať priamo alebo nepriamo, najmä na základe
                  všeobecne použiteľného identifikátora, iného identifikátora
                  ako je napríklad meno, priezvisko, identifikačné číslo,
                  lokalizačné údaje, alebo online identifikátor, alebo na
                  základe jednej alebo viacerých charakteristík alebo znakov,
                  ktoré tvoria jej fyzickú identitu, fyziologickú identitu,
                  genetickú identitu, psychickú identitu, mentálnu identitu,
                  ekonomickú identitu, kultúrnu identitu alebo sociálnu
                  identitu.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Čo je spracúvanie osobných údajov?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Spracúvaním osobných údajov je spracovateľská operácia alebo
                  súbor spracovateľských operácií s osobnými údajmi alebo
                  súbormi osobných údajov, najmä získavanie, zaznamenávanie,
                  usporadúvanie, štruktúrovanie, uchovávanie, zmena,
                  vyhľadávanie, prehliadanie, využívanie, poskytovanie prenosom,
                  šírením alebo iným spôsobom, preskupovanie alebo kombinovanie,
                  obmedzenie, vymazanie, bez ohľadu na to, či sa vykonáva
                  automatizovanými prostriedkami alebo neautomatizovanými
                  prostriedkami.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Poznámka:</strong> Prevádzkovateľ (Správca) nemá
                    povinnosť vymenovať/určiť Zodpovednú Osobu.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Zdroje a kategórie osobných údajov
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prevádzkovateľ spracováva osobné údaje (priamo od vás), ktoré
                  ste mu poskytli alebo osobné údaje ktoré získal na základe
                  plnenia Vašej objednávky.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Vaše identifikačné a kontaktné údaje a údaje nevyhnutné na
                  plnenie zmluvy.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Zákonný dôvod a účel spracovania
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Zákonným dôvodom spracovania je:
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      Váš súhlas so spracovaním osobných údajov na účely
                      poskytovania priameho marketingu podľa článku 6 ods.1
                      písmeno a) GDPR
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      Plnenie zmluvy medzi Vami a prevádzkovateľom podľa článku
                      6 ods.1 písmeno b) GDPR
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      Spracúvanie je nevyhnutné na plnenie zákonnej povinnosti
                      prevádzkovateľa podľa článku 6 ods. 1 písmena c) GDPR
                    </span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Účelom spracovania osobných údajov je:
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Vybavenie Vašej objednávky a výkon práv a povinností
                    vyplývajúcich zo zmluvného vzťahu medzi Vami a
                    prevádzkovateľom. Pri objednávke sú vyžadované osobné údaje
                    nevyhnutné pre úspešné vybavenie objednávky podľa čl. 6 ods.
                    1 písm. b) Nariadenia (s tým súvisí aj následné uskutočnenie
                    platby, dodanie tovaru, služby, vybavovanie reklamácie a
                    pod.); spracúvanie osobných údajov zákazníka prebieha bez
                    súhlasu zákazníka, nakoľko právnym základom spracúvania jeho
                    osobných údajov na účely plnenia zmluvy je konkrétna
                    objednávka medzi zákazníkom a prevádzkovateľom.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Pri prevádzkovaní profilu na sociálnych sieťach (Facebook,
                    Instagram, YouTube, LinkedIn, Twitter, TikTok) je našim
                    záujmom zvyšovanie povedomia o prevádzkovateľovi v online
                    prostredí a komunikácia so zákazníkmi.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Sociálne siete
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Osobné údaje, ktoré uverejníte na našich stránkach sociálnych
                  sietí ako napríklad komentáre, lajky, videá, obrázky atď. sa
                  uverejnia prostredníctvom platformy sociálnej siete. Osobné
                  údaje následne nespracúvame na iný účel. Prevádzkovatelia
                  sociálnych sietí majú vlastné prijaté pravidlá, infraštruktúru
                  služby a vlastné ustanovenia k ochrane osobných údajov. Na
                  prenos údajov a využívanie vašich údajov zo strany
                  prevádzkovateľov sociálnych sietí nemáme žiadny vplyv
                  Odporúčame Vám oboznámiť sa s podmienkami ochrany súkromia
                  poskytovateľa platformy sociálnej siete:
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <p className="text-yellow-800 text-sm">
                    <strong>Právo na námietku:</strong> Dotknutá osoba má právo
                    kedykoľvek namietať z dôvodov týkajúcich sa jej konkrétnej
                    situácie proti spracúvaniu osobných údajov, ktoré sa jej
                    týka. Námietky môžete zaslať e-mailom na kontaktnú adresu
                    prevádzkovateľa{" "}
                    <a
                      href="mailto:info@sofoservis.sk"
                      className="text-yellow-600 hover:text-yellow-800 underline"
                    >
                      info@sofoservis.sk
                    </a>
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Podmienky ochrany súkromia sociálnych sietí:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-yellow-600">Facebook:</strong>{" "}
                      <a
                        href="https://www.facebook.com/policy.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        facebook.com/policy.php
                      </a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">Instagram:</strong>{" "}
                      <a
                        href="https://help.instagram.com/519522125107875"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        help.instagram.com/519522125107875
                      </a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">YouTube:</strong>{" "}
                      <a
                        href="https://www.youtube.com/intl/ALL_sk/howyoutubeworks/user-settings/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        youtube.com privacy
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-yellow-600">TikTok:</strong>{" "}
                      <a
                        href="https://www.tiktok.com/legal/new-privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        tiktok.com/legal/new-privacy-policy
                      </a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">Twitter:</strong>{" "}
                      <a
                        href="https://twitter.com/en/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        twitter.com/en/privacy
                      </a>
                    </li>
                    <li>
                      <strong className="text-yellow-600">LinkedIn:</strong>{" "}
                      <a
                        href="https://www.linkedin.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        linkedin.com/legal/privacy-policy
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  V určitých spracovateľských operáciách vystupujeme s
                  prevádzkovateľmi sociálnych sietí ako spoloční
                  prevádzkovatelia v zmysle čl. 26 bod 4 GDPR.
                </p>
              </section>

              <section className="mb-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Automatizované rozhodovanie:</strong> Zo strany
                    prevádzkovateľa nedochádza k automatizovanému individuálnemu
                    rozhodovaniu v zmysle článku 22 GDPR.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Doba uchovávania
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Prevádzkovateľ uchováva osobné údaje:</strong>
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Po dobu nevyhnutnú k výkonu práv a povinností
                        vyplývajúcich so zmluvného vzťahu medzi Vami a
                        prevádzkovateľom a uplatňovania nároku vyplývajúceho z
                        týchto zmluvných vzťahov.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Po dobu než je odvolaný súhlas so spracovaním osobných
                        údajov pre účely marketingu
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Po uplynutí doby uchovávania osobných údajov ktorá
                        vyplýva zo Zákona č. 395/2002 Z. z. Zákon o archívoch a
                        registratúrach a o doplnení niektorých zákonov
                        prevádzkovateľ osobné údaje vymaže.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Príjemcovia osobných údajov
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Kto je príjemca?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Príjemcom je každý, komu sa osobné údaje poskytnú bez ohľadu
                    na to, či je treťou stranou. Za príjemcu sa nepovažuje orgán
                    verejnej moci, ktorý spracúva osobné údaje na základe
                    osobitného predpisu.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Sú osoby ktoré sa podieľajú na dodaní tovaru, služieb,
                    realizácii platieb na základe zmluvy
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p className="text-green-800 text-sm">
                    <strong>Dôležité:</strong> Prevádzkovateľ neposkytuje,
                    nezverejňuje a nesprístupňuje osobné údaje do tretích krajín
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Podmienky zabezpečenia osobných údajov
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          Prevádzkovateľ prehlasuje, že prijal vhodné
                          personálne, technické a organizačné opatrenia k
                          zabezpečeniu ochrany osobných údajov.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          Prevádzkovateľ prijal technické opatrenia na
                          zabezpečenie dátových úložísk a úložísk osobných
                          údajov v spisovej podobe.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          Prevádzkovateľ prehlasuje, že k osobným údajom majú
                          prístup výlučne ním poverené osoby.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Vaše práva
                </h2>
                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                  <p className="text-yellow-800 leading-relaxed">
                    <strong>Za podmienok stanovených v GDPR máte:</strong>
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Právo na prístup k svojim osobným údajom podľa čl. 15
                        GDPR
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Právo na opravu osobných údajov podľa čl.16 GDPR
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Právo na obmedzenie spracúvania
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Právo na výmaz podľa čl.17 GDPR
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Právo namietať podľa článku 21 GDPR
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Právo na prenesenie osobných údajov podľa článku 21 GDPR
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Právo odvolať súhlas (elektronicky, alebo na
                        korešpondenčnú adresu)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        Právo podať sťažnosť úradu na ochranu osobných údajov
                        v prípade, že sa domnievate že došlo k porušeniu vašich
                        práv na ochranu osobných údajov. Ďalej máte právo podať
                        sťažnosť úradu na ochranu osobných údajov v prípade, že
                        sa domnievate, že došlo k porušeniu vašich práv na
                        ochranu osobných údajov
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Ako môžete naplniť svoje práva?
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Právo na prístup k údajom
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Máte právo vedieť, či spracúvame Vaše osobné údaje. Pokiaľ
                      ich spracúvame, môžete nás požiadať o prístup k nim. Na
                      základe Vašej žiadosti vydáme potvrdenie s informáciami o
                      spracúvaní Vašich osobných údajov na alebo poštou na
                      adresu Sofoservices s. r. o., Lermontovova 3, 811 05
                      Bratislava – mestská časť Staré Mesto, IČO: 55 333 800
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Právo na opravu
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Máte právo na to, aby Vaše osobné údaje, ktoré spracúvame,
                      boli správne, úplné a aktuálne. Pokiaľ sú Vaše osobné
                      údaje nesprávne alebo neaktuálne, môžete nás požiadať o
                      opravu alebo doplnenie a to elektronickou formou na
                      emailovú adresu alebo poštou na korešpondenčnú adresu
                      Sofoservices s. r. o., Lermontovova 3, 811 05 Bratislava –
                      mestská časť Staré Mesto, IČO: 55 333 800
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Právo na vymazanie
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Za určitých okolností máte právo, aby sme Vaše osobné
                      údaje vymazali. O vymazanie Vašich údajov nás môžete
                      požiadať kedykoľvek. Vaše osobné údaje vymažeme, ak:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          už vaše osobné údaje nepotrebujeme pre účel, na ktorý
                          ste nám ich poskytli,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          odvoláte svoj súhlas,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          namietate voči spracúvaniu vašich osobných údajov,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          spracúvame Vaše osobné údaje nezákonne,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          osobné údaje musia byť vymazané, aby sa tým splnila
                          zákonná povinnosť,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          ak ste dieťa, príp. rodič dieťaťa, ktoré súhlasilo so
                          spracúvaním osobných údajov cez internet.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Právo na obmedzenie spracúvania
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Môžete nás požiadať, aby sme obmedzili spracúvanie vašich
                      osobných údajov. Pokiaľ Vašej žiadosti vyhovieme, Vaše
                      osobné údaje budeme iba uchovávať a ďalej s nimi pracovať
                      nebudeme. K obmedzeniu spracúvania Vašich údajov dôjde,
                      ak:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          nám oznámite, že Vaše osobné údaje sú nesprávne, a to
                          až dokým neoveríme ich správnosť,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          spracúvame Vaše osobné údaje nezákonne, avšak Vy
                          nesúhlasíte s ich vymazaním a na miesto toho žiadate,
                          aby sme spracúvanie Vašich osobných údajov len
                          obmedzili,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          Vaše údaje už nepotrebujeme, ale potrebujete ich Vy na
                          preukázanie, uplatňovanie alebo obhajovanie svojich
                          práv
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          namietate voči spracúvaniu Vašich osobných údajov, a
                          to až kým neoveríme, či naše oprávnené záujmy
                          prevažujú nad vašimi dôvodmi.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Právo na prenosnosť údajov
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Máte právo žiadať, aby sme Vám poskytli Vaše osobné údaje
                      v elektronickej forme (napr. súbor XML alebo CSV), ktorá
                      Vám umožní ľahko si preniesť údaje do inej spoločnosti.
                      Tiež nás môžete požiadať, aby sme Vaše osobné údaje
                      preniesli vybranej spoločnosti priamo my. Vašej žiadosti
                      vyhovieme v prípade, že ste nám poskytli osobné údaje
                      priamo Vy a dali ste nám na ich spracúvanie súhlas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Právo namietať
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Máte právo namietať, že spracúvame Vaše osobné údaje. Ak
                      Vaše osobné údaje spracúvame v nasledovných prípadoch:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          z dôvodu nášho oprávneného záujmu,
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          vytvárania zákazníckeho profilu,
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      môžete namietať ich spracúvanie, ak máte na to osobné
                      dôvody.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Ako môžete tieto práva vykonávať?
                </h2>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-yellow-800 leading-relaxed mb-4">
                    <strong>
                      S Vašou žiadosťou sa môžete na nás obrátiť niektorým z
                      týchto spôsobov:
                    </strong>
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Emailom:</strong>{" "}
                        <a
                          href="mailto:info@sofoservis.sk"
                          className="text-yellow-600 hover:text-yellow-800 underline"
                        >
                          info@sofoservis.sk
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Poštou na adresu:</strong> Sofoservices s. r.
                        o., Lermontovova 3, 811 05 Bratislava – mestská časť
                        Staré Mesto, IČO: 55 333 800
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 mr-4 rounded"></span>
                  Dozorný orgán
                </h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <p className="text-red-800 leading-relaxed mb-4">
                    V prípade, že sa domnievate, že došlo k porušeniu Vašich
                    práv na ochranu osobných údajov máte právo podať sťažnosť
                    dozornému orgánu ktorým je{" "}
                    <strong>Úrad na ochranu osobných údajov</strong>:
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Kontaktné údaje úradu:
                    </h3>
                    <address className="not-italic text-gray-700 space-y-1">
                      <p>
                        <strong>Adresa:</strong>
                      </p>
                      <p>
                        Hraničná 12
                        <br />
                        820 07 Bratislava 27
                        <br />
                        Slovenská republika
                      </p>

                      <div className="mt-4 space-y-2">
                        <p>
                          <strong>IČO:</strong> 36064220
                        </p>
                        <p>
                          <strong>DIČ:</strong> 2021685985
                        </p>
                        <p>
                          <strong>Telefón:</strong>{" "}
                          <a
                            href="tel:+421232313214"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            +421 2 3231 3214
                          </a>
                        </p>
                        <p>
                          <strong>Email:</strong>{" "}
                          <a
                            href="mailto:statny.dozor@pdp.gov.sk"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            statny.dozor@pdp.gov.sk
                          </a>
                        </p>
                      </div>
                    </address>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Dôležité:</strong> Vzhľadom na epidemiologickú
                      situáciu v SR Úrad odporúča vykonať podania
                      prostredníctvom poštových alebo elektronických služieb
                      (www.slovensko.sk). Osobné podania od 29.11.2021 je možné
                      uskutočniť len v nevyhnutných prípadoch najneskôr do 12:00
                      hod.
                    </p>
                  </div>
                </div>
              </section>

              <footer className="mt-16 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <p className="text-gray-600 text-sm">
                    <strong>Aktualizované:</strong> 15.06.2025
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Tento dokument je v súlade s Nariadením Európskeho
                      parlamentu a rady (EÚ) 2016/679 o ochrane fyzických osôb v
                      súvislosti so spracovaním osobných údajov a o voľnom
                      pohybe takýchto údajov (GDPR).
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
