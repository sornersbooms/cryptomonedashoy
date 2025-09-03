export const metadata = {
  title: 'Aplicación: NFTs (Tokens No Fungibles) - Curso de Blockchains',
  description: 'Explora cómo blockchain permite la creación de NFTs, su impacto en arte, coleccionables, gaming y otras industrias, y su funcionamiento técnico.',
  keywords: ['NFTs', 'Tokens no fungibles', 'Aplicaciones blockchain', 'Arte digital', 'Coleccionables', 'Metaverso', 'Propiedad digital', 'ERC-721'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Aplicación: NFTs (Tokens No Fungibles) - Curso de Blockchains',
    description: 'Explora cómo blockchain permite la creación de NFTs, su impacto en arte, coleccionables, gaming y otras industrias, y su funcionamiento técnico.',
    images: ['/images/nft-7219625_1280.png'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/app-nfts',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplicación: NFTs (Tokens No Fungibles) - Curso de Blockchains',
    description: 'Explora cómo blockchain permite la creación de NFTs, su impacto en arte, coleccionables, gaming y otras industrias, y su funcionamiento técnico.',
    images: ['/images/nft-7219625_1280.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AppNFTsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}