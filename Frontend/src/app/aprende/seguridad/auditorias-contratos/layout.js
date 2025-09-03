export const metadata = {
  title: 'Auditorías de Contratos Inteligentes - Curso de Seguridad',
  description: 'Comprende la importancia de las auditorías de contratos inteligentes. Aprende sobre el proceso de auditoría, vulnerabilidades comunes, firmas auditoras reconocidas y cómo interpretar informes.',
  keywords: ['auditoría smart contract', 'seguridad contratos inteligentes', 'vulnerabilidades solidity', 'OpenZeppelin', 'CertiK', 'Trail of Bits', 'bug bounty', 'verificación código'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Auditorías de Contratos Inteligentes - Curso de Seguridad',
    description: 'Comprende la importancia de las auditorías de contratos inteligentes. Aprende sobre el proceso de auditoría, vulnerabilidades comunes, firmas auditoras reconocidas y cómo interpretar informes.',
    images: ['/images/smart-contract-audit.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auditorías de Contratos Inteligentes - Curso de Seguridad',
    description: 'Comprende la importancia de las auditorías de contratos inteligentes. Aprende sobre el proceso de auditoría, vulnerabilidades comunes, firmas auditoras reconocidas y cómo interpretar informes.',
    images: ['/images/smart-contract-audit.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AuditoriasContratosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}