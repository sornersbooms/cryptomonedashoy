export const metadata = {
  title: 'Conceptos Clave: Pares, Volumen - Curso de Trading de Criptomonedas',
  description: 'Domina los conceptos fundamentales del trading de criptomonedas: pares de trading, volumen, liquidez, spread y más. Construye una base sólida para tus operaciones en el mercado.',
  keywords: ['pares de trading', 'volumen de trading', 'liquidez', 'spread', 'conceptos de trading', 'criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Conceptos Clave: Pares, Volumen - Curso de Trading de Criptomonedas',
    description: 'Domina los conceptos fundamentales del trading de criptomonedas: pares de trading, volumen, liquidez, spread y más. Construye una base sólida para tus operaciones en el mercado.',
    images: ['/images/conceptos-trading.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conceptos Clave: Pares, Volumen - Curso de Trading de Criptomonedas',
    description: 'Domina los conceptos fundamentales del trading de criptomonedas: pares de trading, volumen, liquidez, spread y más. Construye una base sólida para tus operaciones en el mercado.',
    images: ['/images/conceptos-trading.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ConceptosTradingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}