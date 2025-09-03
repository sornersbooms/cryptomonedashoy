export const metadata = {
  title: 'Blockchains Públicas y Privadas - Curso de Blockchains',
  description: 'Comprende las diferencias entre blockchains públicas, privadas y de consorcio, sus casos de uso, ventajas y desventajas para diferentes aplicaciones.',
  keywords: ['Blockchain pública', 'Blockchain privada', 'Blockchain consorcio', 'Permisionada', 'Sin permisos', 'Hyperledger', 'Enterprise blockchain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Blockchains Públicas y Privadas - Curso de Blockchains',
    description: 'Comprende las diferencias entre blockchains públicas, privadas y de consorcio, sus casos de uso, ventajas y desventajas para diferentes aplicaciones.',
    images: ['/images/blockchain-3041480_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/blockchains-publicas-y-privadas',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchains Públicas y Privadas - Curso de Blockchains',
    description: 'Comprende las diferencias entre blockchains públicas, privadas y de consorcio, sus casos de uso, ventajas y desventajas para diferentes aplicaciones.',
    images: ['/images/blockchain-3041480_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlockchainsPublicasPrivadasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}