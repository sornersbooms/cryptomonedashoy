export const metadata = {
  title: 'Estrategias de Yield Farming: Maximizando Rendimientos - Curso de DeFi',
  description: 'Explora estrategias avanzadas de yield farming para optimizar tus rendimientos en DeFi. Aprende sobre compounding, leverage farming, estrategias delta-neutrales y cómo balancear riesgo y recompensa en tus inversiones.',
  keywords: ['estrategias yield farming', 'farming avanzado', 'compounding DeFi', 'leverage farming', 'estrategias delta-neutral', 'optimización APY', 'diversificación rendimientos', 'autocompounders'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Estrategias de Yield Farming: Maximizando Rendimientos - Curso de DeFi',
    description: 'Explora estrategias avanzadas de yield farming para optimizar tus rendimientos en DeFi. Aprende sobre compounding, leverage farming, estrategias delta-neutrales y cómo balancear riesgo y recompensa en tus inversiones.',
    images: ['/images/farming-strategies.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estrategias de Yield Farming: Maximizando Rendimientos - Curso de DeFi',
    description: 'Explora estrategias avanzadas de yield farming para optimizar tus rendimientos en DeFi. Aprende sobre compounding, leverage farming, estrategias delta-neutrales y cómo balancear riesgo y recompensa en tus inversiones.',
    images: ['/images/farming-strategies.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function EstrategiasFarmingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}