
export const metadata = {
  title: 'Cómo Crear (Mintear) un NFT: Guía Paso a Paso - Curso de NFTs',
  description: 'Aprende a crear tu propio NFT desde cero. Guía completa con todos los pasos para mintear tokens no fungibles en diferentes blockchains, plataformas recomendadas y consejos para creadores.',
  keywords: ['crear NFT', 'mintear NFT', 'guía NFT', 'OpenSea', 'Rarible', 'gas fees', 'metadata NFT', 'IPFS', 'arte digital'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Cómo Crear (Mintear) un NFT: Guía Paso a Paso - Curso de NFTs',
    description: 'Aprende a crear tu propio NFT desde cero. Guía completa con todos los pasos para mintear tokens no fungibles en diferentes blockchains, plataformas recomendadas y consejos para creadores.',
    images: ['/images/nft-creation.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo Crear (Mintear) un NFT: Guía Paso a Paso - Curso de NFTs',
    description: 'Aprende a crear tu propio NFT desde cero. Guía completa con todos los pasos para mintear tokens no fungibles en diferentes blockchains, plataformas recomendadas y consejos para creadores.',
    images: ['/images/nft-creation.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function CrearNFTLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}