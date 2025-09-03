export const metadata = {
  title: 'Análisis Fundamental en Criptomonedas - Curso de Trading',
  description: 'Aprende a realizar análisis fundamental en el mercado de criptomonedas. Descubre cómo evaluar proyectos, equipos, tecnología, casos de uso y otros factores clave para tomar decisiones de inversión informadas.',
  keywords: ['análisis fundamental', 'valoración de criptomonedas', 'evaluación de proyectos', 'métricas fundamentales', 'trading de criptomonedas', 'inversión'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Análisis Fundamental en Criptomonedas - Curso de Trading',
    description: 'Aprende a realizar análisis fundamental en el mercado de criptomonedas. Descubre cómo evaluar proyectos, equipos, tecnología, casos de uso y otros factores clave para tomar decisiones de inversión informadas.',
    images: ['/images/analisis-fundamental.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Análisis Fundamental en Criptomonedas - Curso de Trading',
    description: 'Aprende a realizar análisis fundamental en el mercado de criptomonedas. Descubre cómo evaluar proyectos, equipos, tecnología, casos de uso y otros factores clave para tomar decisiones de inversión informadas.',
    images: ['/images/analisis-fundamental.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AnalisisFundamentalLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}