import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";

const GTM_ID = "GTM-P26DR44Q";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata = {
  metadataBase: new URL("https://www.sofoservis.sk"),
  title: "Sofoservis | Sťahovanie, vypratávanie a montáž nábytku",
  description:
    "Profesionálne sťahovanie, vypratávanie a montáž nábytku pre súkromné osoby aj firmy ✅ Férové ceny ✅ Obhliadka priestoru zadarmo.",
  robots: "index, follow",
  openGraph: {
    siteName: "Sofoservis",
    locale: "sk_SK",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`${sora.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://load.server.sofoservis.sk" />
        <link rel="preconnect" href="https://elfsightcdn.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://load.server.sofoservis.sk" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
        {/* Consent Mode V2 + gtag wrapper (default: všetko denied) */}
        <Script id="consent-mode" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);}
            
            window.gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* Google Tag Manager – načítanie kontajnera GTM-P26DR44Q */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (Server-Side) */}
        <Script id="gtm-server-side" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s);j.async=true;j.src=
            "https://load.server.sofoservis.sk/evawysgra.js?"+i;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','439h3=CBZaNC06TCImPjRAISdXUBdPVV1IUQUYXAEIFRYEBAQXGxRdChw%3D');
          `}
        </Script>
        {/* End Google Tag Manager (Server-Side) */}

      </head>
      <body className="min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
