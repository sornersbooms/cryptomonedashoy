export const metadata = {
  title: 'Ataques Comunes a Wallets: Cómo Protegerte - Curso de Wallets',
  description: 'Conoce los ataques más comunes a wallets de criptomonedas y cómo defenderte. Phishing, malware, SIM swapping, estafas y otros vectores de ataque explicados en detalle.',
  keywords: ['ataques wallet', 'phishing cripto', 'malware bitcoin', 'sim swapping', 'estafas wallet', 'hackeo monedero', 'seguridad cripto'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Ataques Comunes a Wallets: Cómo Protegerte - Curso de Wallets',
    description: 'Conoce los ataques más comunes a wallets de criptomonedas y cómo defenderte. Phishing, malware, SIM swapping, estafas y otros vectores de ataque explicados en detalle.',
    images: ['/images/wallet-attacks.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ataques Comunes a Wallets: Cómo Protegerte - Curso de Wallets',
    description: 'Conoce los ataques más comunes a wallets de criptomonedas y cómo defenderte. Phishing, malware, SIM swapping, estafas y otros vectores de ataque explicados en detalle.',
    images: ['/images/wallet-attacks.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AtaquesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}