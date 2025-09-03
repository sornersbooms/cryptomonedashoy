export const metadata = {
  title: 'Mercados: CEX vs. DEX - Curso de Trading de Criptomonedas',
  description: 'Comprende las diferencias entre exchanges centralizados (CEX) y descentralizados (DEX). Aprende las ventajas, desventajas y cómo operar en cada tipo de mercado de criptomonedas.',
  keywords: ['CEX', 'DEX', 'exchanges centralizados', 'exchanges descentralizados', 'mercados de criptomonedas', 'trading'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Mercados: CEX vs. DEX - Curso de Trading de Criptomonedas',
    description: 'Comprende las diferencias entre exchanges centralizados (CEX) y descentralizados (DEX). Aprende las ventajas, desventajas y cómo operar en cada tipo de mercado de criptomonedas.',
    images: ['/images/cex-vs-dex.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercados: CEX vs. DEX - Curso de Trading de Criptomonedas',
    description: 'Comprende las diferencias entre exchanges centralizados (CEX) y descentralizados (DEX). Aprende las ventajas, desventajas y cómo operar en cada tipo de mercado de criptomonedas.',
    images: ['/images/cex-vs-dex.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function MercadosTradingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}