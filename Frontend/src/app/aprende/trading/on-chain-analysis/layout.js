export const metadata = {
  title: 'On-Chain Analysis - Curso de Trading de Criptomonedas',
  description: 'Aprende a utilizar el análisis on-chain para el trading de criptomonedas. Descubre cómo interpretar datos de la blockchain como flujos de exchanges, actividad de ballenas, métricas de red y más para obtener ventaja en el mercado.',
  keywords: ['análisis on-chain', 'métricas blockchain', 'flujos de exchanges', 'actividad de ballenas', 'indicadores on-chain', 'criptomonedas', 'bitcoin'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'On-Chain Analysis - Curso de Trading de Criptomonedas',
    description: 'Aprende a utilizar el análisis on-chain para el trading de criptomonedas. Descubre cómo interpretar datos de la blockchain como flujos de exchanges, actividad de ballenas, métricas de red y más para obtener ventaja en el mercado.',
    images: ['/images/on-chain-analysis.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On-Chain Analysis - Curso de Trading de Criptomonedas',
    description: 'Aprende a utilizar el análisis on-chain para el trading de criptomonedas. Descubre cómo interpretar datos de la blockchain como flujos de exchanges, actividad de ballenas, métricas de red y más para obtener ventaja en el mercado.',
    images: ['/images/on-chain-analysis.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function OnChainAnalysisLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}