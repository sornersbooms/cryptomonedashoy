export const metadata = {
  title: 'Oráculos en DeFi: El Puente con el Mundo Real - Curso de DeFi',
  description: 'Comprende el papel crucial de los oráculos en el ecosistema DeFi. Descubre cómo estos servicios conectan los contratos inteligentes con datos del mundo real, permitiendo aplicaciones financieras más complejas y seguras.',
  keywords: ['oráculos blockchain', 'Chainlink', 'Band Protocol', 'datos externos', 'problema del oráculo', 'feed de precios', 'datos on-chain', 'verificación descentralizada'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Oráculos en DeFi: El Puente con el Mundo Real - Curso de DeFi',
    description: 'Comprende el papel crucial de los oráculos en el ecosistema DeFi. Descubre cómo estos servicios conectan los contratos inteligentes con datos del mundo real, permitiendo aplicaciones financieras más complejas y seguras.',
    images: ['/images/defi-oracles.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oráculos en DeFi: El Puente con el Mundo Real - Curso de DeFi',
    description: 'Comprende el papel crucial de los oráculos en el ecosistema DeFi. Descubre cómo estos servicios conectan los contratos inteligentes con datos del mundo real, permitiendo aplicaciones financieras más complejas y seguras.',
    images: ['/images/defi-oracles.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function OraculosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}