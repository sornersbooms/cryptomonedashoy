export const metadata = {
  title: 'Bitcoin como Inversión: ¿Una Apuesta o un Ahorro? - Curso de Bitcoin',
  description: 'Explora Bitcoin como una inversión. Analiza su volatilidad, la escasez de 21 millones de unidades y estrategias como HODL y el promedio de costo en dólares (DCA).',
  keywords: ['Bitcoin inversión', 'Volatilidad Bitcoin', 'Escasez Bitcoin', 'HODL', 'DCA', 'Promedio de costo en dólares', 'Invertir en criptomonedas', 'cryptomonedas hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Bitcoin como Inversión: ¿Una Apuesta o un Ahorro? - Curso de Bitcoin',
    description: 'Explora Bitcoin como una inversión. Analiza su volatilidad, la escasez de 21 millones de unidades y estrategias como HODL y el promedio de costo en dólares (DCA).',
    images: ['/images/crypto-4231398_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/inversion',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin como Inversión: ¿Una Apuesta o un Ahorro? - Curso de Bitcoin',
    description: 'Explora Bitcoin como una inversión. Analiza su volatilidad, la escasez de 21 millones de unidades y estrategias como HODL y el promedio de costo en dólares (DCA).',
    images: ['/images/crypto-4231398_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InversionBitcoinLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}