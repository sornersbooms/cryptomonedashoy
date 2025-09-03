export const metadata = {
  title: 'El Ecosistema de Ethereum: Proyectos, Herramientas y Comunidad - Curso de Ethereum',
  description: 'Descubre el vasto ecosistema de Ethereum, desde proyectos DeFi y NFT hasta herramientas de desarrollo, wallets y la vibrante comunidad que impulsa la innovación blockchain.',
  keywords: ['Ecosistema Ethereum', 'Proyectos Ethereum', 'Wallets ETH', 'Herramientas desarrollo', 'Comunidad Ethereum', 'Hackathons', 'ETH Global', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'El Ecosistema de Ethereum: Proyectos, Herramientas y Comunidad - Curso de Ethereum',
    description: 'Descubre el vasto ecosistema de Ethereum, desde proyectos DeFi y NFT hasta herramientas de desarrollo, wallets y la vibrante comunidad que impulsa la innovación blockchain.',
    images: ['/images/work-1627703_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/ecosistema',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Ecosistema de Ethereum: Proyectos, Herramientas y Comunidad - Curso de Ethereum',
    description: 'Descubre el vasto ecosistema de Ethereum, desde proyectos DeFi y NFT hasta herramientas de desarrollo, wallets y la vibrante comunidad que impulsa la innovación blockchain.',
    images: ['/images/work-1627703_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EcosistemaLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}