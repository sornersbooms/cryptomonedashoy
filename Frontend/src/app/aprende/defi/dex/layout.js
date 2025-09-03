export const metadata = {
  title: 'Exchanges Descentralizados (DEXs): Comercio Sin Custodios - Curso de DeFi',
  description: 'Descubre cómo funcionan los exchanges descentralizados y por qué son fundamentales en DeFi. Aprende sobre diferentes modelos de DEX, creadores de mercado automatizados y cómo intercambiar tokens sin intermediarios.',
  keywords: ['DEX', 'exchange descentralizado', 'Uniswap', 'SushiSwap', 'PancakeSwap', 'AMM', 'creador de mercado automatizado', 'orderbook descentralizado', 'swap tokens'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Exchanges Descentralizados (DEXs): Comercio Sin Custodios - Curso de DeFi',
    description: 'Descubre cómo funcionan los exchanges descentralizados y por qué son fundamentales en DeFi. Aprende sobre diferentes modelos de DEX, creadores de mercado automatizados y cómo intercambiar tokens sin intermediarios.',
    images: ['/images/dex-trading.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exchanges Descentralizados (DEXs): Comercio Sin Custodios - Curso de DeFi',
    description: 'Descubre cómo funcionan los exchanges descentralizados y por qué son fundamentales en DeFi. Aprende sobre diferentes modelos de DEX, creadores de mercado automatizados y cómo intercambiar tokens sin intermediarios.',
    images: ['/images/dex-trading.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function DEXLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}