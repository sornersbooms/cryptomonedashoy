export const metadata = {
  title: 'Patrones de Gráficos en Trading - Curso de Trading de Criptomonedas',
  description: 'Aprende a identificar y utilizar patrones de gráficos en el trading de criptomonedas. Descubre cómo reconocer formaciones como cabeza y hombros, dobles techos/suelos, triángulos y más para anticipar movimientos de precios.',
  keywords: ['patrones de gráficos', 'formaciones chartistas', 'cabeza y hombros', 'doble techo', 'doble suelo', 'triángulos', 'análisis técnico', 'trading de criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Patrones de Gráficos en Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende a identificar y utilizar patrones de gráficos en el trading de criptomonedas. Descubre cómo reconocer formaciones como cabeza y hombros, dobles techos/suelos, triángulos y más para anticipar movimientos de precios.',
    images: ['/images/patrones-graficos.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrones de Gráficos en Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende a identificar y utilizar patrones de gráficos en el trading de criptomonedas. Descubre cómo reconocer formaciones como cabeza y hombros, dobles techos/suelos, triángulos y más para anticipar movimientos de precios.',
    images: ['/images/patrones-graficos.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PatronesGraficosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}