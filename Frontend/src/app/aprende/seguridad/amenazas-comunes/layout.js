export const metadata = {
  title: 'Amenazas Comunes y Vectores de Ataque en Criptomonedas - Curso de Seguridad',
  description: 'Conoce las amenazas más comunes y vectores de ataque en el ecosistema cripto. Aprende a identificar riesgos como phishing, malware, ataques de fuerza bruta y más.',
  keywords: ['amenazas cripto', 'vectores ataque blockchain', 'phishing bitcoin', 'malware criptomonedas', 'hackeo wallet', 'ataques 51%', 'seguridad blockchain'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Amenazas Comunes y Vectores de Ataque en Criptomonedas - Curso de Seguridad',
    description: 'Conoce las amenazas más comunes y vectores de ataque en el ecosistema cripto. Aprende a identificar riesgos como phishing, malware, ataques de fuerza bruta y más.',
    images: ['/images/crypto-threats.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amenazas Comunes y Vectores de Ataque en Criptomonedas - Curso de Seguridad',
    description: 'Conoce las amenazas más comunes y vectores de ataque en el ecosistema cripto. Aprende a identificar riesgos como phishing, malware, ataques de fuerza bruta y más.',
    images: ['/images/crypto-threats.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AmenazasComunesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}