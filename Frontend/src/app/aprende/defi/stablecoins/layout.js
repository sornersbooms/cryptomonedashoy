export const metadata = {
  title: 'Stablecoins: El Pilar de la Estabilidad en DeFi - Curso de DeFi',
  description: 'Descubre qué son las stablecoins y su papel crucial en el ecosistema DeFi. Aprende sobre los diferentes tipos de monedas estables, sus mecanismos de estabilidad y cómo proporcionan un valor constante en el volátil mundo cripto.',
  keywords: ['stablecoins', 'monedas estables', 'USDT', 'USDC', 'DAI', 'stablecoins algorítmicas', 'stablecoins colateralizadas', 'estabilidad cripto', 'valor constante blockchain'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Stablecoins: El Pilar de la Estabilidad en DeFi - Curso de DeFi',
    description: 'Descubre qué son las stablecoins y su papel crucial en el ecosistema DeFi. Aprende sobre los diferentes tipos de monedas estables, sus mecanismos de estabilidad y cómo proporcionan un valor constante en el volátil mundo cripto.',
    images: ['/images/stablecoins.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stablecoins: El Pilar de la Estabilidad en DeFi - Curso de DeFi',
    description: 'Descubre qué son las stablecoins y su papel crucial en el ecosistema DeFi. Aprende sobre los diferentes tipos de monedas estables, sus mecanismos de estabilidad y cómo proporcionan un valor constante en el volátil mundo cripto.',
    images: ['/images/stablecoins.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function StablecoinsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}