export const metadata = {
  title: 'Anatomía de una Transacción en Ethereum - Curso de Ethereum',
  description: 'Explora en detalle cómo funciona una transacción en Ethereum, desde su creación hasta su confirmación en la blockchain, incluyendo nonces, firmas y gas.',
  keywords: ['Transacción Ethereum', 'Nonce', 'Gas limit', 'Gas price', 'Firma digital', 'Confirmaciones Ethereum', 'Mempool', 'Cryptomonedas Hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Anatomía de una Transacción en Ethereum - Curso de Ethereum',
    description: 'Explora en detalle cómo funciona una transacción en Ethereum, desde su creación hasta su confirmación en la blockchain, incluyendo nonces, firmas y gas.',
    images: ['/images/cryptocurrency-3423263_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/ethereum/anatomia-de-una-transaccion',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anatomía de una Transacción en Ethereum - Curso de Ethereum',
    description: 'Explora en detalle cómo funciona una transacción en Ethereum, desde su creación hasta su confirmación en la blockchain, incluyendo nonces, firmas y gas.',
    images: ['/images/cryptocurrency-3423263_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AnatomiaTransaccionLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}