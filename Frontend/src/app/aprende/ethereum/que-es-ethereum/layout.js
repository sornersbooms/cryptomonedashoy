export const metadata = {
  title: 'Qué es Ethereum: La Plataforma de Contratos Inteligentes - Curso de Ethereum',
  description: 'Descubre qué es Ethereum, cómo funciona esta plataforma descentralizada y por qué revoluciona internet con sus contratos inteligentes y aplicaciones descentralizadas.',
  keywords: ['Ethereum', 'Ether', 'ETH', 'Contratos inteligentes', 'Blockchain Ethereum', 'Vitalik Buterin', 'Web3', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Qué es Ethereum: La Plataforma de Contratos Inteligentes - Curso de Ethereum',
    description: 'Descubre qué es Ethereum, cómo funciona esta plataforma descentralizada y por qué revoluciona internet con sus contratos inteligentes y aplicaciones descentralizadas.',
    images: ['/images/ethereum-6928106_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/que-es-ethereum',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué es Ethereum: La Plataforma de Contratos Inteligentes - Curso de Ethereum',
    description: 'Descubre qué es Ethereum, cómo funciona esta plataforma descentralizada y por qué revoluciona internet con sus contratos inteligentes y aplicaciones descentralizadas.',
    images: ['/images/ethereum-6928106_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QueEsEthereumLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}