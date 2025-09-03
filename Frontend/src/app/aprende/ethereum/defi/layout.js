export const metadata = {
  title: 'DeFi: Finanzas Descentralizadas en Ethereum - Curso de Ethereum',
  description: 'Sumérgete en el mundo de DeFi (Finanzas Descentralizadas) en Ethereum. Aprende sobre préstamos, intercambios, staking y cómo esta revolución financiera elimina intermediarios.',
  keywords: ['DeFi', 'Finanzas descentralizadas', 'DEX', 'Lending', 'Yield farming', 'Staking', 'Liquidez', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'DeFi: Finanzas Descentralizadas en Ethereum - Curso de Ethereum',
    description: 'Sumérgete en el mundo de DeFi (Finanzas Descentralizadas) en Ethereum. Aprende sobre préstamos, intercambios, staking y cómo esta revolución financiera elimina intermediarios.',
    images: ['/images/cryptocurrency-3409658_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/defi',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi: Finanzas Descentralizadas en Ethereum - Curso de Ethereum',
    description: 'Sumérgete en el mundo de DeFi (Finanzas Descentralizadas) en Ethereum. Aprende sobre préstamos, intercambios, staking y cómo esta revolución financiera elimina intermediarios.',
    images: ['/images/cryptocurrency-3409658_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DefiLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}