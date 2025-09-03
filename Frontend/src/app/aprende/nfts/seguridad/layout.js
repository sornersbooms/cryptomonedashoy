
export const metadata = {
  title: 'Seguridad en NFTs: Cómo Evitar Estafas y Fraudes - Curso de NFTs',
  description: 'Protégete de las estafas más comunes en el mundo de los NFTs. Aprende a identificar proyectos fraudulentos, phishing, falsificaciones y otras amenazas para mantener tus activos digitales seguros.',
  keywords: ['seguridad NFT', 'estafas NFT', 'phishing crypto', 'NFT falsos', 'rug pulls', 'verificación NFT', 'protección wallet', 'smart contract seguro'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Seguridad en NFTs: Cómo Evitar Estafas y Fraudes - Curso de NFTs',
    description: 'Protégete de las estafas más comunes en el mundo de los NFTs. Aprende a identificar proyectos fraudulentos, phishing, falsificaciones y otras amenazas para mantener tus activos digitales seguros.',
    images: ['/images/nft-security.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguridad en NFTs: Cómo Evitar Estafas y Fraudes - Curso de NFTs',
    description: 'Protégete de las estafas más comunes en el mundo de los NFTs. Aprende a identificar proyectos fraudulentos, phishing, falsificaciones y otras amenazas para mantener tus activos digitales seguros.',
    images: ['/images/nft-security.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SeguridadNFTLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}