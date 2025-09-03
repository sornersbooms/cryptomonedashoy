export const metadata = {
  title: 'Legislación y Cumplimiento Normativo en Criptomonedas - Curso de Seguridad',
  description: 'Comprende el panorama legal y regulatorio de las criptomonedas. Aprende sobre KYC/AML, implicaciones fiscales, regulaciones por países y cómo mantenerte en cumplimiento.',
  keywords: ['legislación cripto', 'regulación bitcoin', 'KYC', 'AML', 'impuestos criptomonedas', 'cumplimiento normativo', 'legalidad blockchain', 'FATF'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Legislación y Cumplimiento Normativo en Criptomonedas - Curso de Seguridad',
    description: 'Comprende el panorama legal y regulatorio de las criptomonedas. Aprende sobre KYC/AML, implicaciones fiscales, regulaciones por países y cómo mantenerte en cumplimiento.',
    images: ['/images/crypto-regulation.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legislación y Cumplimiento Normativo en Criptomonedas - Curso de Seguridad',
    description: 'Comprende el panorama legal y regulatorio de las criptomonedas. Aprende sobre KYC/AML, implicaciones fiscales, regulaciones por países y cómo mantenerte en cumplimiento.',
    images: ['/images/crypto-regulation.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function LegislacionCumplimientoLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}