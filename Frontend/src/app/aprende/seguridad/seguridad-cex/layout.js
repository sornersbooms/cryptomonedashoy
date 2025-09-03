export const metadata = {
  title: 'Seguridad en Exchanges Centralizados (CEX) - Curso de Seguridad',
  description: 'Aprende a proteger tus activos en exchanges centralizados. Descubre las medidas de seguridad que debes implementar, cómo evaluar la seguridad de un exchange y minimizar riesgos.',
  keywords: ['seguridad exchange', 'protección CEX', 'exchange centralizado', 'binance seguridad', 'coinbase protección', 'hackeo exchange', 'not your keys'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Seguridad en Exchanges Centralizados (CEX) - Curso de Seguridad',
    description: 'Aprende a proteger tus activos en exchanges centralizados. Descubre las medidas de seguridad que debes implementar, cómo evaluar la seguridad de un exchange y minimizar riesgos.',
    images: ['/images/cex-security.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguridad en Exchanges Centralizados (CEX) - Curso de Seguridad',
    description: 'Aprende a proteger tus activos en exchanges centralizados. Descubre las medidas de seguridad que debes implementar, cómo evaluar la seguridad de un exchange y minimizar riesgos.',
    images: ['/images/cex-security.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SeguridadCEXLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}