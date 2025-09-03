export const metadata = {
  title: 'Identificando Estafas y Proyectos Maliciosos en Cripto - Curso de Seguridad',
  description: 'Aprende a identificar estafas y proyectos maliciosos en el ecosistema cripto. Descubre las señales de alerta, esquemas Ponzi, tokens fraudulentos y técnicas para verificar la legitimidad.',
  keywords: ['estafas cripto', 'proyectos maliciosos', 'scam token', 'esquema ponzi', 'pump and dump', 'ICO fraudulenta', 'señales alerta', 'verificar proyecto'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Identificando Estafas y Proyectos Maliciosos en Cripto - Curso de Seguridad',
    description: 'Aprende a identificar estafas y proyectos maliciosos en el ecosistema cripto. Descubre las señales de alerta, esquemas Ponzi, tokens fraudulentos y técnicas para verificar la legitimidad.',
    images: ['/images/crypto-scams.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Identificando Estafas y Proyectos Maliciosos en Cripto - Curso de Seguridad',
    description: 'Aprende a identificar estafas y proyectos maliciosos en el ecosistema cripto. Descubre las señales de alerta, esquemas Ponzi, tokens fraudulentos y técnicas para verificar la legitimidad.',
    images: ['/images/crypto-scams.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function IdentificandoEstafasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}