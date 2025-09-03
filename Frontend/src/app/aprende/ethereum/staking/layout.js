export const metadata = {
  title: 'Staking en Ethereum: Gana Recompensas Asegurando la Red - Curso de Ethereum',
  description: 'Aprende sobre el staking en Ethereum, cómo funciona el Proof of Stake, las diferentes formas de participar y las recompensas que puedes obtener por asegurar la red.',
  keywords: ['Staking Ethereum', 'Proof of Stake', 'Validadores', 'ETH 2.0', 'Recompensas staking', 'Staking pools', 'Liquid staking', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Staking en Ethereum: Gana Recompensas Asegurando la Red - Curso de Ethereum',
    description: 'Aprende sobre el staking en Ethereum, cómo funciona el Proof of Stake, las diferentes formas de participar y las recompensas que puedes obtener por asegurar la red.',
    images: ['/images/cryptocurrency-3412307_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/staking',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Staking en Ethereum: Gana Recompensas Asegurando la Red - Curso de Ethereum',
    description: 'Aprende sobre el staking en Ethereum, cómo funciona el Proof of Stake, las diferentes formas de participar y las recompensas que puedes obtener por asegurar la red.',
    images: ['/images/cryptocurrency-3412307_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function StakingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}