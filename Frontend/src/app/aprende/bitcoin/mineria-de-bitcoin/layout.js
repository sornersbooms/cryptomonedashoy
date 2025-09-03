export const metadata = {
  title: 'Minería de Bitcoin: El Gran Sorteo Digital - Curso de Bitcoin',
  description: 'Descubre qué es la minería de Bitcoin, cómo funciona el proceso de Prueba de Trabajo (Proof of Work) y por qué es fundamental para la seguridad y creación de nuevos bitcoins.',
  keywords: ['Minería Bitcoin', 'Proof of Work', 'Prueba de Trabajo', 'Mineros Bitcoin', 'Bloques Bitcoin', 'Recompensa de bloque', 'Seguridad Bitcoin', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Minería de Bitcoin: El Gran Sorteo Digital - Curso de Bitcoin',
    description: 'Descubre qué es la minería de Bitcoin, cómo funciona el proceso de Prueba de Trabajo (Proof of Work) y por qué es fundamental para la seguridad y creación de nuevos bitcoins.',
    images: ['/images/blockchain-3368174_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/mineria-de-bitcoin',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minería de Bitcoin: El Gran Sorteo Digital - Curso de Bitcoin',
    description: 'Descubre qué es la minería de Bitcoin, cómo funciona el proceso de Prueba de Trabajo (Proof of Work) y por qué es fundamental para la seguridad y creación de nuevos bitcoins.',
    images: ['/images/blockchain-3368174_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MineriaDeBitcoinLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}