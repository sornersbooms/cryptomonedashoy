export const metadata = {
  title: 'Construyendo un Portfolio DeFi: Estrategias de Inversión - Curso de DeFi',
  description: 'Aprende a construir y gestionar un portfolio diversificado en DeFi. Descubre estrategias para diferentes perfiles de riesgo, cómo balancear tus inversiones entre protocolos y redes, y técnicas para optimizar rendimientos mientras minimizas riesgos.',
  keywords: ['portfolio DeFi', 'estrategia inversión cripto', 'diversificación DeFi', 'gestión riesgos', 'asignación activos', 'rebalanceo portfolio', 'inversión pasiva', 'inversión activa DeFi'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Construyendo un Portfolio DeFi: Estrategias de Inversión - Curso de DeFi',
    description: 'Aprende a construir y gestionar un portfolio diversificado en DeFi. Descubre estrategias para diferentes perfiles de riesgo, cómo balancear tus inversiones entre protocolos y redes, y técnicas para optimizar rendimientos mientras minimizas riesgos.',
    images: ['/images/defi-portfolio.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construyendo un Portfolio DeFi: Estrategias de Inversión - Curso de DeFi',
    description: 'Aprende a construir y gestionar un portfolio diversificado en DeFi. Descubre estrategias para diferentes perfiles de riesgo, cómo balancear tus inversiones entre protocolos y redes, y técnicas para optimizar rendimientos mientras minimizas riesgos.',
    images: ['/images/defi-portfolio.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PortfolioLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}