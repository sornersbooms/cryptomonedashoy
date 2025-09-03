export const metadata = {
  title: 'Introducción a la Seguridad en Criptomonedas - Curso de Seguridad',
  description: 'Aprende los fundamentos de la seguridad en criptomonedas. Descubre los principios básicos, riesgos comunes y mejores prácticas para proteger tus activos digitales.',
  keywords: ['seguridad cripto', 'protección bitcoin', 'ciberseguridad blockchain', 'fundamentos seguridad', 'proteger criptomonedas', 'riesgos cripto'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Introducción a la Seguridad en Criptomonedas - Curso de Seguridad',
    description: 'Aprende los fundamentos de la seguridad en criptomonedas. Descubre los principios básicos, riesgos comunes y mejores prácticas para proteger tus activos digitales.',
    images: ['/images/crypto-security-intro.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducción a la Seguridad en Criptomonedas - Curso de Seguridad',
    description: 'Aprende los fundamentos de la seguridad en criptomonedas. Descubre los principios básicos, riesgos comunes y mejores prácticas para proteger tus activos digitales.',
    images: ['/images/crypto-security-intro.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function IntroduccionSeguridadLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}