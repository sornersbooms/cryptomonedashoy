export const metadata = {
  title: '¿Qué es DeFi? Finanzas Descentralizadas Explicadas - Curso de DeFi',
  description: 'Aprende qué son las Finanzas Descentralizadas (DeFi) y cómo están revolucionando el sistema financiero tradicional. Descubre los principios, ventajas y aplicaciones de este ecosistema financiero basado en blockchain.',
  keywords: ['DeFi', 'finanzas descentralizadas', 'blockchain financiero', 'crypto finanzas', 'sistema financiero descentralizado', 'aplicaciones DeFi', 'ventajas DeFi', 'fintech blockchain'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: '¿Qué es DeFi? Finanzas Descentralizadas Explicadas - Curso de DeFi',
    description: 'Aprende qué son las Finanzas Descentralizadas (DeFi) y cómo están revolucionando el sistema financiero tradicional. Descubre los principios, ventajas y aplicaciones de este ecosistema financiero basado en blockchain.',
    images: ['/images/defi-intro.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué es DeFi? Finanzas Descentralizadas Explicadas - Curso de DeFi',
    description: 'Aprende qué son las Finanzas Descentralizadas (DeFi) y cómo están revolucionando el sistema financiero tradicional. Descubre los principios, ventajas y aplicaciones de este ecosistema financiero basado en blockchain.',
    images: ['/images/defi-intro.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function QueEsDefiLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}