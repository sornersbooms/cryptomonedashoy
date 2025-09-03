export const metadata = {
  title: 'La Red Lightning: Bitcoin a la Velocidad de un Rayo - Curso de Bitcoin',
  description: 'Descubre la Red Lightning, una solución de capa 2 que permite transacciones de Bitcoin instantáneas y de bajo costo. Aprende cómo funciona esta tecnología para pagos cotidianos.',
  keywords: ['Red Lightning', 'Lightning Network', 'Bitcoin escalabilidad', 'Pagos instantáneos Bitcoin', 'Capa 2 Bitcoin', 'Transacciones Bitcoin'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'La Red Lightning: Bitcoin a la Velocidad de un Rayo - Curso de Bitcoin',
    description: 'Descubre la Red Lightning, una solución de capa 2 que permite transacciones de Bitcoin instantáneas y de bajo costo. Aprende cómo funciona esta tecnología para pagos cotidianos.',
    images: ['/images/bitcoin-7077716_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/lightning-network',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Red Lightning: Bitcoin a la Velocidad de un Rayo - Curso de Bitcoin',
    description: 'Descubre la Red Lightning, una solución de capa 2 que permite transacciones de Bitcoin instantáneas y de bajo costo. Aprende cómo funciona esta tecnología para pagos cotidianos.',
    images: ['/images/bitcoin-7077716_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LightningNetworkLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}