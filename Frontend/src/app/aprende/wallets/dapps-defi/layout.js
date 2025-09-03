export const metadata = {
  title: 'Integración de Wallets con DApps y DeFi - Curso de Wallets',
  description: 'Aprende a conectar tu wallet con aplicaciones descentralizadas (DApps) y plataformas DeFi. Guía paso a paso, consideraciones de seguridad y mejores prácticas.',
  keywords: ['wallet dapps', 'conectar defi', 'web3 wallet', 'metamask dapp', 'wallet connect', 'interactuar smart contracts', 'finanzas descentralizadas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Integración de Wallets con DApps y DeFi - Curso de Wallets',
    description: 'Aprende a conectar tu wallet con aplicaciones descentralizadas (DApps) y plataformas DeFi. Guía paso a paso, consideraciones de seguridad y mejores prácticas.',
    images: ['/images/wallet-dapps.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integración de Wallets con DApps y DeFi - Curso de Wallets',
    description: 'Aprende a conectar tu wallet con aplicaciones descentralizadas (DApps) y plataformas DeFi. Guía paso a paso, consideraciones de seguridad y mejores prácticas.',
    images: ['/images/wallet-dapps.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function DappsDefiLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}