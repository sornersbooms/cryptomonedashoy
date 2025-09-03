export const metadata = {
  title: 'El Futuro de las Wallets: Tendencias y Evolución - Curso de Wallets',
  description: 'Explora las tendencias emergentes y el futuro de las wallets de criptomonedas. Innovaciones tecnológicas, integración con identidad digital, interoperabilidad y nuevos paradigmas de seguridad.',
  keywords: ['futuro wallets', 'evolución monederos', 'wallet social', 'smart wallet', 'identidad blockchain', 'interoperabilidad cripto', 'wallets web3'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'El Futuro de las Wallets: Tendencias y Evolución - Curso de Wallets',
    description: 'Explora las tendencias emergentes y el futuro de las wallets de criptomonedas. Innovaciones tecnológicas, integración con identidad digital, interoperabilidad y nuevos paradigmas de seguridad.',
    images: ['/images/future-wallets.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Futuro de las Wallets: Tendencias y Evolución - Curso de Wallets',
    description: 'Explora las tendencias emergentes y el futuro de las wallets de criptomonedas. Innovaciones tecnológicas, integración con identidad digital, interoperabilidad y nuevos paradigmas de seguridad.',
    images: ['/images/future-wallets.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function FuturoLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}