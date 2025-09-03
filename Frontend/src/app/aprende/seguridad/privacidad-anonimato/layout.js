export const metadata = {
  title: 'Privacidad y Anonimato en Blockchain - Curso de Seguridad',
  description: 'Explora las consideraciones de privacidad y anonimato en blockchain. Aprende sobre monedas centradas en la privacidad, técnicas para proteger tu identidad y el equilibrio entre transparencia y confidencialidad.',
  keywords: ['privacidad blockchain', 'anonimato cripto', 'monero', 'zcash', 'mixers bitcoin', 'transacciones privadas', 'análisis cadena', 'protección identidad'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Privacidad y Anonimato en Blockchain - Curso de Seguridad',
    description: 'Explora las consideraciones de privacidad y anonimato en blockchain. Aprende sobre monedas centradas en la privacidad, técnicas para proteger tu identidad y el equilibrio entre transparencia y confidencialidad.',
    images: ['/images/blockchain-privacy.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacidad y Anonimato en Blockchain - Curso de Seguridad',
    description: 'Explora las consideraciones de privacidad y anonimato en blockchain. Aprende sobre monedas centradas en la privacidad, técnicas para proteger tu identidad y el equilibrio entre transparencia y confidencialidad.',
    images: ['/images/blockchain-privacy.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacidadAnonimatoLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}