
export const metadata = {
  title: 'Marketplaces de NFTs: Dónde Comprar y Vender Tokens No Fungibles - Curso de NFTs',
  description: 'Conoce los principales marketplaces para comprar, vender y comerciar NFTs. Comparativa de plataformas como OpenSea, Rarible, Foundation, Nifty Gateway y más, con sus características, comisiones y ventajas.',
  keywords: ['marketplace NFT', 'OpenSea', 'Rarible', 'Foundation', 'Nifty Gateway', 'SuperRare', 'comprar NFT', 'vender NFT', 'subastas NFT'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Marketplaces de NFTs: Dónde Comprar y Vender Tokens No Fungibles - Curso de NFTs',
    description: 'Conoce los principales marketplaces para comprar, vender y comerciar NFTs. Comparativa de plataformas como OpenSea, Rarible, Foundation, Nifty Gateway y más, con sus características, comisiones y ventajas.',
    images: ['/images/nft-marketplaces.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketplaces de NFTs: Dónde Comprar y Vender Tokens No Fungibles - Curso de NFTs',
    description: 'Conoce los principales marketplaces para comprar, vender y comerciar NFTs. Comparativa de plataformas como OpenSea, Rarible, Foundation, Nifty Gateway y más, con sus características, comisiones y ventajas.',
    images: ['/images/nft-marketplaces.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function MarketplacesNFTLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}