export const metadata = {
  title: 'Trading con Apalancamiento - Curso de Trading de Criptomonedas',
  description: 'Aprende a utilizar el apalancamiento en el trading de criptomonedas de manera responsable. Descubre cómo funcionan los futuros, perpetuales, margin trading y los riesgos asociados a estas operaciones.',
  keywords: ['apalancamiento', 'leverage', 'futuros', 'perpetuales', 'margin trading', 'liquidación', 'gestión de riesgos', 'criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Trading con Apalancamiento - Curso de Trading de Criptomonedas',
    description: 'Aprende a utilizar el apalancamiento en el trading de criptomonedas de manera responsable. Descubre cómo funcionan los futuros, perpetuales, margin trading y los riesgos asociados a estas operaciones.',
    images: ['/images/apalancamiento.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trading con Apalancamiento - Curso de Trading de Criptomonedas',
    description: 'Aprende a utilizar el apalancamiento en el trading de criptomonedas de manera responsable. Descubre cómo funcionan los futuros, perpetuales, margin trading y los riesgos asociados a estas operaciones.',
    images: ['/images/apalancamiento.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TradingApalancamientoLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}