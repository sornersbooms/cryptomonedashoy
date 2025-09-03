export const metadata = {
  title: 'Phishing y Ataques de Ingeniería Social en Cripto - Curso de Seguridad',
  description: 'Aprende a identificar y evitar ataques de phishing e ingeniería social en el mundo cripto. Descubre las técnicas más comunes utilizadas por estafadores y cómo protegerte.',
  keywords: ['phishing cripto', 'ingeniería social blockchain', 'estafas bitcoin', 'correos falsos', 'sitios web fraudulentos', 'suplantación identidad', 'scam cripto'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Phishing y Ataques de Ingeniería Social en Cripto - Curso de Seguridad',
    description: 'Aprende a identificar y evitar ataques de phishing e ingeniería social en el mundo cripto. Descubre las técnicas más comunes utilizadas por estafadores y cómo protegerte.',
    images: ['/images/crypto-phishing.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phishing y Ataques de Ingeniería Social en Cripto - Curso de Seguridad',
    description: 'Aprende a identificar y evitar ataques de phishing e ingeniería social en el mundo cripto. Descubre las técnicas más comunes utilizadas por estafadores y cómo protegerte.',
    images: ['/images/crypto-phishing.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PhishingIngenieriaSocialLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}