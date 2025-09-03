export const metadata = {
  title: 'Wallets de Software: Guía Completa - Curso de Wallets',
  description: 'Explora las wallets de software para criptomonedas: aplicaciones móviles, extensiones de navegador y programas de escritorio. Conoce las mejores opciones y sus características.',
  keywords: ['wallet software', 'monedero digital', 'aplicación cripto', 'extensión wallet', 'metamask', 'trust wallet', 'exodus'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Wallets de Software: Guía Completa - Curso de Wallets',
    description: 'Explora las wallets de software para criptomonedas: aplicaciones móviles, extensiones de navegador y programas de escritorio. Conoce las mejores opciones y sus características.',
    images: ['/images/software-wallets.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallets de Software: Guía Completa - Curso de Wallets',
    description: 'Explora las wallets de software para criptomonedas: aplicaciones móviles, extensiones de navegador y programas de escritorio. Conoce las mejores opciones y sus características.',
    images: ['/images/software-wallets.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SoftwareLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}