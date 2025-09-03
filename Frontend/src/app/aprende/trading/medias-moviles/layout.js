export const metadata = {
  title: 'Indicadores: Medias Móviles - Curso de Trading de Criptomonedas',
  description: 'Aprende a utilizar las medias móviles en el trading de criptomonedas. Descubre cómo estos indicadores pueden ayudarte a identificar tendencias, niveles de soporte/resistencia y señales de compra/venta.',
  keywords: ['medias móviles', 'indicadores técnicos', 'SMA', 'EMA', 'análisis técnico', 'trading de criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Indicadores: Medias Móviles - Curso de Trading de Criptomonedas',
    description: 'Aprende a utilizar las medias móviles en el trading de criptomonedas. Descubre cómo estos indicadores pueden ayudarte a identificar tendencias, niveles de soporte/resistencia y señales de compra/venta.',
    images: ['/images/medias-moviles.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indicadores: Medias Móviles - Curso de Trading de Criptomonedas',
    description: 'Aprende a utilizar las medias móviles en el trading de criptomonedas. Descubre cómo estos indicadores pueden ayudarte a identificar tendencias, niveles de soporte/resistencia y señales de compra/venta.',
    images: ['/images/medias-moviles.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function MediasMovilesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}