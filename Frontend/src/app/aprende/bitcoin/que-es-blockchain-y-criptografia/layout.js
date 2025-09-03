export const metadata = {
  title: 'Blockchain y Criptografía: El Corazón de Bitcoin - Curso de Bitcoin',
  description: 'Descubre cómo la Blockchain y la Criptografía son los pilares fundamentales de Bitcoin. Aprende sobre el libro de contabilidad público y las claves públicas/privadas.',
  keywords: ['Blockchain', 'Criptografía', 'Bitcoin tecnología', 'Libro de contabilidad distribuido', 'Claves públicas', 'Claves privadas', 'Seguridad Bitcoin'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Blockchain y Criptografía: El Corazón de Bitcoin - Curso de Bitcoin',
    description: 'Descubre cómo la Blockchain y la Criptografía son los pilares fundamentales de Bitcoin. Aprende sobre el libro de contabilidad público y las claves públicas/privadas.',
    images: ['/images/blockchain-3368174_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/que-es-blockchain-y-criptografia',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain y Criptografía: El Corazón de Bitcoin - Curso de Bitcoin',
    description: 'Descubre cómo la Blockchain y la Criptografía son los pilares fundamentales de Bitcoin. Aprende sobre el libro de contabilidad público y las claves públicas/privadas.',
    images: ['/images/blockchain-3368174_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlockchainCriptografiaLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}