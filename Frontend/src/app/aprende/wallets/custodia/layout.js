export const metadata = {
  title: 'Wallets de Custodia vs. No Custodia - Curso de Wallets',
  description: 'Comprende las diferencias entre wallets custodiales y no custodiales. Descubre quién controla tus claves privadas, ventajas, desventajas y cuál es la mejor opción para ti.',
  keywords: ['wallet custodia', 'wallet no custodia', 'custodial', 'non-custodial', 'control claves', 'not your keys not your coins', 'exchange wallet'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Wallets de Custodia vs. No Custodia - Curso de Wallets',
    description: 'Comprende las diferencias entre wallets custodiales y no custodiales. Descubre quién controla tus claves privadas, ventajas, desventajas y cuál es la mejor opción para ti.',
    images: ['/images/custody-wallets.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallets de Custodia vs. No Custodia - Curso de Wallets',
    description: 'Comprende las diferencias entre wallets custodiales y no custodiales. Descubre quién controla tus claves privadas, ventajas, desventajas y cuál es la mejor opción para ti.',
    images: ['/images/custody-wallets.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function CustodiaLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}