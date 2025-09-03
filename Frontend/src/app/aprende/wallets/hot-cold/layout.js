export const metadata = {
  title: 'Tipos de Wallets: Hot vs. Cold - Curso de Wallets',
  description: 'Compara las wallets calientes (hot) y frías (cold) para criptomonedas. Aprende sus diferencias, ventajas, desventajas y cuál es la mejor opción según tus necesidades.',
  keywords: ['hot wallet', 'cold wallet', 'wallet caliente', 'wallet fría', 'comparativa wallets', 'seguridad cripto', 'almacenamiento offline'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Tipos de Wallets: Hot vs. Cold - Curso de Wallets',
    description: 'Compara las wallets calientes (hot) y frías (cold) para criptomonedas. Aprende sus diferencias, ventajas, desventajas y cuál es la mejor opción según tus necesidades.',
    images: ['/images/hot-cold-wallets.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tipos de Wallets: Hot vs. Cold - Curso de Wallets',
    description: 'Compara las wallets calientes (hot) y frías (cold) para criptomonedas. Aprende sus diferencias, ventajas, desventajas y cuál es la mejor opción según tus necesidades.',
    images: ['/images/hot-cold-wallets.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function HotColdLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}