export const metadata = {
  title: 'Cómo Elegir la Wallet Correcta - Curso de Wallets',
  description: 'Guía para seleccionar la wallet de criptomonedas ideal según tus necesidades. Factores a considerar: seguridad, facilidad de uso, compatibilidad con criptomonedas y más.',
  keywords: ['elegir wallet', 'comparativa monederos', 'mejor wallet cripto', 'seleccionar wallet', 'wallet para principiantes', 'wallet para inversores'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Cómo Elegir la Wallet Correcta - Curso de Wallets',
    description: 'Guía para seleccionar la wallet de criptomonedas ideal según tus necesidades. Factores a considerar: seguridad, facilidad de uso, compatibilidad con criptomonedas y más.',
    images: ['/images/choose-wallet.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo Elegir la Wallet Correcta - Curso de Wallets',
    description: 'Guía para seleccionar la wallet de criptomonedas ideal según tus necesidades. Factores a considerar: seguridad, facilidad de uso, compatibilidad con criptomonedas y más.',
    images: ['/images/choose-wallet.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ElegirLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}