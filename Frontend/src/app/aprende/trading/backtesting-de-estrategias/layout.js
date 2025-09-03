export const metadata = {
  title: 'Backtesting de Estrategias - Curso de Trading de Criptomonedas',
  description: 'Aprende a realizar backtesting de estrategias de trading en criptomonedas. Descubre cómo probar tus estrategias con datos históricos, evaluar su rendimiento y optimizarlas antes de arriesgar capital real.',
  keywords: ['backtesting', 'prueba de estrategias', 'datos históricos', 'optimización de estrategias', 'rendimiento de trading', 'criptomonedas', 'trading sistemático'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Backtesting de Estrategias - Curso de Trading de Criptomonedas',
    description: 'Aprende a realizar backtesting de estrategias de trading en criptomonedas. Descubre cómo probar tus estrategias con datos históricos, evaluar su rendimiento y optimizarlas antes de arriesgar capital real.',
    images: ['/images/backtesting.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backtesting de Estrategias - Curso de Trading de Criptomonedas',
    description: 'Aprende a realizar backtesting de estrategias de trading en criptomonedas. Descubre cómo probar tus estrategias con datos históricos, evaluar su rendimiento y optimizarlas antes de arriesgar capital real.',
    images: ['/images/backtesting.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BacktestingEstrategiasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}