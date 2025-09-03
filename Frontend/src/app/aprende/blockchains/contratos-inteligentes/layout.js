export const metadata = {
  title: 'Contratos Inteligentes - Curso de Blockchains',
  description: 'Explora qué son los contratos inteligentes, cómo funcionan, sus aplicaciones, limitaciones y su papel fundamental en la evolución de blockchain.',
  keywords: ['Contratos inteligentes', 'Smart contracts', 'Código autoejecutado', 'Solidity', 'Aplicaciones contratos', 'DApps', 'Automatización blockchain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Contratos Inteligentes - Curso de Blockchains',
    description: 'Explora qué son los contratos inteligentes, cómo funcionan, sus aplicaciones, limitaciones y su papel fundamental en la evolución de blockchain.',
    images: ['/images/ethereum-6928106_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/contratos-inteligentes',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contratos Inteligentes - Curso de Blockchains',
    description: 'Explora qué son los contratos inteligentes, cómo funcionan, sus aplicaciones, limitaciones y su papel fundamental en la evolución de blockchain.',
    images: ['/images/ethereum-6928106_1280.jpg'],
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