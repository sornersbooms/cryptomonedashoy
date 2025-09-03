export const metadata = {
  title: 'Impuestos sobre Criptomonedas - Curso de Trading',
  description: 'Comprende los aspectos fiscales del trading de criptomonedas. Aprende sobre la declaración de ganancias, pérdidas, minería, staking y otras actividades crypto, así como herramientas para el seguimiento fiscal.',
  keywords: ['impuestos criptomonedas', 'fiscalidad bitcoin', 'declaración de criptomonedas', 'ganancias de capital', 'hacienda', 'trading', 'seguimiento fiscal'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Impuestos sobre Criptomonedas - Curso de Trading',
    description: 'Comprende los aspectos fiscales del trading de criptomonedas. Aprende sobre la declaración de ganancias, pérdidas, minería, staking y otras actividades crypto, así como herramientas para el seguimiento fiscal.',
    images: ['/images/impuestos-crypto.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impuestos sobre Criptomonedas - Curso de Trading',
    description: 'Comprende los aspectos fiscales del trading de criptomonedas. Aprende sobre la declaración de ganancias, pérdidas, minería, staking y otras actividades crypto, así como herramientas para el seguimiento fiscal.',
    images: ['/images/impuestos-crypto.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ImpuestosCryptoLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}