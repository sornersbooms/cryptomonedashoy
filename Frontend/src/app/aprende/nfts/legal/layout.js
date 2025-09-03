
export const metadata = {
  title: 'Aspectos Legales de los NFTs: Derechos y Regulación - Curso de NFTs',
  description: 'Explora el marco legal de los NFTs: derechos de propiedad intelectual, licencias, royalties, impuestos y regulaciones emergentes. Comprende las implicaciones legales antes de crear o invertir en NFTs.',
  keywords: ['legal NFT', 'derechos autor NFT', 'propiedad intelectual', 'licencias NFT', 'royalties', 'impuestos NFT', 'regulación tokens', 'copyright digital'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Aspectos Legales de los NFTs: Derechos y Regulación - Curso de NFTs',
    description: 'Explora el marco legal de los NFTs: derechos de propiedad intelectual, licencias, royalties, impuestos y regulaciones emergentes. Comprende las implicaciones legales antes de crear o invertir en NFTs.',
    images: ['/images/nft-legal.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aspectos Legales de los NFTs: Derechos y Regulación - Curso de NFTs',
    description: 'Explora el marco legal de los NFTs: derechos de propiedad intelectual, licencias, royalties, impuestos y regulaciones emergentes. Comprende las implicaciones legales antes de crear o invertir en NFTs.',
    images: ['/images/nft-legal.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function LegalNFTLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}