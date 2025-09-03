export const metadata = {
  title: 'Tipos de Órdenes en Trading de Criptomonedas - Curso de Trading',
  description: 'Aprende sobre los diferentes tipos de órdenes en el trading de criptomonedas: órdenes de mercado, límite, stop-loss, y más. Domina las herramientas básicas para ejecutar operaciones efectivas.',
  keywords: ['órdenes de trading', 'órdenes de mercado', 'órdenes límite', 'stop-loss', 'take-profit', 'trading de criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Tipos de Órdenes en Trading de Criptomonedas - Curso de Trading',
    description: 'Aprende sobre los diferentes tipos de órdenes en el trading de criptomonedas: órdenes de mercado, límite, stop-loss, y más. Domina las herramientas básicas para ejecutar operaciones efectivas.',
    images: ['/images/tipos-ordenes.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tipos de Órdenes en Trading de Criptomonedas - Curso de Trading',
    description: 'Aprende sobre los diferentes tipos de órdenes en el trading de criptomonedas: órdenes de mercado, límite, stop-loss, y más. Domina las herramientas básicas para ejecutar operaciones efectivas.',
    images: ['/images/tipos-ordenes.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function OrdenesTradingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}