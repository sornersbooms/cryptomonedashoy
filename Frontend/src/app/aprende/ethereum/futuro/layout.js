export const metadata = {
  title: 'El Futuro de Ethereum: Visión y Hoja de Ruta - Curso de Ethereum',
  description: 'Explora el futuro de Ethereum, las próximas actualizaciones como Sharding, los desafíos que enfrenta y cómo planea mantener su posición como la principal plataforma blockchain.',
  keywords: ['Futuro Ethereum', 'Ethereum roadmap', 'Sharding', 'Escalabilidad', 'Ethereum 2.0', 'Actualizaciones Ethereum', 'Competencia blockchain', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'El Futuro de Ethereum: Visión y Hoja de Ruta - Curso de Ethereum',
    description: 'Explora el futuro de Ethereum, las próximas actualizaciones como Sharding, los desafíos que enfrenta y cómo planea mantener su posición como la principal plataforma blockchain.',
    images: ['/images/wear-3080558_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/futuro',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Futuro de Ethereum: Visión y Hoja de Ruta - Curso de Ethereum',
    description: 'Explora el futuro de Ethereum, las próximas actualizaciones como Sharding, los desafíos que enfrenta y cómo planea mantener su posición como la principal plataforma blockchain.',
    images: ['/images/wear-3080558_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FuturoEthereumLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}