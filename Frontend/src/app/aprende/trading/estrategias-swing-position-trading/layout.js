export const metadata = {
  title: 'Estrategias: Swing y Position Trading - Curso de Trading de Criptomonedas',
  description: 'Domina las estrategias de swing trading y position trading en el mercado de criptomonedas. Aprende a capturar tendencias a medio y largo plazo, utilizando análisis técnico y fundamental para maximizar beneficios.',
  keywords: ['swing trading', 'position trading', 'estrategias de trading', 'trading de medio plazo', 'trading de largo plazo', 'criptomonedas', 'bitcoin trading'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Estrategias: Swing y Position Trading - Curso de Trading de Criptomonedas',
    description: 'Domina las estrategias de swing trading y position trading en el mercado de criptomonedas. Aprende a capturar tendencias a medio y largo plazo, utilizando análisis técnico y fundamental para maximizar beneficios.',
    images: ['/images/swing-position-trading.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estrategias: Swing y Position Trading - Curso de Trading de Criptomonedas',
    description: 'Domina las estrategias de swing trading y position trading en el mercado de criptomonedas. Aprende a capturar tendencias a medio y largo plazo, utilizando análisis técnico y fundamental para maximizar beneficios.',
    images: ['/images/swing-position-trading.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function EstrategiasSwingPositionTradingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}