
export const metadata = {
  title: '¿Qué es un NFT? Tokens No Fungibles Explicados - Curso de NFTs',
  description: 'Aprende qué son los NFTs (Tokens No Fungibles) de forma sencilla. Descubre cómo funcionan estos activos digitales únicos y por qué están revolucionando la propiedad digital.',
  keywords: ['NFT', 'token no fungible', 'activos digitales', 'blockchain', 'criptomonedas', 'propiedad digital', 'coleccionables digitales'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: '¿Qué es un NFT? Tokens No Fungibles Explicados - Curso de NFTs',
    description: 'Aprende qué son los NFTs (Tokens No Fungibles) de forma sencilla. Descubre cómo funcionan estos activos digitales únicos y por qué están revolucionando la propiedad digital.',
    images: ['/images/nft-cover.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué es un NFT? Tokens No Fungibles Explicados - Curso de NFTs',
    description: 'Aprende qué son los NFTs (Tokens No Fungibles) de forma sencilla. Descubre cómo funcionan estos activos digitales únicos y por qué están revolucionando la propiedad digital.',
    images: ['/images/nft-cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function QueEsUnNFTLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}