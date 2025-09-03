export const metadata = {
  title: 'Wallets de Bitcoin: Tus Llaves, Tus Monedas - Curso de Bitcoin',
  description: 'Aprende qué son las wallets de Bitcoin, cómo funcionan las claves privadas y la frase semilla. Descubre la diferencia entre wallets calientes y frías para proteger tus criptomonedas.',
  keywords: ['Wallets Bitcoin', 'Carteras Bitcoin', 'Claves privadas', 'Frase semilla', 'Seed phrase', 'Hot wallets', 'Cold wallets', 'Seguridad Bitcoin'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Wallets de Bitcoin: Tus Llaves, Tus Monedas - Curso de Bitcoin',
    description: 'Aprende qué son las wallets de Bitcoin, cómo funcionan las claves privadas y la frase semilla. Descubre la diferencia entre wallets calientes y frías para proteger tus criptomonedas.',
    images: ['/images/bitcoin-6772378_1280.png'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/wallets-guarda-tu-bitcoin',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallets de Bitcoin: Tus Llaves, Tus Monedas - Curso de Bitcoin',
    description: 'Aprende qué son las wallets de Bitcoin, cómo funcionan las claves privadas y la frase semilla. Descubre la diferencia entre wallets calientes y frías para proteger tus criptomonedas.',
    images: ['/images/bitcoin-6772378_1280.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WalletsBitcoinLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}