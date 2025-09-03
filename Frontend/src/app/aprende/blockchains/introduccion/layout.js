export const metadata = {
  title: 'Introducción a Blockchain - Curso de Blockchains',
  description: 'Descubre los fundamentos de la tecnología blockchain, su origen, características principales y cómo está revolucionando diferentes industrias.',
  keywords: ['Blockchain', 'Tecnología distribuida', 'Descentralización', 'Introducción blockchain', 'Distributed ledger', 'Cadena de bloques'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Introducción a Blockchain - Curso de Blockchains',
    description: 'Descubre los fundamentos de la tecnología blockchain, su origen, características principales y cómo está revolucionando diferentes industrias.',
    images: ['/images/blockchain-3368174_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/introduccion',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducción a Blockchain - Curso de Blockchains',
    description: 'Descubre los fundamentos de la tecnología blockchain, su origen, características principales y cómo está revolucionando diferentes industrias.',
    images: ['/images/blockchain-3368174_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IntroduccionLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}