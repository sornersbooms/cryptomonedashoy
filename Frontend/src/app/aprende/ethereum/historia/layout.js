export const metadata = {
  title: 'Historia de Ethereum: Del Whitepaper a la Actualidad - Curso de Ethereum',
  description: 'Explora la fascinante historia de Ethereum, desde su concepción por Vitalik Buterin hasta sus actualizaciones más importantes como The Merge y el camino hacia Ethereum 2.0.',
  keywords: ['Historia Ethereum', 'Vitalik Buterin', 'The DAO hack', 'The Merge', 'Ethereum 2.0', 'Proof of Stake', 'Actualizaciones Ethereum', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Historia de Ethereum: Del Whitepaper a la Actualidad - Curso de Ethereum',
    description: 'Explora la fascinante historia de Ethereum, desde su concepción por Vitalik Buterin hasta sus actualizaciones más importantes como The Merge y el camino hacia Ethereum 2.0.',
    images: ['/images/blockchain-3041480_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/historia',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Historia de Ethereum: Del Whitepaper a la Actualidad - Curso de Ethereum',
    description: 'Explora la fascinante historia de Ethereum, desde su concepción por Vitalik Buterin hasta sus actualizaciones más importantes como The Merge y el camino hacia Ethereum 2.0.',
    images: ['/images/blockchain-3041480_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HistoriaEthereumLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}