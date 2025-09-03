export const metadata = {
  title: 'Mitos y Realidades de Bitcoin: Separando la Señal del Ruido - Curso de Bitcoin',
  description: 'Desmiente los mitos más comunes sobre Bitcoin: su uso en actividades ilegales, su falta de respaldo, el consumo energético y si es una burbuja. Descubre la verdad detrás de las narrativas.',
  keywords: ['Mitos Bitcoin', 'Realidades Bitcoin', 'Bitcoin ilegal', 'Valor Bitcoin', 'Consumo energético Bitcoin', 'Burbuja Bitcoin', 'Pseudonimato Bitcoin'],
  authors: [{ name: 'CryptoMonedasHoy.com', url: 'https://cryptomonedashoy.com' }],
  openGraph: {
    title: 'Mitos y Realidades de Bitcoin: Separando la Señal del Ruido - Curso de Bitcoin',
    description: 'Desmiente los mitos más comunes sobre Bitcoin: su uso en actividades ilegales, su falta de respaldo, el consumo energético y si es una burbuja. Descubre la verdad detrás de las narrativas.',
    images: ['/images/bitcoin-4503758_1280.jpg'],
    url: 'https://cryptomonedashoy.com/aprende/bitcoin/mitos-y-realidades',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitos y Realidades de Bitcoin: Separando la Señal del Ruido - Curso de Bitcoin',
    description: 'Desmiente los mitos más comunes sobre Bitcoin: su uso en actividades ilegales, su falta de respaldo, el consumo energético y si es una burbuja. Descubre la verdad detrás de las narrativas.',
    images: ['/images/bitcoin-4503758_1280.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MitosRealidadesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}