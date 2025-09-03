export const metadata = {
  title: 'Consenso: Proof-of-Work (PoW) - Curso de Blockchains',
  description: 'Comprende el mecanismo de consenso Proof-of-Work utilizado por Bitcoin y otras blockchains: minería, seguridad, ventajas y desventajas.',
  keywords: ['Proof of Work', 'PoW', 'Minería blockchain', 'Consenso blockchain', 'Algoritmo hash', 'Dificultad minería', 'Seguridad blockchain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Consenso: Proof-of-Work (PoW) - Curso de Blockchains',
    description: 'Comprende el mecanismo de consenso Proof-of-Work utilizado por Bitcoin y otras blockchains: minería, seguridad, ventajas y desventajas.',
    images: ['/images/bitcoin-4235718_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/consenso-proof-of-work',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consenso: Proof-of-Work (PoW) - Curso de Blockchains',
    description: 'Comprende el mecanismo de consenso Proof-of-Work utilizado por Bitcoin y otras blockchains: minería, seguridad, ventajas y desventajas.',
    images: ['/images/bitcoin-4235718_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConsensoPoWLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}