export const metadata = {
  title: 'Futuro y Desafíos de Blockchain - Curso de Blockchains',
  description: 'Analiza los desafíos actuales de la tecnología blockchain, las tendencias emergentes y cómo podría evolucionar en los próximos años.',
  keywords: ['Futuro blockchain', 'Desafíos blockchain', 'Tendencias blockchain', 'Adopción masiva', 'Regulación', 'Blockchain 3.0', 'Innovación blockchain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Futuro y Desafíos de Blockchain - Curso de Blockchains',
    description: 'Analiza los desafíos actuales de la tecnología blockchain, las tendencias emergentes y cómo podría evolucionar en los próximos años.',
    images: ['/images/blockchain-9268421_1280.png'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/futuro',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Futuro y Desafíos de Blockchain - Curso de Blockchains',
    description: 'Analiza los desafíos actuales de la tecnología blockchain, las tendencias emergentes y cómo podría evolucionar en los próximos años.',
    images: ['/images/blockchain-9268421_1280.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FuturoLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}