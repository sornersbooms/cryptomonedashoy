
export const metadata = {
  title: '¿Cómo Funciona Bitcoin? La Tecnología Blockchain Explicada - Curso de Bitcoin',
  description: 'Descubre en detalle cómo funciona Bitcoin. Explicamos la tecnología blockchain, las transacciones, los bloques y la descentralización de una manera fácil de entender.',
  keywords: ['Cómo funciona Bitcoin', 'Blockchain', 'Transacciones Bitcoin', 'Bloques', 'Descentralización', 'Tecnología Bitcoin'],
  authors: [{ name: 'CryptomonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: '¿Cómo Funciona Bitcoin? La Tecnología Blockchain Explicada - Curso de Bitcoin',
    description: 'Descubre en detalle cómo funciona Bitcoin. Explicamos la tecnología blockchain, las transacciones, los bloques y la descentralización de una manera fácil de entender.',
    images: ['/images/como-funciona-bitcoin-opengraph.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/como-funciona-bitcoin',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Cómo Funciona Bitcoin? La Tecnología Blockchain Explicada - Curso de Bitcoin',
    description: 'Descubre en detalle cómo funciona Bitcoin. Explicamos la tecnología blockchain, las transacciones, los bloques y la descentralización de una manera fácil de entender.',
    images: ['/images/como-funciona-bitcoin-opengraph.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComoFuncionaBitcoinLayout({ children }) {
  return <>{children}</>;
}
