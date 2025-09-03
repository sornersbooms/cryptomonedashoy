
export const metadata = {
  title: 'El Futuro de Bitcoin: ¿Qué le Espera a la Criptomoneda Líder? - Curso de Bitcoin',
  description: 'Analizamos el futuro de Bitcoin, sus desafíos y oportunidades. Descubre las tendencias, las innovaciones y el potencial a largo plazo de la criptomoneda más importante.',
  keywords: ['Futuro de Bitcoin', 'Predicciones Bitcoin', 'Innovaciones en Bitcoin', 'Escalabilidad de Bitcoin', 'Adopción de Bitcoin'],
  authors: [{ name: 'CryptomonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'El Futuro de Bitcoin: ¿Qué le Espera a la Criptomoneda Líder? - Curso de Bitcoin',
    description: 'Analizamos el futuro de Bitcoin, sus desafíos y oportunidades. Descubre las tendencias, las innovaciones y el potencial a largo plazo de la criptomoneda más importante.',
    images: ['/images/futuro-de-bitcoin-opengraph.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/futuro-de-bitcoin',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Futuro de Bitcoin: ¿Qué le Espera a la Criptomoneda Líder? - Curso de Bitcoin',
    description: 'Analizamos el futuro de Bitcoin, sus desafíos y oportunidades. Descubre las tendencias, las innovaciones y el potencial a largo plazo de la criptomoneda más importante.',
    images: ['/images/futuro-de-bitcoin-opengraph.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FuturoDeBitcoinLayout({ children }) {
  return <>{children}</>;
}
