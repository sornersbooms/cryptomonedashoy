export const metadata = {
  title: 'Autenticación de Dos Factores (2FA) en Criptomonedas - Curso de Seguridad',
  description: 'Descubre cómo implementar y utilizar la autenticación de dos factores (2FA) para proteger tus cuentas de criptomonedas. Compara diferentes métodos y aprende las mejores prácticas.',
  keywords: ['2FA cripto', 'autenticación dos factores', 'Google Authenticator', 'Yubikey', 'seguridad exchange', 'protección cuenta', 'SMS 2FA', 'TOTP'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Autenticación de Dos Factores (2FA) en Criptomonedas - Curso de Seguridad',
    description: 'Descubre cómo implementar y utilizar la autenticación de dos factores (2FA) para proteger tus cuentas de criptomonedas. Compara diferentes métodos y aprende las mejores prácticas.',
    images: ['/images/2fa-security.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autenticación de Dos Factores (2FA) en Criptomonedas - Curso de Seguridad',
    description: 'Descubre cómo implementar y utilizar la autenticación de dos factores (2FA) para proteger tus cuentas de criptomonedas. Compara diferentes métodos y aprende las mejores prácticas.',
    images: ['/images/2fa-security.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AutenticacionDosFactoresLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}