export const metadata = {
  title: 'Otros Mecanismos de Consenso - Curso de Blockchains',
  description: 'Conoce mecanismos alternativos de consenso como DPoS, PoA, PoB, PoC y otros, sus características, ventajas y casos de uso en diferentes blockchains.',
  keywords: ['Mecanismos consenso', 'DPoS', 'PoA', 'Proof of Authority', 'Proof of Burn', 'Proof of Capacity', 'Algoritmos consenso blockchain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Otros Mecanismos de Consenso - Curso de Blockchains',
    description: 'Conoce mecanismos alternativos de consenso como DPoS, PoA, PoB, PoC y otros, sus características, ventajas y casos de uso en diferentes blockchains.',
    images: ['/images/blockchain-7074949_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/otros-mecanismos-de-consenso',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otros Mecanismos de Consenso - Curso de Blockchains',
    description: 'Conoce mecanismos alternativos de consenso como DPoS, PoA, PoB, PoC y otros, sus características, ventajas y casos de uso en diferentes blockchains.',
    images: ['/images/blockchain-7074949_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OtrosConsensoLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}