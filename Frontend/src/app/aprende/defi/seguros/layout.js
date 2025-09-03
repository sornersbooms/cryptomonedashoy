export const metadata = {
  title: 'Seguros Descentralizados: Protección en DeFi - Curso de DeFi',
  description: 'Explora el mundo de los seguros descentralizados en DeFi. Aprende cómo estos protocolos ofrecen cobertura contra hacks, fallos de contratos inteligentes y otros riesgos del ecosistema cripto sin intermediarios tradicionales.',
  keywords: ['seguros DeFi', 'cobertura cripto', 'Nexus Mutual', 'InsurAce', 'protección smart contracts', 'reclamaciones descentralizadas', 'riesgo protocolo', 'prima seguro DeFi'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Seguros Descentralizados: Protección en DeFi - Curso de DeFi',
    description: 'Explora el mundo de los seguros descentralizados en DeFi. Aprende cómo estos protocolos ofrecen cobertura contra hacks, fallos de contratos inteligentes y otros riesgos del ecosistema cripto sin intermediarios tradicionales.',
    images: ['/images/defi-insurance.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguros Descentralizados: Protección en DeFi - Curso de DeFi',
    description: 'Explora el mundo de los seguros descentralizados en DeFi. Aprende cómo estos protocolos ofrecen cobertura contra hacks, fallos de contratos inteligentes y otros riesgos del ecosistema cripto sin intermediarios tradicionales.',
    images: ['/images/defi-insurance.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function SegurosDescentralizadosLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}