export const metadata = {
  title: 'Soluciones de Capa 2 en Ethereum: Escalabilidad y Velocidad - Curso de Ethereum',
  description: 'Explora las soluciones de Capa 2 en Ethereum como Rollups, Sidechains y Canales de Estado que mejoran la escalabilidad, reducen las tarifas y aumentan la velocidad de transacción.',
  keywords: ['Capa 2 Ethereum', 'Layer 2', 'Rollups', 'Optimistic Rollups', 'ZK-Rollups', 'Sidechains', 'Canales de Estado', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Soluciones de Capa 2 en Ethereum: Escalabilidad y Velocidad - Curso de Ethereum',
    description: 'Explora las soluciones de Capa 2 en Ethereum como Rollups, Sidechains y Canales de Estado que mejoran la escalabilidad, reducen las tarifas y aumentan la velocidad de transacción.',
    images: ['/images/blockchain-7074949_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/capa-2',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soluciones de Capa 2 en Ethereum: Escalabilidad y Velocidad - Curso de Ethereum',
    description: 'Explora las soluciones de Capa 2 en Ethereum como Rollups, Sidechains y Canales de Estado que mejoran la escalabilidad, reducen las tarifas y aumentan la velocidad de transacción.',
    images: ['/images/blockchain-7074949_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Capa2Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}