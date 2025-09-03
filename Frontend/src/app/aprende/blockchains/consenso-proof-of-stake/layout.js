export const metadata = {
  title: 'Consenso: Proof-of-Stake (PoS) - Curso de Blockchains',
  description: 'Explora el mecanismo de consenso Proof-of-Stake, sus diferencias con PoW, ventajas energéticas, seguridad y cómo funciona el staking.',
  keywords: ['Proof of Stake', 'PoS', 'Staking', 'Validadores', 'Consenso blockchain', 'Eficiencia energética', 'Ethereum 2.0'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Consenso: Proof-of-Stake (PoS) - Curso de Blockchains',
    description: 'Explora el mecanismo de consenso Proof-of-Stake, sus diferencias con PoW, ventajas energéticas, seguridad y cómo funciona el staking.',
    images: ['/images/ethereum-6928106_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/consenso-proof-of-stake',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consenso: Proof-of-Stake (PoS) - Curso de Blockchains',
    description: 'Explora el mecanismo de consenso Proof-of-Stake, sus diferencias con PoW, ventajas energéticas, seguridad y cómo funciona el staking.',
    images: ['/images/ethereum-6928106_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConsensoPoSLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}