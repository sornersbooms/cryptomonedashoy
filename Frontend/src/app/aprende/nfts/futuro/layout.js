
export const metadata = {
  title: 'El Futuro de los NFTs: Tendencias y Evolución - Curso de NFTs',
  description: 'Explora las tendencias emergentes y el futuro de los NFTs. Descubre cómo evolucionarán los tokens no fungibles, nuevos casos de uso, tecnologías complementarias y su impacto en diferentes industrias.',
  keywords: ['futuro NFT', 'tendencias tokens', 'evolución NFT', 'NFT 2.0', 'metaverso', 'identidad digital', 'interoperabilidad NFT', 'sostenibilidad blockchain'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'El Futuro de los NFTs: Tendencias y Evolución - Curso de NFTs',
    description: 'Explora las tendencias emergentes y el futuro de los NFTs. Descubre cómo evolucionarán los tokens no fungibles, nuevos casos de uso, tecnologías complementarias y su impacto en diferentes industrias.',
    images: ['/images/nft-future.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Futuro de los NFTs: Tendencias y Evolución - Curso de NFTs',
    description: 'Explora las tendencias emergentes y el futuro de los NFTs. Descubre cómo evolucionarán los tokens no fungibles, nuevos casos de uso, tecnologías complementarias y su impacto en diferentes industrias.',
    images: ['/images/nft-future.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function FuturoNFTLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}