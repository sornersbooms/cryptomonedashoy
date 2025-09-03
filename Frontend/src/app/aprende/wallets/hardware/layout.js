export const metadata = {
  title: 'Wallets de Hardware: Máxima Seguridad - Curso de Wallets',
  description: 'Descubre las wallets de hardware para criptomonedas, los dispositivos físicos más seguros para almacenar tus activos digitales. Comparativa de modelos, características y configuración.',
  keywords: ['wallet hardware', 'ledger', 'trezor', 'keepkey', 'dispositivo físico cripto', 'almacenamiento seguro', 'cold storage'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Wallets de Hardware: Máxima Seguridad - Curso de Wallets',
    description: 'Descubre las wallets de hardware para criptomonedas, los dispositivos físicos más seguros para almacenar tus activos digitales. Comparativa de modelos, características y configuración.',
    images: ['/images/hardware-wallets.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallets de Hardware: Máxima Seguridad - Curso de Wallets',
    description: 'Descubre las wallets de hardware para criptomonedas, los dispositivos físicos más seguros para almacenar tus activos digitales. Comparativa de modelos, características y configuración.',
    images: ['/images/hardware-wallets.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function HardwareLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}