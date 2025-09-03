
export const metadata = {
  title: 'Estándares NFT: ERC-721 vs. ERC-1155 - Curso de NFTs',
  description: 'Comprende las diferencias entre los principales estándares de NFTs: ERC-721 y ERC-1155. Aprende cómo funcionan estos protocolos y cuál es mejor para diferentes casos de uso.',
  keywords: ['ERC-721', 'ERC-1155', 'estándares NFT', 'tokens Ethereum', 'contratos inteligentes', 'multi-token', 'token único'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Estándares NFT: ERC-721 vs. ERC-1155 - Curso de NFTs',
    description: 'Comprende las diferencias entre los principales estándares de NFTs: ERC-721 y ERC-1155. Aprende cómo funcionan estos protocolos y cuál es mejor para diferentes casos de uso.',
    images: ['/images/nft-standards.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estándares NFT: ERC-721 vs. ERC-1155 - Curso de NFTs',
    description: 'Comprende las diferencias entre los principales estándares de NFTs: ERC-721 y ERC-1155. Aprende cómo funcionan estos protocolos y cuál es mejor para diferentes casos de uso.',
    images: ['/images/nft-standards.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function EstandaresNFTLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}