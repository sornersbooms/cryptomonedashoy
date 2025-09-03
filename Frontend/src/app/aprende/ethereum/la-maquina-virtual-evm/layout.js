export const metadata = {
  title: 'La Máquina Virtual de Ethereum (EVM): El Cerebro de la Red - Curso de Ethereum',
  description: 'Descubre cómo funciona la Máquina Virtual de Ethereum (EVM), el entorno de ejecución que procesa contratos inteligentes y hace posible la computación descentralizada.',
  keywords: ['EVM', 'Máquina Virtual Ethereum', 'Ethereum Virtual Machine', 'Contratos inteligentes', 'Bytecode', 'Gas Ethereum', 'Computación descentralizada', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'La Máquina Virtual de Ethereum (EVM): El Cerebro de la Red - Curso de Ethereum',
    description: 'Descubre cómo funciona la Máquina Virtual de Ethereum (EVM), el entorno de ejecución que procesa contratos inteligentes y hace posible la computación descentralizada.',
    images: ['/images/blockchain-9268421_1280.png'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/la-maquina-virtual-evm',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Máquina Virtual de Ethereum (EVM): El Cerebro de la Red - Curso de Ethereum',
    description: 'Descubre cómo funciona la Máquina Virtual de Ethereum (EVM), el entorno de ejecución que procesa contratos inteligentes y hace posible la computación descentralizada.',
    images: ['/images/blockchain-9268421_1280.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MaquinaVirtualEVMLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}