export const metadata = {
  title: 'Puentes (Bridges) entre Blockchains: Conectando Ecosistemas - Curso de DeFi',
  description: 'Explora cómo los puentes blockchain permiten la interoperabilidad entre diferentes redes. Aprende sobre su funcionamiento, tipos, seguridad y cómo facilitan la transferencia de activos y liquidez entre distintos ecosistemas DeFi.',
  keywords: ['bridges blockchain', 'puentes cripto', 'interoperabilidad', 'cross-chain', 'transferencia activos', 'wrapped tokens', 'Multichain', 'Wormhole', 'Polygon Bridge', 'Arbitrum Bridge'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Puentes (Bridges) entre Blockchains: Conectando Ecosistemas - Curso de DeFi',
    description: 'Explora cómo los puentes blockchain permiten la interoperabilidad entre diferentes redes. Aprende sobre su funcionamiento, tipos, seguridad y cómo facilitan la transferencia de activos y liquidez entre distintos ecosistemas DeFi.',
    images: ['/images/blockchain-bridges.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puentes (Bridges) entre Blockchains: Conectando Ecosistemas - Curso de DeFi',
    description: 'Explora cómo los puentes blockchain permiten la interoperabilidad entre diferentes redes. Aprende sobre su funcionamiento, tipos, seguridad y cómo facilitan la transferencia de activos y liquidez entre distintos ecosistemas DeFi.',
    images: ['/images/blockchain-bridges.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BridgesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}