import "./globals.css";
import Header from "../components/Header";
import { siteConfig } from "./metadata";
// REMOVE: import { Poppins, Lato } from '@next/font/google';

// REMOVE: Define Poppins font for the logo
// REMOVE: const poppins = Poppins({...});

// REMOVE: Define Lato font for general text
// REMOVE: const lato = Lato({...});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Criptomonedas Hoy" }],
  creator: "Criptomonedas Hoy",
  publisher: "Criptomonedas Hoy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@cryptomonedashoy",
    site: "@cryptomonedashoy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-aqui",
    yandex: "tu-codigo-de-verificacion-aqui",
    bing: "tu-codigo-de-verificacion-aqui",
  },
  other: {
    "msapplication-TileColor": "#667eea",
    "theme-color": "#667eea",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es"> {/* REMOVE: className={`${lato.variable} ${poppins.variable}`} */}
      <head>
        {/* ADD: Traditional Google Fonts link */}
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/cryptomonedashoy.png" />
        <link rel="apple-touch-icon" href="/images/bitcoin-7693848_1280.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CriptoHoy" />
      </head>
      <body>
        <Header /> {/* REMOVE: poppinsFont={poppins} */}
        {children}
      </body>
    </html>
  );
}