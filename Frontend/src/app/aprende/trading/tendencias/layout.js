export const metadata = {
  title: 'Líneas de Tendencia en Trading - Curso de Trading de Criptomonedas',
  description: 'Domina el uso de líneas de tendencia en el trading de criptomonedas. Aprende a identificar tendencias alcistas, bajistas y laterales, y cómo utilizarlas para mejorar tus estrategias de trading.',
  keywords: ['líneas de tendencia', 'tendencias en trading', 'tendencia alcista', 'tendencia bajista', 'análisis técnico', 'trading de criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Líneas de Tendencia en Trading - Curso de Trading de Criptomonedas',
    description: 'Domina el uso de líneas de tendencia en el trading de criptomonedas. Aprende a identificar tendencias alcistas, bajistas y laterales, y cómo utilizarlas para mejorar tus estrategias de trading.',
    images: ['/images/lineas-tendencia.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Líneas de Tendencia en Trading - Curso de Trading de Criptomonedas',
    description: 'Domina el uso de líneas de tendencia en el trading de criptomonedas. Aprende a identificar tendencias alcistas, bajistas y laterales, y cómo utilizarlas para mejorar tus estrategias de trading.',
    images: ['/images/lineas-tendencia.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TendenciasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}