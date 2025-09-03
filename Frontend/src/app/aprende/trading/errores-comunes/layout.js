export const metadata = {
  title: 'Errores Comunes a Evitar en Trading - Curso de Trading de Criptomonedas',
  description: 'Identifica y evita los errores más comunes en el trading de criptomonedas. Aprende de los fallos típicos de principiantes y traders experimentados para mejorar tus resultados y proteger tu capital.',
  keywords: ['errores de trading', 'errores comunes', 'fallos de principiantes', 'psicología de trading', 'gestión de riesgo', 'criptomonedas', 'lecciones de trading'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Errores Comunes a Evitar en Trading - Curso de Trading de Criptomonedas',
    description: 'Identifica y evita los errores más comunes en el trading de criptomonedas. Aprende de los fallos típicos de principiantes y traders experimentados para mejorar tus resultados y proteger tu capital.',
    images: ['/images/errores-trading.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Errores Comunes a Evitar en Trading - Curso de Trading de Criptomonedas',
    description: 'Identifica y evita los errores más comunes en el trading de criptomonedas. Aprende de los fallos típicos de principiantes y traders experimentados para mejorar tus resultados y proteger tu capital.',
    images: ['/images/errores-trading.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ErroresComunesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}