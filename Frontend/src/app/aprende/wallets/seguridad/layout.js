export const metadata = {
  title: 'Seguridad de la Wallet: Protege tus Criptomonedas - Curso de Wallets',
  description: 'Aprende las mejores prácticas de seguridad para proteger tu wallet de criptomonedas. Medidas esenciales, configuraciones recomendadas y hábitos para evitar hackeos y robos.',
  keywords: ['seguridad wallet', 'proteger criptomonedas', '2FA', 'contraseña segura', 'phishing cripto', 'hackeo wallet', 'protección monedero'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Seguridad de la Wallet: Protege tus Criptomonedas - Curso de Wallets',
    description: 'Aprende las mejores prácticas de seguridad para proteger tu wallet de criptomonedas. Medidas esenciales, configuraciones recomendadas y hábitos para evitar hackeos y robos.',
    images: ['/images/wallet-security.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguridad de la Wallet: Protege tus Criptomonedas - Curso de Wallets',
    description: 'Aprende las mejores prácticas de seguridad para proteger tu wallet de criptomonedas. Medidas esenciales, configuraciones recomendadas y hábitos para evitar hackeos y robos.',
    images: ['/images/wallet-security.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SeguridadLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}