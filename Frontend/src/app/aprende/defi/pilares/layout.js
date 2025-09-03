export const metadata = {
  title: 'Pilares de DeFi: Fundamentos de las Finanzas Descentralizadas - Curso de DeFi',
  description: 'Explora los pilares fundamentales que sostienen el ecosistema DeFi. Comprende la transparencia, interoperabilidad, accesibilidad y composabilidad que hacen posible las finanzas descentralizadas.',
  keywords: ['pilares DeFi', 'fundamentos finanzas descentralizadas', 'transparencia blockchain', 'interoperabilidad DeFi', 'composabilidad', 'money legos', 'accesibilidad financiera', 'código abierto finanzas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Pilares de DeFi: Fundamentos de las Finanzas Descentralizadas - Curso de DeFi',
    description: 'Explora los pilares fundamentales que sostienen el ecosistema DeFi. Comprende la transparencia, interoperabilidad, accesibilidad y composabilidad que hacen posible las finanzas descentralizadas.',
    images: ['/images/defi-pillars.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilares de DeFi: Fundamentos de las Finanzas Descentralizadas - Curso de DeFi',
    description: 'Explora los pilares fundamentales que sostienen el ecosistema DeFi. Comprende la transparencia, interoperabilidad, accesibilidad y composabilidad que hacen posible las finanzas descentralizadas.',
    images: ['/images/defi-pillars.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PilaresDeFiLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}