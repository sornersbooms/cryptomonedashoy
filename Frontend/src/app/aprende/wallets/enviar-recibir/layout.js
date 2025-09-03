export const metadata = {
  title: 'Enviando y Recibiendo Criptomonedas - Curso de Wallets',
  description: 'Aprende a enviar y recibir criptomonedas de forma segura. Guía paso a paso sobre direcciones, confirmaciones, tarifas de red y cómo evitar errores comunes en las transacciones.',
  keywords: ['enviar cripto', 'recibir bitcoin', 'transacciones wallet', 'dirección wallet', 'confirmaciones blockchain', 'tarifas transacción', 'transferir criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Enviando y Recibiendo Criptomonedas - Curso de Wallets',
    description: 'Aprende a enviar y recibir criptomonedas de forma segura. Guía paso a paso sobre direcciones, confirmaciones, tarifas de red y cómo evitar errores comunes en las transacciones.',
    images: ['/images/send-receive-crypto.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enviando y Recibiendo Criptomonedas - Curso de Wallets',
    description: 'Aprende a enviar y recibir criptomonedas de forma segura. Guía paso a paso sobre direcciones, confirmaciones, tarifas de red y cómo evitar errores comunes en las transacciones.',
    images: ['/images/send-receive-crypto.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function EnviarRecibirLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}