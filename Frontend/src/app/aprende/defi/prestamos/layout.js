export const metadata = {
  title: 'Préstamos Descentralizados: Finanzas Sin Intermediarios - Curso de DeFi',
  description: 'Explora cómo funcionan los préstamos descentralizados en DeFi. Aprende sobre protocolos de préstamo, colateralización, liquidaciones y cómo puedes convertirte en prestamista o prestatario sin intermediarios tradicionales.',
  keywords: ['préstamos DeFi', 'lending descentralizado', 'Aave', 'Compound', 'colateralización cripto', 'liquidaciones DeFi', 'interés variable', 'préstamos flash'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Préstamos Descentralizados: Finanzas Sin Intermediarios - Curso de DeFi',
    description: 'Explora cómo funcionan los préstamos descentralizados en DeFi. Aprende sobre protocolos de préstamo, colateralización, liquidaciones y cómo puedes convertirte en prestamista o prestatario sin intermediarios tradicionales.',
    images: ['/images/defi-lending.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Préstamos Descentralizados: Finanzas Sin Intermediarios - Curso de DeFi',
    description: 'Explora cómo funcionan los préstamos descentralizados en DeFi. Aprende sobre protocolos de préstamo, colateralización, liquidaciones y cómo puedes convertirte en prestamista o prestatario sin intermediarios tradicionales.',
    images: ['/images/defi-lending.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrestamosDescentralizadosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}