export const metadata = {
  title: 'Reportando Incidentes de Seguridad en Cripto - Curso de Seguridad',
  description: 'Aprende cómo actuar y reportar incidentes de seguridad en criptomonedas. Descubre los pasos a seguir ante un hackeo, estafa o pérdida, y los recursos disponibles para buscar ayuda.',
  keywords: ['reportar hackeo', 'denuncia estafa cripto', 'recuperar bitcoin robado', 'incidente seguridad', 'fraude criptomonedas', 'asistencia hackeo', 'respuesta incidentes'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Reportando Incidentes de Seguridad en Cripto - Curso de Seguridad',
    description: 'Aprende cómo actuar y reportar incidentes de seguridad en criptomonedas. Descubre los pasos a seguir ante un hackeo, estafa o pérdida, y los recursos disponibles para buscar ayuda.',
    images: ['/images/security-incident.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reportando Incidentes de Seguridad en Cripto - Curso de Seguridad',
    description: 'Aprende cómo actuar y reportar incidentes de seguridad en criptomonedas. Descubre los pasos a seguir ante un hackeo, estafa o pérdida, y los recursos disponibles para buscar ayuda.',
    images: ['/images/security-incident.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ReporteIncidentesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}