
export const metadata = {
  title: 'Propiedad Digital: Cómo Funcionan los Derechos en NFTs - Curso de NFTs',
  description: 'Descubre cómo los NFTs están redefiniendo la propiedad digital. Aprende sobre los derechos que otorgan los tokens no fungibles y cómo se verifica la autenticidad en blockchain.',
  keywords: ['propiedad digital', 'derechos NFT', 'autenticidad blockchain', 'activos digitales', 'verificación propiedad', 'tokens no fungibles', 'derechos de autor'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Propiedad Digital: Cómo Funcionan los Derechos en NFTs - Curso de NFTs',
    description: 'Descubre cómo los NFTs están redefiniendo la propiedad digital. Aprende sobre los derechos que otorgan los tokens no fungibles y cómo se verifica la autenticidad en blockchain.',
    images: ['/images/digital-ownership.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Propiedad Digital: Cómo Funcionan los Derechos en NFTs - Curso de NFTs',
    description: 'Descubre cómo los NFTs están redefiniendo la propiedad digital. Aprende sobre los derechos que otorgan los tokens no fungibles y cómo se verifica la autenticidad en blockchain.',
    images: ['/images/digital-ownership.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PropiedadDigitalLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}