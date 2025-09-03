export const metadata = {
  title: 'Claves Públicas y Privadas en Criptomonedas - Curso de Wallets',
  description: 'Comprende el funcionamiento de las claves públicas y privadas en las wallets de criptomonedas, su importancia para la seguridad y cómo protegerlas adecuadamente.',
  keywords: ['claves públicas', 'claves privadas', 'criptografía wallet', 'seguridad blockchain', 'par de claves cripto', 'firma digital'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Claves Públicas y Privadas en Criptomonedas - Curso de Wallets',
    description: 'Comprende el funcionamiento de las claves públicas y privadas en las wallets de criptomonedas, su importancia para la seguridad y cómo protegerlas adecuadamente.',
    images: ['/images/crypto-keys.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claves Públicas y Privadas en Criptomonedas - Curso de Wallets',
    description: 'Comprende el funcionamiento de las claves públicas y privadas en las wallets de criptomonedas, su importancia para la seguridad y cómo protegerlas adecuadamente.',
    images: ['/images/crypto-keys.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ClavesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}