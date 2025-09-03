export const metadata = {
  title: 'DAOs: Organizaciones Autónomas Descentralizadas - Curso de DeFi',
  description: 'Descubre cómo las Organizaciones Autónomas Descentralizadas (DAOs) están redefiniendo la colaboración y gestión empresarial. Aprende sobre su estructura, funcionamiento, tipos y el papel que juegan en el ecosistema DeFi.',
  keywords: ['DAO', 'organización autónoma', 'gobernanza descentralizada', 'tesorería DAO', 'coordinación sin jerarquías', 'votación on-chain', 'incentivos alineados', 'comunidad blockchain'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'DAOs: Organizaciones Autónomas Descentralizadas - Curso de DeFi',
    description: 'Descubre cómo las Organizaciones Autónomas Descentralizadas (DAOs) están redefiniendo la colaboración y gestión empresarial. Aprende sobre su estructura, funcionamiento, tipos y el papel que juegan en el ecosistema DeFi.',
    images: ['/images/daos.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAOs: Organizaciones Autónomas Descentralizadas - Curso de DeFi',
    description: 'Descubre cómo las Organizaciones Autónomas Descentralizadas (DAOs) están redefiniendo la colaboración y gestión empresarial. Aprende sobre su estructura, funcionamiento, tipos y el papel que juegan en el ecosistema DeFi.',
    images: ['/images/daos.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function DAOsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}