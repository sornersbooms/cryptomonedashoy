export const metadata = {
  title: 'Nodos y Redes P2P - Curso de Blockchains',
  description: 'Descubre cómo funcionan los nodos en una blockchain, los tipos de nodos, las redes peer-to-peer y su importancia para la descentralización.',
  keywords: ['Nodos blockchain', 'Redes P2P', 'Peer to peer', 'Nodo completo', 'Nodo ligero', 'Descentralización', 'Propagación blockchain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Nodos y Redes P2P - Curso de Blockchains',
    description: 'Descubre cómo funcionan los nodos en una blockchain, los tipos de nodos, las redes peer-to-peer y su importancia para la descentralización.',
    images: ['/images/blockchain-3368174_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/nodos-y-redes-p2p',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nodos y Redes P2P - Curso de Blockchains',
    description: 'Descubre cómo funcionan los nodos en una blockchain, los tipos de nodos, las redes peer-to-peer y su importancia para la descentralización.',
    images: ['/images/blockchain-3368174_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NodosRedesP2PLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}