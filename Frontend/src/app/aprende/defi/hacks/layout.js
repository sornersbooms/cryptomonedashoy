export const metadata = {
  title: 'Riesgos: Hacks y Exploits en DeFi - Curso de DeFi',
  description: 'Analiza los principales riesgos de seguridad en el ecosistema DeFi. Aprende sobre ataques comunes, vulnerabilidades de contratos inteligentes, casos históricos de hacks y cómo proteger tus inversiones en finanzas descentralizadas.',
  keywords: ['hacks DeFi', 'exploits smart contracts', 'seguridad blockchain', 'ataques flash loan', 'reentrancy', 'vulnerabilidades código', 'auditorías seguridad', 'protección fondos DeFi'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Riesgos: Hacks y Exploits en DeFi - Curso de DeFi',
    description: 'Analiza los principales riesgos de seguridad en el ecosistema DeFi. Aprende sobre ataques comunes, vulnerabilidades de contratos inteligentes, casos históricos de hacks y cómo proteger tus inversiones en finanzas descentralizadas.',
    images: ['/images/defi-security.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riesgos: Hacks y Exploits en DeFi - Curso de DeFi',
    description: 'Analiza los principales riesgos de seguridad en el ecosistema DeFi. Aprende sobre ataques comunes, vulnerabilidades de contratos inteligentes, casos históricos de hacks y cómo proteger tus inversiones en finanzas descentralizadas.',
    images: ['/images/defi-security.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function HacksExploitsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}