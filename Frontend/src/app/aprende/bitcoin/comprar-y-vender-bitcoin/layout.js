
export const metadata = {
  title: 'Cómo Comprar y Vender Bitcoin de Forma Segura - Curso de Bitcoin',
  description: 'Aprende paso a paso cómo comprar y vender Bitcoin. Te guiamos a través de los exchanges, las billeteras y las mejores prácticas para operar de forma segura.',
  keywords: ['Comprar Bitcoin', 'Vender Bitcoin', 'Exchanges de criptomonedas', 'Billeteras Bitcoin', 'Invertir en Bitcoin'],
  authors: [{ name: 'CryptomonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Cómo Comprar y Vender Bitcoin de Forma Segura - Curso de Bitcoin',
    description: 'Aprende paso a paso cómo comprar y vender Bitcoin. Te guiamos a través de los exchanges, las billeteras y las mejores prácticas para operar de forma segura.',
    images: ['/images/comprar-vender-bitcoin-opengraph.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/comprar-y-vender-bitcoin',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo Comprar y Vender Bitcoin de Forma Segura - Curso de Bitcoin',
    description: 'Aprende paso a paso cómo comprar y vender Bitcoin. Te guiamos a través de los exchanges, las billeteras y las mejores prácticas para operar de forma segura.',
    images: ['/images/comprar-vender-bitcoin-opengraph.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComprarVenderBitcoinLayout({ children }) {
  return <>{children}</>;
}
