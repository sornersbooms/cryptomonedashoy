export const metadata = {
  title: 'Forks: Blandos y Duros - Curso de Blockchains',
  description: 'Aprende sobre los forks en blockchain, la diferencia entre soft forks y hard forks, sus implicaciones y ejemplos históricos importantes.',
  keywords: ['Fork blockchain', 'Hard fork', 'Soft fork', 'Bifurcación cadena', 'Bitcoin fork', 'Ethereum fork', 'Actualización protocolo'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Forks: Blandos y Duros - Curso de Blockchains',
    description: 'Aprende sobre los forks en blockchain, la diferencia entre soft forks y hard forks, sus implicaciones y ejemplos históricos importantes.',
    images: ['/images/blockchain-7074949_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/forks-blandos-y-duros',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forks: Blandos y Duros - Curso de Blockchains',
    description: 'Aprende sobre los forks en blockchain, la diferencia entre soft forks y hard forks, sus implicaciones y ejemplos históricos importantes.',
    images: ['/images/blockchain-7074949_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ForksLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}