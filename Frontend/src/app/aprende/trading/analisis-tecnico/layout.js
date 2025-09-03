export const metadata = {
  title: 'Análisis Técnico: Gráficos - Curso de Trading de Criptomonedas',
  description: 'Aprende los fundamentos del análisis técnico y cómo interpretar gráficos en el trading de criptomonedas. Descubre los diferentes tipos de gráficos y cómo utilizarlos para tomar decisiones informadas.',
  keywords: ['análisis técnico', 'gráficos de trading', 'gráficos de velas', 'gráficos de líneas', 'trading de criptomonedas', 'interpretación de gráficos'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Análisis Técnico: Gráficos - Curso de Trading de Criptomonedas',
    description: 'Aprende los fundamentos del análisis técnico y cómo interpretar gráficos en el trading de criptomonedas. Descubre los diferentes tipos de gráficos y cómo utilizarlos para tomar decisiones informadas.',
    images: ['/images/analisis-tecnico.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Análisis Técnico: Gráficos - Curso de Trading de Criptomonedas',
    description: 'Aprende los fundamentos del análisis técnico y cómo interpretar gráficos en el trading de criptomonedas. Descubre los diferentes tipos de gráficos y cómo utilizarlos para tomar decisiones informadas.',
    images: ['/images/analisis-tecnico.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AnalisisTecnicoLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}