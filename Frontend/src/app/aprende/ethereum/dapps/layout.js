export const metadata = {
  title: 'DApps: Aplicaciones Descentralizadas en Ethereum - Curso de Ethereum',
  description: 'Explora qué son las DApps (aplicaciones descentralizadas), cómo funcionan en Ethereum, sus ventajas frente a las apps tradicionales y los casos de uso más populares.',
  keywords: ['DApps', 'Aplicaciones descentralizadas', 'Web3', 'Frontend blockchain', 'Backend blockchain', 'Casos de uso DApps', 'Ethereum', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'DApps: Aplicaciones Descentralizadas en Ethereum - Curso de Ethereum',
    description: 'Explora qué son las DApps (aplicaciones descentralizadas), cómo funcionan en Ethereum, sus ventajas frente a las apps tradicionales y los casos de uso más populares.',
    images: ['/images/crypto-7678815_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/dapps',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DApps: Aplicaciones Descentralizadas en Ethereum - Curso de Ethereum',
    description: 'Explora qué son las DApps (aplicaciones descentralizadas), cómo funcionan en Ethereum, sus ventajas frente a las apps tradicionales y los casos de uso más populares.',
    images: ['/images/crypto-7678815_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DAppsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}