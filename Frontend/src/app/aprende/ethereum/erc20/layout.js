export const metadata = {
  title: 'Tokens ERC-20: El Estándar de Tokens en Ethereum - Curso de Ethereum',
  description: 'Aprende sobre los tokens ERC-20, el estándar que revolucionó las criptomonedas permitiendo crear tokens fungibles en Ethereum para proyectos, stablecoins y más.',
  keywords: ['ERC-20', 'Tokens Ethereum', 'Estándar de tokens', 'Fungibilidad', 'Stablecoins', 'ICO', 'DeFi tokens', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Tokens ERC-20: El Estándar de Tokens en Ethereum - Curso de Ethereum',
    description: 'Aprende sobre los tokens ERC-20, el estándar que revolucionó las criptomonedas permitiendo crear tokens fungibles en Ethereum para proyectos, stablecoins y más.',
    images: ['/images/crypto-7072522_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/erc20',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokens ERC-20: El Estándar de Tokens en Ethereum - Curso de Ethereum',
    description: 'Aprende sobre los tokens ERC-20, el estándar que revolucionó las criptomonedas permitiendo crear tokens fungibles en Ethereum para proyectos, stablecoins y más.',
    images: ['/images/crypto-7072522_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ERC20Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}