export const metadata = {
  title: 'Copias de Seguridad y Planes de Recuperación - Curso de Seguridad',
  description: 'Aprende a crear copias de seguridad efectivas y planes de recuperación para tus activos cripto. Descubre estrategias para diferentes escenarios, almacenamiento seguro y protocolos de herencia.',
  keywords: ['backup cripto', 'copia seguridad wallet', 'plan recuperación', 'respaldo seed phrase', 'almacenamiento seguro', 'herencia bitcoin', 'recuperación desastre'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Copias de Seguridad y Planes de Recuperación - Curso de Seguridad',
    description: 'Aprende a crear copias de seguridad efectivas y planes de recuperación para tus activos cripto. Descubre estrategias para diferentes escenarios, almacenamiento seguro y protocolos de herencia.',
    images: ['/images/crypto-backup.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copias de Seguridad y Planes de Recuperación - Curso de Seguridad',
    description: 'Aprende a crear copias de seguridad efectivas y planes de recuperación para tus activos cripto. Descubre estrategias para diferentes escenarios, almacenamiento seguro y protocolos de herencia.',
    images: ['/images/crypto-backup.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function CopiasRecuperacionLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}