export const metadata = {
  title: 'Wallets de Papel: Guía Completa - Curso de Wallets',
  description: 'Aprende sobre las wallets de papel para criptomonedas, cómo crearlas de forma segura, sus ventajas, limitaciones y mejores prácticas para su uso y almacenamiento.',
  keywords: ['wallet papel', 'paper wallet', 'monedero impreso', 'almacenamiento offline', 'cold storage', 'generador wallet papel'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Wallets de Papel: Guía Completa - Curso de Wallets',
    description: 'Aprende sobre las wallets de papel para criptomonedas, cómo crearlas de forma segura, sus ventajas, limitaciones y mejores prácticas para su uso y almacenamiento.',
    images: ['/images/paper-wallet.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallets de Papel: Guía Completa - Curso de Wallets',
    description: 'Aprende sobre las wallets de papel para criptomonedas, cómo crearlas de forma segura, sus ventajas, limitaciones y mejores prácticas para su uso y almacenamiento.',
    images: ['/images/paper-wallet.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PapelLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}