export const metadata = {
  title: 'Introducción al Trading de Criptomonedas - Curso de Trading',
  description: 'Aprende los fundamentos del trading de criptomonedas. Descubre qué es el trading, cómo funciona y los conceptos básicos para comenzar a operar en los mercados de criptoactivos.',
  keywords: ['trading', 'criptomonedas', 'introducción al trading', 'trading de bitcoin', 'trading de criptomonedas', 'curso de trading'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Introducción al Trading de Criptomonedas - Curso de Trading',
    description: 'Aprende los fundamentos del trading de criptomonedas. Descubre qué es el trading, cómo funciona y los conceptos básicos para comenzar a operar en los mercados de criptoactivos.',
    images: ['/images/trading-intro.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducción al Trading de Criptomonedas - Curso de Trading',
    description: 'Aprende los fundamentos del trading de criptomonedas. Descubre qué es el trading, cómo funciona y los conceptos básicos para comenzar a operar en los mercados de criptoactivos.',
    images: ['/images/trading-intro.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function IntroduccionTradingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}