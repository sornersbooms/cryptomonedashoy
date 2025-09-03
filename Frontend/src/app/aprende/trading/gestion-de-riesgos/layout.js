export const metadata = {
  title: 'Gestión de Riesgos en Trading - Curso de Trading de Criptomonedas',
  description: 'Aprende a gestionar el riesgo en el trading de criptomonedas. Descubre estrategias de sizing de posición, stop-loss, take-profit y diversificación para proteger tu capital y maximizar tus ganancias a largo plazo.',
  keywords: ['gestión de riesgos', 'risk management', 'sizing de posición', 'stop-loss', 'take-profit', 'diversificación', 'trading de criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Gestión de Riesgos en Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende a gestionar el riesgo en el trading de criptomonedas. Descubre estrategias de sizing de posición, stop-loss, take-profit y diversificación para proteger tu capital y maximizar tus ganancias a largo plazo.',
    images: ['/images/gestion-riesgos.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestión de Riesgos en Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende a gestionar el riesgo en el trading de criptomonedas. Descubre estrategias de sizing de posición, stop-loss, take-profit y diversificación para proteger tu capital y maximizar tus ganancias a largo plazo.',
    images: ['/images/gestion-riesgos.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function GestionRiesgosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}