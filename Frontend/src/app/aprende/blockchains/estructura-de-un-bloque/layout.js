export const metadata = {
  title: 'Estructura de un Bloque - Curso de Blockchains',
  description: 'Explora en detalle la anatomía de un bloque en la blockchain: cabecera, hash, nonce, timestamp, merkle root y transacciones.',
  keywords: ['Estructura bloque', 'Cabecera bloque', 'Hash previo', 'Merkle root', 'Nonce', 'Timestamp', 'Transacciones blockchain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Estructura de un Bloque - Curso de Blockchains',
    description: 'Explora en detalle la anatomía de un bloque en la blockchain: cabecera, hash, nonce, timestamp, merkle root y transacciones.',
    images: ['/images/blockchain-9268421_1280.png'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/estructura-de-un-bloque',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estructura de un Bloque - Curso de Blockchains',
    description: 'Explora en detalle la anatomía de un bloque en la blockchain: cabecera, hash, nonce, timestamp, merkle root y transacciones.',
    images: ['/images/blockchain-9268421_1280.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EstructuraBloqueLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}