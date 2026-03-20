// src/app/zasady-pouzivania-cookies/page.tsx
import React from "react";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Zásady používania súborov cookies | SofoServis",
  description:
    "Podrobné informácie o používaní cookies na webovej stránke SofoServis. Ako používame súbory cookies a ako ich môžete spravovať.",
  alternates: {
    canonical: "https://www.sofoservis.sk/zasady-pouzivania-cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 pt-10 md:pt-18 lg:pt-44 ">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-accent-500 px-4 sm:px-8 py-6">
            <h1 className="text-3xl font-bold text-primary-900">
              Zásady používania súborov cookies
            </h1>
            <p className="text-lg text-primary-900/80 mt-2">
              Posledná aktualizácia: {new Date().toLocaleDateString("sk-SK")}
            </p>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-8 py-6 sm:py-8">
            <div className="prose prose-lg max-w-none">
              <article className="space-y-8">
                {/* Článok I */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Článok I - POUŽÍVANIE COOKIES
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> Tieto webové stránky používajú súbory
                      cookies, ktoré ich návštevníka (ďalej len &quot;vy&quot; v
                      príslušnom gramatickom tvare) odlišujú od ostatných
                      používateľov. To nám umožňuje vylepšovanie našich stránok
                      a poskytovanie lepšieho zážitku pri ich prehliadaní
                      jednotlivými návštevníkmi.
                    </p>
                    <p>
                      <strong>2.</strong> Tieto zásady používania súborov
                      cookies popisujú:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        spracovanie údajov zhromaždených s využitím súborov
                        cookies a podobných technológií a
                      </li>
                      <li>účely, na ktoré tieto súbory cookies používame.</li>
                    </ul>
                    <p>
                      <strong>3.</strong> Ďalšie dôležité informácie o tom, akým
                      spôsobom sú spracúvané osobné údaje získané
                      prostredníctvom týchto webových stránok nájdete v časti
                      označovanej ako podmienky používania.
                    </p>
                  </div>
                </section>

                {/* Článok II */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Článok II - ČO SÚ COOKIES
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>Cookies</strong> sú malé súbory, ktoré sa sťahujú
                      do zariadenia (počítač, tablet, mobilný telefón atď.),
                      obsahujúce určité množstvo informácií umožňujúcich webovej
                      stránke rozpoznať vás ako používateľa, počas používania
                      Internetovej stránky. Prevádzkovateľ pomocou cookies skúma
                      účinnosť Internetovej stránky.
                    </p>
                    <p>
                      Cookies vo všeobecnosti nemajú žiadne informácie slúžiace
                      na identifikáciu jednotlivých osôb, ale namiesto toho sa
                      používajú na identifikáciu prehliadača na konkrétnom
                      zariadení. Pojem cookies používame v tomto dokumente aj na
                      iné súbory, ktoré zhromažďujú informácie podobným spôsobom
                      (napr. pixely, majáky, atď).
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-accent-50 p-4 rounded-lg border border-accent-200">
                        <h3 className="font-semibold text-primary-900 mb-2">
                          Podľa životnosti:
                        </h3>
                        <ul className="space-y-1 text-sm">
                          <li>
                            <strong>Relačné cookies</strong> - dočasné cookies,
                            ktoré sa po zatvorení prehliadača automaticky
                            odstránia
                          </li>
                          <li>
                            <strong>Trvalé cookies</strong> - zostávajú v
                            zariadení aj po zatvorení prehliadača
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-primary-900 mb-2">
                          Podľa pôvodu:
                        </h3>
                        <ul className="space-y-1 text-sm">
                          <li>
                            <strong>Naše cookies</strong> - súbory cookies
                            umiestnené našou spoločnosťou
                          </li>
                          <li>
                            <strong>Cookies tretích strán</strong> - súbory
                            cookies umiestnené inou spoločnosťou (napr.
                            Microsoft Clarity)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-accent-500">
                      <p>
                        <strong>Dôležité:</strong> Ak úplne vylúčite používanie
                        súborov cookies, pravdepodobne nebudete môcť používať
                        určité funkcionality našej Internetovej stránky.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Článok III */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Článok III - ROZSAH A ÚČELY POUŽÍVANIA COOKIES
                  </h2>
                  <div className="space-y-6 text-primary-700">
                    <p>
                      Na našej Internetovej stránke používame nasledujúce
                      kategórie súborov cookies:
                    </p>

                    <div className="space-y-4">
                      {/* Nevyhnutné cookies */}
                      <div className="border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-primary-900 text-lg mb-2 flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          a. Nevyhnutné súbory cookies
                        </h3>
                        <p>
                          Nevyhnutne potrebné súbory cookie umožňujú základné
                          funkcie webovej lokality, ako prihlásenie používateľa
                          a správa účtu. Webová lokalita sa nedá správne
                          používať bez nevyhnutne potrebných súborov cookie.
                        </p>
                      </div>

                      {/* Výkonnostné cookies */}
                      <div className="border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-primary-900 text-lg mb-2 flex items-center">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                          b. Výkonnostné súbory cookies
                        </h3>
                        <p>
                          Súbory cookie na sledovanie výkonnosti sa používajú na
                          informovanie, ako návštevníci používajú webovú
                          lokalitu, napr. analytické súbory cookie. Tieto súbory
                          cookie nemožno použiť na priamu identifikáciu
                          konkrétneho návštevníka.
                        </p>
                        <div className="mt-3 bg-blue-50 p-3 rounded border border-blue-200">
                          <p className="text-sm">
                            <strong>Konkrétne používame:</strong> Microsoft
                            Clarity - nástroj na analýzu správania návštevníkov,
                            ktorý nám pomáha pochopiť, ako používate naše webové
                            stránky a ako ich môžeme zlepšiť.
                          </p>
                        </div>
                      </div>

                      {/* Cielené cookies */}
                      <div className="border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-primary-900 text-lg mb-2 flex items-center">
                          <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                          c. Cielené súbory cookies
                        </h3>
                        <p>
                          Súbory cookie cielenia sa používajú na identifikáciu
                          návštevníkov medzi rôznymi webovými lokalitami, napr.
                          partneri poskytujúci obsah, reklamné siete. Tieto
                          súbory cookie môžu spoločnosti použiť na vytvorenie
                          profilu záujmov návštevníka alebo na zobrazenie
                          relevantných reklám na iných webových lokalitách.
                        </p>
                      </div>

                      {/* Neklasifikované cookies */}
                      <div className="border border-gray-200 rounded-lg p-5">
                        <h3 className="font-bold text-primary-900 text-lg mb-2 flex items-center">
                          <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                          d. Neklasifikované súbory cookies
                        </h3>
                        <p>
                          Neklasifikované súbory cookie sú také, ktoré nepatria
                          do žiadnej inej kategórie alebo sú v procese
                          kategorizácie.
                        </p>
                      </div>
                    </div>

                    <p>
                      <strong>2.</strong> Tieto cookies môžu byť nastavené
                      prostredníctvom našich stránok aj našimi reklamnými
                      partnermi, ktorí ich môžu použiť na profilovanie vašich
                      záujmov a na zobrazenie relevantných reklám aj na iných
                      stránkach, v zmysle zásad používania súborov cookies
                      dostupných na stránkach týchto partnerov zobrazených v
                      pokročilom nastavení ukladania súborov cookies.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-primary-900 mb-4">
                        Súbory cookies môžeme používať na tieto konkrétne účely:
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          a. náhľad a analýza vykonaná za účelom informovania o
                          našich marketingových stratégiách a na zlepšenie vašej
                          návštevnosti
                        </li>
                        <li>
                          b. identifikácia a zaznamenanie, kedy ste otvorili
                          webové stránky
                        </li>
                        <li>
                          c. zaznamenanie, kedy sa zapojili do elektronickej
                          komunikácie
                        </li>
                        <li>
                          d. hodnotenie a zlepšovanie našich služieb tak, aby
                          vaša návšteva a používanie webovej stránky boli
                          užitočnejšie
                        </li>
                        <li>
                          e. zhodnotenie použitia webu, aby sme vám mohli
                          poskytnúť rozšírené služby
                        </li>
                        <li>
                          f. kontrolu kvality, výkonu webových stránok a správu
                          systému
                        </li>
                        <li>
                          g. sledovanie vášho prehliadača na iných weboch a
                          vytváranie profilu vašich záujmov, aby sa vám
                          zobrazovali relevantné reklamy na iných webových
                          stránkach
                        </li>
                        <li>
                          h. účely zabezpečenia, ako je napríklad prevencia
                          alebo odhalenie podvodnej činnosti
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Článok IV */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Článok IV - NASTAVENIE COOKIES
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> Pri prvej návšteve našich webových
                      stránok sa do vášho zariadenia ukladajú iba absolútne
                      nevyhnutné súbory cookies. Pokiaľ neprijmete/nepovolíte
                      všetky súbory cookies alebo nevyberiete vaše individuálne
                      preferencie pre súbory cookies, toto nastavenie sa
                      nezmení.
                    </p>

                    <p>
                      <strong>2.</strong> Niektoré súbory cookies, ktoré
                      používame, sú nevyhnutné pre to, aby naše webové stránky
                      fungovali. Napríklad keď prvýkrát navštívite naše webové
                      stránky, objaví sa vám vyskakovacie okno so správou
                      upozorňujúcou na naše používanie cookies.
                    </p>

                    <p>
                      <strong>3.</strong> Kliknutím na príslušné tlačidlo vo
                      vyskakovacom okne súhlasíte s naším používaním
                      nevyhnutných cookies spôsobom opísaným v týchto základných
                      zásadách používania cookies.
                    </p>

                    <p>
                      <strong>4.</strong> V prípade, ak poskytnete svoj súhlas s
                      cookies, zároveň poskytnete nám aj príslušným tretím
                      stranám súhlas, aby predmetné cookies používali vaše
                      osobné údaje takým spôsobom, ako je uvedené v našich
                      podmienky používania.
                    </p>

                    <p>
                      <strong>5.</strong> Aby ste vypli príslušné súbory
                      cookies, ktoré sa používajú na základe súhlasu, môžete
                      kedykoľvek odvolať svoj súhlas s používaním cookies.
                      Uskutočňuje sa to pomocou ikony cookies v príslušnej časti
                      našich stránok.
                    </p>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-accent-500">
                      <p>
                        <strong>Upozornenie:</strong> Súbory cookies môžu na
                        vašom zariadení zostať aj po tom, čo sa rozhodnete ich
                        nepoužívať. Ďalšie informácie o tom, ako tieto súbory
                        odstrániť z vášho zariadenia, nájdete v texte nižšie
                        alebo v záložke pomocníka/nápovedy vášho prehliadača.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Článok V */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Článok V - NAKLADANIE S INFORMÁCIAMI
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> V tejto časti zásad používania cookies
                      uvádzame, ako používame osobné údaje získané
                      prostredníctvom súborov cookies používaných na našich
                      webových stránkach, na základe akých právnych dôvodov a na
                      aké účely.
                    </p>

                    <p>
                      <strong>2.</strong> Pre prípad zmluvného dôvodu pre
                      nevyhnutné súbory cookies môžeme vaše osobné údaje
                      používať na plnenie našich zmluvných povinností v zmysle
                      našich podmienok používania.
                    </p>

                    <p>
                      <strong>3.</strong> Pre prípad zákonného dôvodu pre
                      nevyhnutné súbory cookies môžeme vaše osobné údaje
                      používať na plnenie našich zákonných povinností.
                    </p>

                    <p>
                      <strong>4.</strong> Pre prípad oprávneného záujmu pre
                      nevyhnutné súbory cookies, môžeme v rámci nášho
                      oprávneného záujmu používať vaše osobné údaje na
                      prevádzkovanie webových stránok v prípadoch, keď
                      neexistuje zákonný dôvod pre ich spracovanie.
                    </p>
                  </div>
                </section>

                {/* Článok VI */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Článok VI - KONTROLA A MAZANIE COOKIES
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> K vypnutiu alebo odhláseniu
                      príslušných súborov cookies slúžia ikony cookies v rohu
                      vášho zariadenia, kde môžete kedykoľvek zmeniť nastavenia
                      cookies. Pre funkčnosť nastavenia bude zrejme nutné
                      aktualizovať stránku.
                    </p>

                    <p>
                      <strong>2.</strong> V zariadení môžu zostať aj naďalej
                      uložené rôzne súbory, skripty, kódy prípadne ďalšie
                      informácie týkajúce sa súborov cookies. Tieto môžete
                      odstrániť vymazaním súborov cookies a medzipamäte
                      prehliadača pomocou nastavenia webového prehľadávača.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-primary-900 mb-2">
                          Nastavenie v prehliadači
                        </h4>
                        <p className="text-sm">
                          Môžete nastaviť svoj prehliadač tak, aby vás
                          informoval o používaní súborov cookies alebo ich úplne
                          blokoval.
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-primary-900 mb-2">
                          Microsoft Clarity
                        </h4>
                        <p className="text-sm">
                          Analytické cookies od Microsoft Clarity môžete
                          kedykoľvek vypnúť v nastaveniach cookies na našej
                          stránke.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <p>
                        <strong>Pozor:</strong> Ak odmietnete alebo odvoláte
                        súhlas s použitím akýchkoľvek nie nevyhnutných cookies,
                        nemusí zodpovedajúca funkcia webových stránok fungovať
                        správne alebo vôbec.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Článok VII */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Článok VII - HLAVNÉ COOKIES A COOKIES TRETÍCH STRÁN
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> Kliknutím na odkaz Podrobnosti o
                      súbore cookies na banneri sa dostanete k zoznamu hlavných
                      súborov cookies, ktoré na našich stránkach používame.
                    </p>

                    <p>
                      <strong>2.</strong> Odporúčame, aby ste si kontrolovali
                      zásady ochrany osobných údajov príslušnej tretej strany.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-primary-900 mb-4">
                        Súbory cookies tretích strán používané na našej stránke:
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded border border-gray-200">
                          <h4 className="font-semibold text-primary-900">
                            Microsoft Clarity
                          </h4>
                          <p className="text-sm mt-1">
                            Analytický nástroj na sledovanie správania
                            používateľov a zlepšovanie užívateľského zážitku na
                            našich webových stránkach.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Článok VIII */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Článok VIII - SLEDOVANIE EMAILOV
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> Niektoré našou spoločnosťou zasielané
                      e-maily môžu obsahovať tzv. pixelový štítok, webový maják,
                      priehľadný obrázok alebo sledované odkazy, ktoré nám
                      umožňujú zistiť, kedy ste otvorili e-mail, a overiť, ktoré
                      odkazy uvedené v e-maile ste navštívili.
                    </p>

                    <p>
                      <strong>2.</strong> Odstránením e-mailu môžete odstrániť
                      aj pixelový štítok. V prípade, ak si neprajete stiahnuť
                      pixel do svojho počítača alebo iného zariadenia, môžete to
                      zaistiť výberom služby dostávať e-maily vo formáte
                      jednoduchého textu, alebo neotváraním obrázkov v e-maile.
                    </p>

                    <p>
                      <strong>3.</strong> Pre odhlásenie z nášho mailing listu
                      môžete použiť našu kontaktnú emailovú adresu uvedenú v
                      podmienkach používania.
                    </p>
                  </div>
                </section>

                {/* Článok IX */}
                <section>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-500">
                    Článok IX - ZMENY A KONTAKT
                  </h2>
                  <div className="space-y-4 text-primary-700">
                    <p>
                      <strong>1.</strong> Kedykoľvek môže dôjsť k zmene týchto
                      základných zásad používania cookies zo strany našej
                      spoločnosti, a to zaslaním e-mailu s pozmenenými
                      ustanoveniami alebo ich zverejnením na našich webových
                      stránkach.
                    </p>

                    <p>
                      <strong>2.</strong> Akékoľvek zmeny nadobudnú účinnosť 7
                      dní po dátume odoslania e-mailu podľa predchádzajúceho
                      bodu alebo po dátume zverejnenia upravených ustanovení na
                      webových stránkach, podľa toho, ktorá skutočnosť nastane
                      skôr.
                    </p>

                    <p>
                      <strong>3.</strong> Ak máte akékoľvek otázky alebo
                      potrebujete ďalšie informácie o súboroch cookies alebo
                      spracovaní osobných údajov, kontaktujte nás za pomoci
                      kontaktných údajov uvedených v našich podmienkach
                      používania.
                    </p>
                  </div>
                </section>

                {/* Kontaktné údaje */}
                <section className="bg-accent-50 p-6 rounded-lg border border-accent-200">
                  <h2 className="text-2xl font-bold text-primary-900 mb-4">
                    Kontaktné údaje
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-primary-900 mb-2">
                        Prevádzkovateľ
                      </h3>
                      <p className="text-primary-700">
                        <strong>Sofoservices s. r. o.</strong>
                        <br />
                        Lermontovova 3<br />
                        811 05 Bratislava
                        <br />
                        IČO: 55333800
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 mb-2">
                        Kontakt
                      </h3>
                      <p className="text-primary-700">
                        <strong>E-mail:</strong>{" "}
                        <a
                          href="mailto:doprava@sofoservis.sk"
                          className="text-accent-600 hover:text-accent-700"
                        >
                          doprava@sofoservis.sk
                        </a>
                        <br />
                        <strong>Telefón:</strong>{" "}
                        <a
                          href="tel:+421951735130"
                          className="text-accent-600 hover:text-accent-700"
                        >
                          +421 951 735 130
                        </a>
                        <br />
                        <strong>Web:</strong>{" "}
                        <a
                          href="https://www.sofoservis.sk"
                          className="text-accent-600 hover:text-accent-700"
                        >
                          www.sofoservis.sk
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
