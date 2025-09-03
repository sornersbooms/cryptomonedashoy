export const metadata = {
  title: 'Interoperabilidad entre Blockchains - Curso de Blockchains',
  description: 'Explora cómo diferentes blockchains pueden comunicarse entre sí, las soluciones de interoperabilidad y proyectos que están construyendo puentes entre cadenas.',
  keywords: ['Interoperabilidad blockchain', 'Cross-chain', 'Puentes blockchain', 'Polkadot', 'Cosmos', 'Comunicación entre cadenas', 'Multichain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Interoperabilidad entre Blockchains - Curso de Blockchains',
    description: 'Explora cómo diferentes blockchains pueden comunicarse entre sí, las soluciones de interoperabilidad y proyectos que están construyendo puentes entre cadenas.',
    images: ['/images/blockchain-7074949_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/interoperabilidad',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interoperabilidad entre Blockchains - Curso de Blockchains',
    description: 'Explora cómo diferentes blockchains pueden comunicarse entre sí, las soluciones de interoperabilidad y proyectos que están construyendo puentes entre cadenas.',
    images: ['/images/blockchain-7074949_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InteroperabilidadLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}