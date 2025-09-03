export const metadata = {
  title: 'Gobernanza y Tokens DAO: Democracia Financiera - Curso de DeFi',
  description: 'Explora cómo funciona la gobernanza descentralizada en DeFi. Aprende sobre tokens de gobernanza, propuestas, votaciones y cómo los usuarios pueden participar en la toma de decisiones de los protocolos financieros.',
  keywords: ['gobernanza DeFi', 'tokens DAO', 'votación on-chain', 'propuestas protocolo', 'Compound', 'Uniswap', 'MakerDAO', 'democracia blockchain', 'delegación votos'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Gobernanza y Tokens DAO: Democracia Financiera - Curso de DeFi',
    description: 'Explora cómo funciona la gobernanza descentralizada en DeFi. Aprende sobre tokens de gobernanza, propuestas, votaciones y cómo los usuarios pueden participar en la toma de decisiones de los protocolos financieros.',
    images: ['/images/defi-governance.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gobernanza y Tokens DAO: Democracia Financiera - Curso de DeFi',
    description: 'Explora cómo funciona la gobernanza descentralizada en DeFi. Aprende sobre tokens de gobernanza, propuestas, votaciones y cómo los usuarios pueden participar en la toma de decisiones de los protocolos financieros.',
    images: ['/images/defi-governance.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function GobernanzaLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}