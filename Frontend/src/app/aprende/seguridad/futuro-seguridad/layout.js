export const metadata = {
  title: 'El Futuro de la Seguridad en Criptomonedas - Curso de Seguridad',
  description: 'Explora las tendencias emergentes y el futuro de la seguridad en criptomonedas. Descubre tecnologías prometedoras, desafíos anticipados y cómo la seguridad evolucionará en el ecosistema blockchain.',
  keywords: ['futuro seguridad cripto', 'tendencias ciberseguridad blockchain', 'quantum computing', 'biometría wallet', 'MPC', 'seguridad web3', 'evolución protección', 'zero-knowledge proofs'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'El Futuro de la Seguridad en Criptomonedas - Curso de Seguridad',
    description: 'Explora las tendencias emergentes y el futuro de la seguridad en criptomonedas. Descubre tecnologías prometedoras, desafíos anticipados y cómo la seguridad evolucionará en el ecosistema blockchain.',
    images: ['/images/future-security.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Futuro de la Seguridad en Criptomonedas - Curso de Seguridad',
    description: 'Explora las tendencias emergentes y el futuro de la seguridad en criptomonedas. Descubre tecnologías prometedoras, desafíos anticipados y cómo la seguridad evolucionará en el ecosistema blockchain.',
    images: ['/images/future-security.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function FuturoSeguridadLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}