export const metadata = {
  title: 'Tarifas de Transacción (Gas) en Criptomonedas - Curso de Wallets',
  description: 'Comprende las tarifas de transacción (gas) en criptomonedas. Aprende cómo funcionan, por qué varían, cómo optimizarlas y estrategias para ahorrar en comisiones.',
  keywords: ['gas fee', 'tarifas transacción', 'comisiones cripto', 'gas ethereum', 'fee bitcoin', 'optimizar gas', 'ahorrar comisiones'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Tarifas de Transacción (Gas) en Criptomonedas - Curso de Wallets',
    description: 'Comprende las tarifas de transacción (gas) en criptomonedas. Aprende cómo funcionan, por qué varían, cómo optimizarlas y estrategias para ahorrar en comisiones.',
    images: ['/images/gas-fees.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarifas de Transacción (Gas) en Criptomonedas - Curso de Wallets',
    description: 'Comprende las tarifas de transacción (gas) en criptomonedas. Aprende cómo funcionan, por qué varían, cómo optimizarlas y estrategias para ahorrar en comisiones.',
    images: ['/images/gas-fees.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TarifasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}