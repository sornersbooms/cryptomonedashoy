
export const metadata = {
  title: 'NFTs en Gaming y Metaversos: Revolucionando los Mundos Virtuales - Curso de NFTs',
  description: 'Descubre cómo los NFTs están transformando la industria de los videojuegos y los metaversos. Aprende sobre la propiedad de activos virtuales, play-to-earn y economías digitales.',
  keywords: ['NFT gaming', 'metaverso', 'juegos blockchain', 'play to earn', 'Axie Infinity', 'The Sandbox', 'Decentraland', 'activos virtuales'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'NFTs en Gaming y Metaversos: Revolucionando los Mundos Virtuales - Curso de NFTs',
    description: 'Descubre cómo los NFTs están transformando la industria de los videojuegos y los metaversos. Aprende sobre la propiedad de activos virtuales, play-to-earn y economías digitales.',
    images: ['/images/nft-gaming.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFTs en Gaming y Metaversos: Revolucionando los Mundos Virtuales - Curso de NFTs',
    description: 'Descubre cómo los NFTs están transformando la industria de los videojuegos y los metaversos. Aprende sobre la propiedad de activos virtuales, play-to-earn y economías digitales.',
    images: ['/images/nft-gaming.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function GamingMetaversosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}