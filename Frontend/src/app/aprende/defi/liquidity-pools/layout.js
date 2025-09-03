export const metadata = {
  title: 'Liquidity Pools y AMMs: El Motor de los DEX - Curso de DeFi',
  description: 'Comprende cómo funcionan los pools de liquidez y los creadores de mercado automatizados (AMMs) en DeFi. Aprende sobre la provisión de liquidez, comisiones, diferentes fórmulas de curvas y su papel en el ecosistema descentralizado.',
  keywords: ['liquidity pools', 'AMM', 'creador de mercado automatizado', 'provisión de liquidez', 'LP tokens', 'curva constante', 'x*y=k', 'comisiones DEX', 'Balancer', 'Curve'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Liquidity Pools y AMMs: El Motor de los DEX - Curso de DeFi',
    description: 'Comprende cómo funcionan los pools de liquidez y los creadores de mercado automatizados (AMMs) en DeFi. Aprende sobre la provisión de liquidez, comisiones, diferentes fórmulas de curvas y su papel en el ecosistema descentralizado.',
    images: ['/images/liquidity-pools.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liquidity Pools y AMMs: El Motor de los DEX - Curso de DeFi',
    description: 'Comprende cómo funcionan los pools de liquidez y los creadores de mercado automatizados (AMMs) en DeFi. Aprende sobre la provisión de liquidez, comisiones, diferentes fórmulas de curvas y su papel en el ecosistema descentralizado.',
    images: ['/images/liquidity-pools.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function LiquidityPoolsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}