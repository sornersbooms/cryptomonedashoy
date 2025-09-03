export const metadata = {
  title: 'La Historia del Dinero: Desde el Trueque a las Criptomonedas - Curso de Bitcoin',
  description: 'Un recorrido fascinante por la historia de cómo las personas han usado el dinero, desde el trueque hasta las monedas digitales como Bitcoin. Comprende la evolución que nos trajo a este punto.',
  keywords: ['Historia del dinero', 'Evolución del dinero', 'Trueque', 'Monedas fiduciarias', 'Oro', 'Bitcoin', 'Criptomonedas', 'cryptomonedas hoy'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'La Historia del Dinero: Desde el Trueque a las Criptomonedas - Curso de Bitcoin',
    description: 'Un recorrido fascinante por la historia de cómo las personas han usado el dinero, desde el trueque hasta las monedas digitales como Bitcoin. Comprende la evolución que nos trajo a este punto.',
    images: ['/images/blockchain-3041480_1280.jpg'], // Puedes usar una imagen relevante para la lección
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/historia-del-dinero',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Historia del Dinero: Desde el Trueque a las Criptomonedas - Curso de Bitcoin',
    description: 'Un recorrido fascinante por la historia de cómo las personas han usado el dinero, desde el trueque hasta las monedas digitales como Bitcoin. Comprende la evolución que nos trajo a este punto.',
    images: ['/images/blockchain-3041480_1280.jpg'], // Mismo que openGraph
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HistoriaDelDineroLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}