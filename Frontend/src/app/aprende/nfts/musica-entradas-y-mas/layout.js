
export const metadata = {
  title: 'NFTs en Música, Entradas y Otros Usos - Curso de NFTs',
  description: 'Explora los diversos usos de los NFTs más allá del arte: música, entradas para eventos, dominios web, moda digital y más. Descubre cómo los tokens no fungibles están creando nuevas oportunidades en múltiples industrias.',
  keywords: ['NFT música', 'entradas blockchain', 'dominios NFT', 'moda digital', 'royalties música', 'memorabilia digital', 'experiencias NFT'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'NFTs en Música, Entradas y Otros Usos - Curso de NFTs',
    description: 'Explora los diversos usos de los NFTs más allá del arte: música, entradas para eventos, dominios web, moda digital y más. Descubre cómo los tokens no fungibles están creando nuevas oportunidades en múltiples industrias.',
    images: ['/images/nft-music.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFTs en Música, Entradas y Otros Usos - Curso de NFTs',
    description: 'Explora los diversos usos de los NFTs más allá del arte: música, entradas para eventos, dominios web, moda digital y más. Descubre cómo los tokens no fungibles están creando nuevas oportunidades en múltiples industrias.',
    images: ['/images/nft-music.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function MusicaEntradasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}