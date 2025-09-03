export const metadata = {
  title: 'Creando un Plan de Trading - Curso de Trading de Criptomonedas',
  description: 'Aprende a desarrollar un plan de trading efectivo para criptomonedas. Descubre cómo definir objetivos, estrategias, gestión de riesgo, reglas de entrada/salida y métricas de rendimiento para operar con consistencia.',
  keywords: ['plan de trading', 'estrategia de trading', 'objetivos de trading', 'reglas de trading', 'gestión de riesgo', 'criptomonedas', 'disciplina'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Creando un Plan de Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende a desarrollar un plan de trading efectivo para criptomonedas. Descubre cómo definir objetivos, estrategias, gestión de riesgo, reglas de entrada/salida y métricas de rendimiento para operar con consistencia.',
    images: ['/images/plan-trading.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creando un Plan de Trading - Curso de Trading de Criptomonedas',
    description: 'Aprende a desarrollar un plan de trading efectivo para criptomonedas. Descubre cómo definir objetivos, estrategias, gestión de riesgo, reglas de entrada/salida y métricas de rendimiento para operar con consistencia.',
    images: ['/images/plan-trading.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PlanTradingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}