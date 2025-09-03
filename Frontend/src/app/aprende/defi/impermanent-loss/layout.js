export const metadata = {
  title: 'Riesgos: Impermanent Loss en DeFi - Curso de DeFi',
  description: 'Comprende qué es la pérdida impermanente y cómo afecta a los proveedores de liquidez en DeFi. Aprende a calcularla, estrategias para mitigarla y cómo evaluar si proporcionar liquidez es rentable a pesar de este riesgo.',
  keywords: ['impermanent loss', 'pérdida impermanente', 'riesgo AMM', 'proveedor de liquidez', 'divergencia de precios', 'IL calculator', 'mitigación IL', 'pools estables', 'rangos concentrados'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Riesgos: Impermanent Loss en DeFi - Curso de DeFi',
    description: 'Comprende qué es la pérdida impermanente y cómo afecta a los proveedores de liquidez en DeFi. Aprende a calcularla, estrategias para mitigarla y cómo evaluar si proporcionar liquidez es rentable a pesar de este riesgo.',
    images: ['/images/impermanent-loss.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riesgos: Impermanent Loss en DeFi - Curso de DeFi',
    description: 'Comprende qué es la pérdida impermanente y cómo afecta a los proveedores de liquidez en DeFi. Aprende a calcularla, estrategias para mitigarla y cómo evaluar si proporcionar liquidez es rentable a pesar de este riesgo.',
    images: ['/images/impermanent-loss.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ImpermanentLossLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}