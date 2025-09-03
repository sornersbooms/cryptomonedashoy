export const metadata = {
  title: 'Contratos Inteligentes: El Poder de la Automatización en Ethereum - Curso de Ethereum',
  description: 'Aprende qué son los contratos inteligentes, cómo funcionan en Ethereum y por qué están revolucionando las finanzas, los negocios y más allá con su código autoejecutante.',
  keywords: ['Contratos inteligentes', 'Smart contracts', 'Ethereum', 'Solidity', 'Automatización blockchain', 'DApps', 'Código autoejecutante', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Contratos Inteligentes: El Poder de la Automatización en Ethereum - Curso de Ethereum',
    description: 'Aprende qué son los contratos inteligentes, cómo funcionan en Ethereum y por qué están revolucionando las finanzas, los negocios y más allá con su código autoejecutante.',
    images: ['/images/blockchain-7074949_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/contratos-inteligentes',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contratos Inteligentes: El Poder de la Automatización en Ethereum - Curso de Ethereum',
    description: 'Aprende qué son los contratos inteligentes, cómo funcionan en Ethereum y por qué están revolucionando las finanzas, los negocios y más allá con su código autoejecutante.',
    images: ['/images/blockchain-7074949_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContratosInteligentesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}