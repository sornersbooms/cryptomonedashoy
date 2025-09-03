export const metadata = {
  title: 'Copias de Seguridad y Recuperación de Wallets - Curso de Wallets',
  description: 'Guía completa sobre cómo hacer copias de seguridad de tu wallet y recuperar tus criptomonedas. Métodos de backup, almacenamiento seguro y procedimientos de recuperación.',
  keywords: ['backup wallet', 'recuperar wallet', 'copia seguridad cripto', 'restaurar monedero', 'recuperación seed phrase', 'backup seguro', 'respaldo wallet'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Copias de Seguridad y Recuperación de Wallets - Curso de Wallets',
    description: 'Guía completa sobre cómo hacer copias de seguridad de tu wallet y recuperar tus criptomonedas. Métodos de backup, almacenamiento seguro y procedimientos de recuperación.',
    images: ['/images/wallet-backup.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copias de Seguridad y Recuperación de Wallets - Curso de Wallets',
    description: 'Guía completa sobre cómo hacer copias de seguridad de tu wallet y recuperar tus criptomonedas. Métodos de backup, almacenamiento seguro y procedimientos de recuperación.',
    images: ['/images/wallet-backup.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function BackupRecuperacionLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}