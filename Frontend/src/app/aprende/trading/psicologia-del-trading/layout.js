export const metadata = {
  title: 'Psicología del Trading - Curso de Trading de Criptomonedas',
  description: 'Domina el aspecto psicológico del trading de criptomonedas. Aprende a controlar emociones como miedo y codicia, desarrollar disciplina, mantener una mentalidad adecuada y superar sesgos cognitivos para mejorar tus resultados.',
  keywords: ['psicología del trading', 'emociones en trading', 'miedo y codicia', 'disciplina', 'mentalidad de trader', 'sesgos cognitivos', 'trading de criptomonedas'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Psicología del Trading - Curso de Trading de Criptomonedas',
    description: 'Domina el aspecto psicológico del trading de criptomonedas. Aprende a controlar emociones como miedo y codicia, desarrollar disciplina, mantener una mentalidad adecuada y superar sesgos cognitivos para mejorar tus resultados.',
    images: ['/images/psicologia-trading.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicología del Trading - Curso de Trading de Criptomonedas',
    description: 'Domina el aspecto psicológico del trading de criptomonedas. Aprende a controlar emociones como miedo y codicia, desarrollar disciplina, mantener una mentalidad adecuada y superar sesgos cognitivos para mejorar tus resultados.',
    images: ['/images/psicologia-trading.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PsicologiaTradingLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}