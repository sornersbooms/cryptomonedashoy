export const metadata = {
  title: 'NFTs en Ethereum: Tokens No Fungibles y Coleccionables Digitales - Curso de Ethereum',
  description: 'Descubre el mundo de los NFTs en Ethereum, cómo funcionan estos activos digitales únicos, sus aplicaciones en arte, gaming y más allá del simple coleccionismo.',
  keywords: ['NFT', 'Tokens no fungibles', 'ERC-721', 'ERC-1155', 'Arte digital', 'Coleccionables blockchain', 'Metaverso', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'NFTs en Ethereum: Tokens No Fungibles y Coleccionables Digitales - Curso de Ethereum',
    description: 'Descubre el mundo de los NFTs en Ethereum, cómo funcionan estos activos digitales únicos, sus aplicaciones en arte, gaming y más allá del simple coleccionismo.',
    images: ['/images/nft-7219625_1280.png'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/nfts',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFTs en Ethereum: Tokens No Fungibles y Coleccionables Digitales - Curso de Ethereum',
    description: 'Descubre el mundo de los NFTs en Ethereum, cómo funcionan estos activos digitales únicos, sus aplicaciones en arte, gaming y más allá del simple coleccionismo.',
    images: ['/images/nft-7219625_1280.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NFTsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}