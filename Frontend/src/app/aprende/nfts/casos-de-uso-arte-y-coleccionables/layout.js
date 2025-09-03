
export const metadata = {
  title: 'NFTs en Arte y Coleccionables: Casos de Uso - Curso de NFTs',
  description: 'Explora cómo los NFTs están transformando el mundo del arte y los coleccionables digitales. Conoce casos de éxito, artistas destacados y las nuevas oportunidades para creadores.',
  keywords: ['NFT arte', 'coleccionables digitales', 'arte blockchain', 'artistas NFT', 'mercado arte digital', 'subastas NFT', 'Beeple', 'CryptoPunks'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'NFTs en Arte y Coleccionables: Casos de Uso - Curso de NFTs',
    description: 'Explora cómo los NFTs están transformando el mundo del arte y los coleccionables digitales. Conoce casos de éxito, artistas destacados y las nuevas oportunidades para creadores.',
    images: ['/images/nft-art.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFTs en Arte y Coleccionables: Casos de Uso - Curso de NFTs',
    description: 'Explora cómo los NFTs están transformando el mundo del arte y los coleccionables digitales. Conoce casos de éxito, artistas destacados y las nuevas oportunidades para creadores.',
    images: ['/images/nft-art.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ArteColeccionablesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}