export const metadata = {
  title: 'El Problema de los Generales Bizantinos - Curso de Blockchains',
  description: 'Comprende el famoso problema de consenso distribuido que blockchain resuelve: el Problema de los Generales Bizantinos y su importancia en sistemas descentralizados.',
  keywords: ['Generales Bizantinos', 'Consenso distribuido', 'Tolerancia a fallos', 'Problema bizantino', 'Blockchain consenso', 'Sistemas distribuidos'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'El Problema de los Generales Bizantinos - Curso de Blockchains',
    description: 'Comprende el famoso problema de consenso distribuido que blockchain resuelve: el Problema de los Generales Bizantinos y su importancia en sistemas descentralizados.',
    images: ['/images/blockchain-3041480_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/blockchains/el-problema-de-los-generales-bizantinos',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Problema de los Generales Bizantinos - Curso de Blockchains',
    description: 'Comprende el famoso problema de consenso distribuido que blockchain resuelve: el Problema de los Generales Bizantinos y su importancia en sistemas descentralizados.',
    images: ['/images/blockchain-3041480_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GeneralesBizantinosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}