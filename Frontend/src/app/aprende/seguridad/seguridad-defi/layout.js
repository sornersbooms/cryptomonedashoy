export const metadata = {
  title: 'Seguridad en Finanzas Descentralizadas (DeFi) - Curso de Seguridad',
  description: 'Descubre cómo proteger tus activos en plataformas DeFi. Aprende sobre riesgos específicos como exploits de contratos, rug pulls, flash loans y estrategias para minimizar pérdidas.',
  keywords: ['seguridad DeFi', 'protección finanzas descentralizadas', 'smart contract seguridad', 'rug pull', 'flash loan attack', 'auditoría DeFi', 'riesgos yield farming'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Seguridad en Finanzas Descentralizadas (DeFi) - Curso de Seguridad',
    description: 'Descubre cómo proteger tus activos en plataformas DeFi. Aprende sobre riesgos específicos como exploits de contratos, rug pulls, flash loans y estrategias para minimizar pérdidas.',
    images: ['/images/defi-security.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguridad en Finanzas Descentralizadas (DeFi) - Curso de Seguridad',
    description: 'Descubre cómo proteger tus activos en plataformas DeFi. Aprende sobre riesgos específicos como exploits de contratos, rug pulls, flash loans y estrategias para minimizar pérdidas.',
    images: ['/images/defi-security.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SeguridadDeFiLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}