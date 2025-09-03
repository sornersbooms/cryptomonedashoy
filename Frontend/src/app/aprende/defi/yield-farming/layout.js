export const metadata = {
  title: 'Yield Farming y Staking: Generando Rendimientos en DeFi - Curso de DeFi',
  description: 'Descubre las estrategias de yield farming y staking para maximizar tus rendimientos en DeFi. Aprende cómo funciona la agricultura de rendimientos, los riesgos asociados y cómo evaluar diferentes oportunidades de inversión.',
  keywords: ['yield farming', 'agricultura de rendimientos', 'staking', 'APY', 'APR', 'rendimientos DeFi', 'liquidity mining', 'incentivos en tokens', 'compounding'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Yield Farming y Staking: Generando Rendimientos en DeFi - Curso de DeFi',
    description: 'Descubre las estrategias de yield farming y staking para maximizar tus rendimientos en DeFi. Aprende cómo funciona la agricultura de rendimientos, los riesgos asociados y cómo evaluar diferentes oportunidades de inversión.',
    images: ['/images/yield-farming.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yield Farming y Staking: Generando Rendimientos en DeFi - Curso de DeFi',
    description: 'Descubre las estrategias de yield farming y staking para maximizar tus rendimientos en DeFi. Aprende cómo funciona la agricultura de rendimientos, los riesgos asociados y cómo evaluar diferentes oportunidades de inversión.',
    images: ['/images/yield-farming.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function YieldFarmingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}