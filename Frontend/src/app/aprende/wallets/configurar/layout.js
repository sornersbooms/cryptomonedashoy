export const metadata = {
  title: 'Configurando tu Primera Wallet: Guía Paso a Paso - Curso de Wallets',
  description: 'Tutorial completo para configurar tu primera wallet de criptomonedas. Aprende a instalar, crear una nueva wallet, hacer backup de tu seed phrase y configurar opciones de seguridad.',
  keywords: ['configurar wallet', 'instalar monedero', 'crear wallet', 'tutorial wallet', 'primera wallet', 'setup wallet cripto', 'backup seed'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Configurando tu Primera Wallet: Guía Paso a Paso - Curso de Wallets',
    description: 'Tutorial completo para configurar tu primera wallet de criptomonedas. Aprende a instalar, crear una nueva wallet, hacer backup de tu seed phrase y configurar opciones de seguridad.',
    images: ['/images/setup-wallet.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Configurando tu Primera Wallet: Guía Paso a Paso - Curso de Wallets',
    description: 'Tutorial completo para configurar tu primera wallet de criptomonedas. Aprende a instalar, crear una nueva wallet, hacer backup de tu seed phrase y configurar opciones de seguridad.',
    images: ['/images/setup-wallet.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ConfigurarLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}