export const metadata = {
  title: 'Criptografía Esencial para Blockchain - Curso de Blockchains',
  description: 'Aprende los conceptos criptográficos fundamentales que hacen posible la tecnología blockchain: hashes, firmas digitales, claves públicas y privadas.',
  keywords: ['Criptografía', 'Hash SHA-256', 'Firmas digitales', 'Criptografía asimétrica', 'Claves públicas', 'Claves privadas', 'Seguridad blockchain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Criptografía Esencial para Blockchain - Curso de Blockchains',
    description: 'Aprende los conceptos criptográficos fundamentales que hacen posible la tecnología blockchain: hashes, firmas digitales, claves públicas y privadas.',
    images: ['/images/blockchain-7074949_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/criptografia-esencial',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Criptografía Esencial para Blockchain - Curso de Blockchains',
    description: 'Aprende los conceptos criptográficos fundamentales que hacen posible la tecnología blockchain: hashes, firmas digitales, claves públicas y privadas.',
    images: ['/images/blockchain-7074949_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CriptografiaEsencialLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}