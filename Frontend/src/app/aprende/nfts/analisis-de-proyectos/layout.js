
export const metadata = {
  title: 'Cómo Analizar Proyectos de NFTs: Guía de Evaluación - Curso de NFTs',
  description: 'Aprende a evaluar proyectos de NFTs antes de invertir. Descubre los factores clave a considerar: equipo, comunidad, utilidad, roadmap, volumen de ventas y más para tomar decisiones informadas.',
  keywords: ['analizar NFT', 'evaluar colecciones', 'due diligence NFT', 'inversión NFT', 'valoración NFT', 'floor price', 'volumen ventas', 'rareza NFT'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Cómo Analizar Proyectos de NFTs: Guía de Evaluación - Curso de NFTs',
    description: 'Aprende a evaluar proyectos de NFTs antes de invertir. Descubre los factores clave a considerar: equipo, comunidad, utilidad, roadmap, volumen de ventas y más para tomar decisiones informadas.',
    images: ['/images/nft-analysis.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo Analizar Proyectos de NFTs: Guía de Evaluación - Curso de NFTs',
    description: 'Aprende a evaluar proyectos de NFTs antes de invertir. Descubre los factores clave a considerar: equipo, comunidad, utilidad, roadmap, volumen de ventas y más para tomar decisiones informadas.',
    images: ['/images/nft-analysis.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AnalisisProyectosNFTLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}