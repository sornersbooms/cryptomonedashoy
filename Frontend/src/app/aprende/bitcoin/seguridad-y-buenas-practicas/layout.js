export const metadata = {
  title: 'Seguridad en Bitcoin: Protegiendo tu Tesoro Digital - Curso de Bitcoin',
  description: 'Aprende los fundamentos de la seguridad en Bitcoin, incluyendo la importancia de la clave privada, el uso de wallets (calientes y frías) y la gestión de la frase semilla para proteger tus fondos.',
  keywords: ['Seguridad Bitcoin', 'Clave privada Bitcoin', 'Wallets Bitcoin', 'Hot wallet', 'Cold wallet', 'Frase semilla', 'Seed phrase', 'Buenas prácticas Bitcoin'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Seguridad en Bitcoin: Protegiendo tu Tesoro Digital - Curso de Bitcoin',
    description: 'Aprende los fundamentos de la seguridad en Bitcoin, incluyendo la importancia de la clave privada, el uso de wallets (calientes y frías) y la gestión de la frase semilla para proteger tus fondos.',
    images: ['/images/blockchain-3368174_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/seguridad-y-buenas-practicas',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguridad en Bitcoin: Protegiendo tu Tesoro Digital - Curso de Bitcoin',
    description: 'Aprende los fundamentos de la seguridad en Bitcoin, incluyendo la importancia de la clave privada, el uso de wallets (calientes y frías) y la gestión de la frase semilla para proteger tus fondos.',
    images: ['/images/blockchain-3368174_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SeguridadBitcoinLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}