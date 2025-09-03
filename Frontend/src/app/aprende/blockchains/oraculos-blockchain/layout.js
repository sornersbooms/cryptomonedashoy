export const metadata = {
  title: 'Oráculos Blockchain - Curso de Blockchains',
  description: 'Comprende qué son los oráculos blockchain, cómo conectan datos del mundo real con contratos inteligentes, tipos de oráculos y proyectos principales.',
  keywords: ['Oráculos blockchain', 'Chainlink', 'Datos externos', 'Contratos inteligentes', 'Problema del oráculo', 'Oráculos descentralizados', 'Feeds de datos'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Oráculos Blockchain - Curso de Blockchains',
    description: 'Comprende qué son los oráculos blockchain, cómo conectan datos del mundo real con contratos inteligentes, tipos de oráculos y proyectos principales.',
    images: ['/images/blockchain-3041480_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/oraculos-blockchain',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oráculos Blockchain - Curso de Blockchains',
    description: 'Comprende qué son los oráculos blockchain, cómo conectan datos del mundo real con contratos inteligentes, tipos de oráculos y proyectos principales.',
    images: ['/images/blockchain-3041480_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OraculosBlockchainLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}