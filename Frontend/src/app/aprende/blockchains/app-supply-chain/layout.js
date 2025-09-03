export const metadata = {
  title: 'Aplicación: Blockchain en Cadena de Suministro - Curso de Blockchains',
  description: 'Conoce cómo blockchain está transformando la gestión de cadenas de suministro con trazabilidad, transparencia y eficiencia en diversas industrias.',
  keywords: ['Blockchain supply chain', 'Cadena de suministro', 'Trazabilidad', 'Logística blockchain', 'Transparencia', 'Casos de uso empresarial', 'IBM Food Trust'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Aplicación: Blockchain en Cadena de Suministro - Curso de Blockchains',
    description: 'Conoce cómo blockchain está transformando la gestión de cadenas de suministro con trazabilidad, transparencia y eficiencia en diversas industrias.',
    images: ['/images/work-1627703_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/app-supply-chain',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplicación: Blockchain en Cadena de Suministro - Curso de Blockchains',
    description: 'Conoce cómo blockchain está transformando la gestión de cadenas de suministro con trazabilidad, transparencia y eficiencia en diversas industrias.',
    images: ['/images/work-1627703_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AppSupplyChainLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}