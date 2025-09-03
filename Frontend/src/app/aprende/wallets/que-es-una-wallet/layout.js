export const metadata = {
  title: '¿Qué es una Wallet? Guía Completa - Curso de Wallets',
  description: 'Aprende qué es una wallet de criptomonedas, cómo funciona y por qué es esencial para almacenar y gestionar tus activos digitales de forma segura.',
  keywords: ['wallet criptomonedas', 'monedero digital', 'billetera bitcoin', 'wallet blockchain', 'almacenamiento cripto', 'monedero virtual'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: '¿Qué es una Wallet? Guía Completa - Curso de Wallets',
    description: 'Aprende qué es una wallet de criptomonedas, cómo funciona y por qué es esencial para almacenar y gestionar tus activos digitales de forma segura.',
    images: ['/images/wallet-concept.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué es una Wallet? Guía Completa - Curso de Wallets',
    description: 'Aprende qué es una wallet de criptomonedas, cómo funciona y por qué es esencial para almacenar y gestionar tus activos digitales de forma segura.',
    images: ['/images/wallet-concept.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function QueEsUnaWalletLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}