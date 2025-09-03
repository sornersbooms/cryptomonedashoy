export const metadata = {
  title: 'Soportes y Resistencias en Trading - Curso de Trading de Criptomonedas',
  description: 'Aprende a identificar y utilizar soportes y resistencias en el trading de criptomonedas. Descubre cómo estos niveles clave pueden ayudarte a tomar mejores decisiones de entrada y salida en tus operaciones.',
  keywords: ['soportes', 'resistencias', 'niveles clave', 'análisis técnico', 'trading de criptomonedas', 'zonas de precio'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Soportes y Resistencias en Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende a identificar y utilizar soportes y resistencias en el trading de criptomonedas. Descubre cómo estos niveles clave pueden ayudarte a tomar mejores decisiones de entrada y salida en tus operaciones.',
    images: ['/images/soportes-resistencias.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soportes y Resistencias en Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende a identificar y utilizar soportes y resistencias en el trading de criptomonedas. Descubre cómo estos niveles clave pueden ayudarte a tomar mejores decisiones de entrada y salida en tus operaciones.',
    images: ['/images/soportes-resistencias.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SoportesResistenciasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}