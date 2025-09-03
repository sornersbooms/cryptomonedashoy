export const metadata = {
  title: 'Gas en Ethereum: El Combustible de la Red Blockchain - Curso de Ethereum',
  description: 'Comprende qué es el gas en Ethereum, cómo se calculan las tarifas, por qué son necesarias y estrategias para optimizar tus costos de transacción en la red.',
  keywords: ['Gas Ethereum', 'Tarifas Ethereum', 'Gwei', 'EIP-1559', 'Comisiones blockchain', 'Optimización gas', 'Congestión red Ethereum', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Gas en Ethereum: El Combustible de la Red Blockchain - Curso de Ethereum',
    description: 'Comprende qué es el gas en Ethereum, cómo se calculan las tarifas, por qué son necesarias y estrategias para optimizar tus costos de transacción en la red.',
    images: ['/images/crypto-4231398_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/gas-el-combustible-de-la-red',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gas en Ethereum: El Combustible de la Red Blockchain - Curso de Ethereum',
    description: 'Comprende qué es el gas en Ethereum, cómo se calculan las tarifas, por qué son necesarias y estrategias para optimizar tus costos de transacción en la red.',
    images: ['/images/crypto-4231398_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GasEthereumLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}