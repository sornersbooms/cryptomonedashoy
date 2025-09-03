export const metadata = {
  title: 'DeFi en Diferentes Redes: Ecosistema Multi-Chain - Curso de DeFi',
  description: 'Descubre cómo DeFi se expande más allá de Ethereum hacia múltiples blockchains. Explora los ecosistemas DeFi en redes como Solana, Avalanche, BSC, Polygon y otras, comparando sus ventajas, protocolos nativos y oportunidades.',
  keywords: ['DeFi multi-chain', 'Solana DeFi', 'Avalanche DeFi', 'Polygon DeFi', 'BSC DeFi', 'Layer 2', 'ecosistemas blockchain', 'comparativa redes', 'cross-chain DeFi'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'DeFi en Diferentes Redes: Ecosistema Multi-Chain - Curso de DeFi',
    description: 'Descubre cómo DeFi se expande más allá de Ethereum hacia múltiples blockchains. Explora los ecosistemas DeFi en redes como Solana, Avalanche, BSC, Polygon y otras, comparando sus ventajas, protocolos nativos y oportunidades.',
    images: ['/images/multi-chain-defi.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi en Diferentes Redes: Ecosistema Multi-Chain - Curso de DeFi',
    description: 'Descubre cómo DeFi se expande más allá de Ethereum hacia múltiples blockchains. Explora los ecosistemas DeFi en redes como Solana, Avalanche, BSC, Polygon y otras, comparando sus ventajas, protocolos nativos y oportunidades.',
    images: ['/images/multi-chain-defi.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function MultiChainLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}