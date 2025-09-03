export const metadata = {
  title: 'Indicadores: RSI y MACD - Curso de Trading de Criptomonedas',
  description: 'Domina el uso de los indicadores RSI y MACD en el trading de criptomonedas. Aprende a identificar condiciones de sobrecompra/sobreventa, divergencias y señales de entrada/salida para mejorar tus operaciones.',
  keywords: ['RSI', 'MACD', 'indicadores técnicos', 'análisis técnico', 'trading de criptomonedas', 'sobrecompra', 'sobreventa', 'divergencias'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Indicadores: RSI y MACD - Curso de Trading de Criptomonedas',
    description: 'Domina el uso de los indicadores RSI y MACD en el trading de criptomonedas. Aprende a identificar condiciones de sobrecompra/sobreventa, divergencias y señales de entrada/salida para mejorar tus operaciones.',
    images: ['/images/rsi-macd.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indicadores: RSI y MACD - Curso de Trading de Criptomonedas',
    description: 'Domina el uso de los indicadores RSI y MACD en el trading de criptomonedas. Aprende a identificar condiciones de sobrecompra/sobreventa, divergencias y señales de entrada/salida para mejorar tus operaciones.',
    images: ['/images/rsi-macd.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RsiMacdLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}