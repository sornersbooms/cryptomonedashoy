export const metadata = {
  title: 'Tokenomics: Economía de Tokens - Curso de Trading de Criptomonedas',
  description: 'Comprende la importancia de la tokenomics en el análisis de criptomonedas. Aprende a evaluar suministro, distribución, inflación, quema de tokens y otros factores económicos que afectan el valor a largo plazo.',
  keywords: ['tokenomics', 'economía de tokens', 'suministro de tokens', 'distribución de tokens', 'inflación', 'quema de tokens', 'análisis fundamental', 'criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Tokenomics: Economía de Tokens - Curso de Trading de Criptomonedas',
    description: 'Comprende la importancia de la tokenomics en el análisis de criptomonedas. Aprende a evaluar suministro, distribución, inflación, quema de tokens y otros factores económicos que afectan el valor a largo plazo.',
    images: ['/images/tokenomics.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenomics: Economía de Tokens - Curso de Trading de Criptomonedas',
    description: 'Comprende la importancia de la tokenomics en el análisis de criptomonedas. Aprende a evaluar suministro, distribución, inflación, quema de tokens y otros factores económicos que afectan el valor a largo plazo.',
    images: ['/images/tokenomics.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TokenomicsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}