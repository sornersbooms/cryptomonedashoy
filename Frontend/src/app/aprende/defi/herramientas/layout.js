export const metadata = {
  title: 'Herramientas y Dashboards para DeFi - Curso de DeFi',
  description: 'Descubre las mejores herramientas y dashboards para navegar el ecosistema DeFi. Aprende a utilizar exploradores, agregadores, rastreadores de rendimiento y otras aplicaciones que te ayudarán a optimizar tu experiencia en finanzas descentralizadas.',
  keywords: ['herramientas DeFi', 'dashboards cripto', 'DefiLlama', 'Zapper', 'DeFi Saver', 'agregadores yield', 'portfolio tracker', 'análisis protocolos', 'gas tracker'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Herramientas y Dashboards para DeFi - Curso de DeFi',
    description: 'Descubre las mejores herramientas y dashboards para navegar el ecosistema DeFi. Aprende a utilizar exploradores, agregadores, rastreadores de rendimiento y otras aplicaciones que te ayudarán a optimizar tu experiencia en finanzas descentralizadas.',
    images: ['/images/defi-tools.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herramientas y Dashboards para DeFi - Curso de DeFi',
    description: 'Descubre las mejores herramientas y dashboards para navegar el ecosistema DeFi. Aprende a utilizar exploradores, agregadores, rastreadores de rendimiento y otras aplicaciones que te ayudarán a optimizar tu experiencia en finanzas descentralizadas.',
    images: ['/images/defi-tools.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function HerramientasLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}