export const metadata = {
  title: 'Gestión de Claves Privadas y Semillas - Curso de Seguridad',
  description: 'Aprende las mejores prácticas para gestionar claves privadas y frases semilla. Descubre métodos seguros de almacenamiento, respaldo y recuperación para proteger tus criptomonedas.',
  keywords: ['gestión claves privadas', 'seed phrase seguridad', 'almacenar claves cripto', 'backup frase semilla', 'proteger private key', 'recuperación wallet', 'mnemónico seguro'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Gestión de Claves Privadas y Semillas - Curso de Seguridad',
    description: 'Aprende las mejores prácticas para gestionar claves privadas y frases semilla. Descubre métodos seguros de almacenamiento, respaldo y recuperación para proteger tus criptomonedas.',
    images: ['/images/key-management.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestión de Claves Privadas y Semillas - Curso de Seguridad',
    description: 'Aprende las mejores prácticas para gestionar claves privadas y frases semilla. Descubre métodos seguros de almacenamiento, respaldo y recuperación para proteger tus criptomonedas.',
    images: ['/images/key-management.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function GestionClavesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}