export const metadata = {
  title: 'Aplicación: Criptomonedas - Curso de Blockchains',
  description: 'Explora cómo las criptomonedas son la aplicación más conocida de blockchain, sus características, tipos, diferencias y evolución en el ecosistema.',
  keywords: ['Criptomonedas', 'Aplicaciones blockchain', 'Bitcoin', 'Altcoins', 'Stablecoins', 'Tokens', 'Monedas digitales'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Aplicación: Criptomonedas - Curso de Blockchains',
    description: 'Explora cómo las criptomonedas son la aplicación más conocida de blockchain, sus características, tipos, diferencias y evolución en el ecosistema.',
    images: ['/images/cryptocurrency-3423263_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/app-criptomonedas',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplicación: Criptomonedas - Curso de Blockchains',
    description: 'Explora cómo las criptomonedas son la aplicación más conocida de blockchain, sus características, tipos, diferencias y evolución en el ecosistema.',
    images: ['/images/cryptocurrency-3423263_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AppCriptomonedasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}