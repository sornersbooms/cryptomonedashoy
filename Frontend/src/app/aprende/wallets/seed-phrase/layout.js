export const metadata = {
  title: 'Semilla de Recuperación (Seed Phrase): Guía Completa - Curso de Wallets',
  description: 'Descubre qué es una seed phrase o frase semilla, cómo funciona para recuperar tus criptomonedas y las mejores prácticas para protegerla de forma segura.',
  keywords: ['seed phrase', 'frase semilla', 'palabras de recuperación', 'mnemónico', 'respaldo wallet', 'BIP39', 'recuperación cripto'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Semilla de Recuperación (Seed Phrase): Guía Completa - Curso de Wallets',
    description: 'Descubre qué es una seed phrase o frase semilla, cómo funciona para recuperar tus criptomonedas y las mejores prácticas para protegerla de forma segura.',
    images: ['/images/seed-phrase.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semilla de Recuperación (Seed Phrase): Guía Completa - Curso de Wallets',
    description: 'Descubre qué es una seed phrase o frase semilla, cómo funciona para recuperar tus criptomonedas y las mejores prácticas para protegerla de forma segura.',
    images: ['/images/seed-phrase.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SeedPhraseLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}