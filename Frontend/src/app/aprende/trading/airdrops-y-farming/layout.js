export const metadata = {
  title: 'Airdrops y Farming - Curso de Trading de Criptomonedas',
  description: 'Aprende a identificar y participar en airdrops y farming de criptomonedas. Descubre estrategias para maximizar recompensas, evaluar proyectos legítimos y evitar estafas en la búsqueda de tokens gratuitos.',
  keywords: ['airdrops', 'farming', 'yield farming', 'tokens gratuitos', 'recompensas crypto', 'criptomonedas', 'DeFi'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Airdrops y Farming - Curso de Trading de Criptomonedas',
    description: 'Aprende a identificar y participar en airdrops y farming de criptomonedas. Descubre estrategias para maximizar recompensas, evaluar proyectos legítimos y evitar estafas en la búsqueda de tokens gratuitos.',
    images: ['/images/airdrops-farming.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airdrops y Farming - Curso de Trading de Criptomonedas',
    description: 'Aprende a identificar y participar en airdrops y farming de criptomonedas. Descubre estrategias para maximizar recompensas, evaluar proyectos legítimos y evitar estafas en la búsqueda de tokens gratuitos.',
    images: ['/images/airdrops-farming.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AirdropsFarmingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}