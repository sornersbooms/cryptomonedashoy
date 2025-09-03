export const metadata = {
  title: 'La Cadena: Inmutabilidad en Blockchain - Curso de Blockchains',
  description: 'Descubre cómo se conectan los bloques para formar una cadena inmutable y por qué esta propiedad es fundamental para la seguridad y confianza en blockchain.',
  keywords: ['Inmutabilidad blockchain', 'Cadena de bloques', 'Hashes encadenados', 'Seguridad blockchain', 'Integridad datos', 'Resistencia a modificaciones'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'La Cadena: Inmutabilidad en Blockchain - Curso de Blockchains',
    description: 'Descubre cómo se conectan los bloques para formar una cadena inmutable y por qué esta propiedad es fundamental para la seguridad y confianza en blockchain.',
    images: ['/images/blockchain-3368174_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/la-cadena-inmutabilidad',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Cadena: Inmutabilidad en Blockchain - Curso de Blockchains',
    description: 'Descubre cómo se conectan los bloques para formar una cadena inmutable y por qué esta propiedad es fundamental para la seguridad y confianza en blockchain.',
    images: ['/images/blockchain-3368174_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CadenaInmutabilidadLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}