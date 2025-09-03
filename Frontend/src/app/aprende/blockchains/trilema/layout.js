export const metadata = {
  title: 'El Trilema de la Blockchain - Curso de Blockchains',
  description: 'Comprende el famoso trilema blockchain: descentralización, seguridad y escalabilidad, y cómo diferentes proyectos intentan resolverlo.',
  keywords: ['Trilema blockchain', 'Escalabilidad', 'Descentralización', 'Seguridad', 'Vitalik Buterin', 'Soluciones escalabilidad', 'Compromiso blockchain'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'El Trilema de la Blockchain - Curso de Blockchains',
    description: 'Comprende el famoso trilema blockchain: descentralización, seguridad y escalabilidad, y cómo diferentes proyectos intentan resolverlo.',
    images: ['/images/blockchain-3041480_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/trilema',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Trilema de la Blockchain - Curso de Blockchains',
    description: 'Comprende el famoso trilema blockchain: descentralización, seguridad y escalabilidad, y cómo diferentes proyectos intentan resolverlo.',
    images: ['/images/blockchain-3041480_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TrilemaLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}