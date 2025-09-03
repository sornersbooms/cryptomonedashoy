export const metadata = {
  title: 'Velas Japonesas en Trading de Criptomonedas - Curso de Trading',
  description: 'Domina la interpretación de velas japonesas en el trading de criptomonedas. Aprende a identificar patrones de velas y a utilizarlos para predecir movimientos de precios en el mercado.',
  keywords: ['velas japonesas', 'patrones de velas', 'análisis técnico', 'trading de criptomonedas', 'candlesticks', 'interpretación de velas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Velas Japonesas en Trading de Criptomonedas - Curso de Trading',
    description: 'Domina la interpretación de velas japonesas en el trading de criptomonedas. Aprende a identificar patrones de velas y a utilizarlos para predecir movimientos de precios en el mercado.',
    images: ['/images/velas-japonesas.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velas Japonesas en Trading de Criptomonedas - Curso de Trading',
    description: 'Domina la interpretación de velas japonesas en el trading de criptomonedas. Aprende a identificar patrones de velas y a utilizarlos para predecir movimientos de precios en el mercado.',
    images: ['/images/velas-japonesas.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function VelasJaponesasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}