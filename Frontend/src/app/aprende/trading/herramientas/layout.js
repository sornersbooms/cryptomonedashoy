export const metadata = {
  title: 'Herramientas del Trader - Curso de Trading de Criptomonedas',
  description: 'Descubre las mejores herramientas para el trading de criptomonedas. Aprende a utilizar plataformas de trading, screeners, alertas, indicadores personalizados y otras herramientas que mejorarán tu análisis y operativa.',
  keywords: ['herramientas de trading', 'plataformas de trading', 'screeners', 'alertas de precio', 'indicadores personalizados', 'criptomonedas', 'software de trading'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Herramientas del Trader - Curso de Trading de Criptomonedas',
    description: 'Descubre las mejores herramientas para el trading de criptomonedas. Aprende a utilizar plataformas de trading, screeners, alertas, indicadores personalizados y otras herramientas que mejorarán tu análisis y operativa.',
    images: ['/images/herramientas-trading.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herramientas del Trader - Curso de Trading de Criptomonedas',
    description: 'Descubre las mejores herramientas para el trading de criptomonedas. Aprende a utilizar plataformas de trading, screeners, alertas, indicadores personalizados y otras herramientas que mejorarán tu análisis y operativa.',
    images: ['/images/herramientas-trading.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function HerramientasTradingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}