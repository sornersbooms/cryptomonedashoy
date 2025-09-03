export const metadata = {
  title: 'Aplicación: DeFi (Finanzas Descentralizadas) - Curso de Blockchains',
  description: 'Descubre cómo blockchain ha revolucionado las finanzas con DeFi, sus principales protocolos, aplicaciones y el futuro de las finanzas descentralizadas.',
  keywords: ['DeFi', 'Finanzas descentralizadas', 'Aplicaciones blockchain', 'Préstamos crypto', 'DEX', 'Yield farming', 'Staking', 'Protocolos DeFi'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Aplicación: DeFi (Finanzas Descentralizadas) - Curso de Blockchains',
    description: 'Descubre cómo blockchain ha revolucionado las finanzas con DeFi, sus principales protocolos, aplicaciones y el futuro de las finanzas descentralizadas.',
    images: ['/images/crypto-7072522_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/app-defi',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplicación: DeFi (Finanzas Descentralizadas) - Curso de Blockchains',
    description: 'Descubre cómo blockchain ha revolucionado las finanzas con DeFi, sus principales protocolos, aplicaciones y el futuro de las finanzas descentralizadas.',
    images: ['/images/crypto-7072522_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AppDeFiLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}