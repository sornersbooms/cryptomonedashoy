export const metadata = {
  title: 'Historia de los NFTs: Evolución de los Tokens No Fungibles - Curso de NFTs',
  description: 'Explora la fascinante historia de los NFTs desde sus inicios hasta la actualidad. Conoce los hitos más importantes que han marcado la evolución de los tokens no fungibles.',
  keywords: ['historia NFTs', 'evolución tokens no fungibles', 'primeros NFTs', 'CryptoKitties', 'CryptoPunks', 'coleccionables blockchain', 'arte digital'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Historia de los NFTs: Evolución de los Tokens No Fungibles - Curso de NFTs',
    description: 'Explora la fascinante historia de los NFTs desde sus inicios hasta la actualidad. Conoce los hitos más importantes que han marcado la evolución de los tokens no fungibles.',
    images: ['/images/nft-history.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Historia de los NFTs: Evolución de los Tokens No Fungibles - Curso de NFTs',
    description: 'Explora la fascinante historia de los NFTs desde sus inicios hasta la actualidad. Conoce los hitos más importantes que han marcado la evolución de los tokens no fungibles.',
    images: ['/images/nft-history.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function HistoriaNFTsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}