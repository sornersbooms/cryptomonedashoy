export const metadata = {
  title: 'Derivados Sintéticos en DeFi: Activos Tokenizados - Curso de DeFi',
  description: 'Explora el mundo de los derivados sintéticos en DeFi. Aprende cómo estos activos tokenizados permiten exposición a cualquier activo del mundo real o digital, su funcionamiento, protocolos principales y casos de uso.',
  keywords: ['derivados sintéticos', 'activos tokenizados', 'Synthetix', 'Mirror Protocol', 'UMA', 'opciones DeFi', 'futuros descentralizados', 'activos sintéticos', 'exposición tokenizada'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Derivados Sintéticos en DeFi: Activos Tokenizados - Curso de DeFi',
    description: 'Explora el mundo de los derivados sintéticos en DeFi. Aprende cómo estos activos tokenizados permiten exposición a cualquier activo del mundo real o digital, su funcionamiento, protocolos principales y casos de uso.',
    images: ['/images/synthetic-assets.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Derivados Sintéticos en DeFi: Activos Tokenizados - Curso de DeFi',
    description: 'Explora el mundo de los derivados sintéticos en DeFi. Aprende cómo estos activos tokenizados permiten exposición a cualquier activo del mundo real o digital, su funcionamiento, protocolos principales y casos de uso.',
    images: ['/images/synthetic-assets.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function DerivadosSinteticosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}