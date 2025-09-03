export const metadata = {
  title: 'Regulación y Futuro de DeFi: Desafíos y Oportunidades - Curso de DeFi',
  description: 'Analiza el panorama regulatorio actual y futuro de las finanzas descentralizadas. Comprende los desafíos legales, las tendencias emergentes y cómo DeFi podría evolucionar para integrarse con el sistema financiero tradicional.',
  keywords: ['regulación DeFi', 'futuro finanzas descentralizadas', 'cumplimiento normativo', 'KYC/AML en DeFi', 'institucionalización', 'DeFi 2.0', 'tendencias finanzas blockchain', 'integración TradFi'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Regulación y Futuro de DeFi: Desafíos y Oportunidades - Curso de DeFi',
    description: 'Analiza el panorama regulatorio actual y futuro de las finanzas descentralizadas. Comprende los desafíos legales, las tendencias emergentes y cómo DeFi podría evolucionar para integrarse con el sistema financiero tradicional.',
    images: ['/images/defi-future.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regulación y Futuro de DeFi: Desafíos y Oportunidades - Curso de DeFi',
    description: 'Analiza el panorama regulatorio actual y futuro de las finanzas descentralizadas. Comprende los desafíos legales, las tendencias emergentes y cómo DeFi podría evolucionar para integrarse con el sistema financiero tradicional.',
    images: ['/images/defi-future.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RegulacionLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}