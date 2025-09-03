export const metadata = {
  title: 'Estrategias: Scalping y Day Trading - Curso de Trading de Criptomonedas',
  description: 'Aprende estrategias efectivas de scalping y day trading para el mercado de criptomonedas. Descubre técnicas, timeframes, indicadores y configuraciones para operaciones de corto plazo y alta frecuencia.',
  keywords: ['scalping', 'day trading', 'estrategias de trading', 'trading de corto plazo', 'alta frecuencia', 'criptomonedas', 'bitcoin trading'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Estrategias: Scalping y Day Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende estrategias efectivas de scalping y day trading para el mercado de criptomonedas. Descubre técnicas, timeframes, indicadores y configuraciones para operaciones de corto plazo y alta frecuencia.',
    images: ['/images/scalping-day-trading.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estrategias: Scalping y Day Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende estrategias efectivas de scalping y day trading para el mercado de criptomonedas. Descubre técnicas, timeframes, indicadores y configuraciones para operaciones de corto plazo y alta frecuencia.',
    images: ['/images/scalping-day-trading.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function EstrategiasScalpingDayTradingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}