export const metadata = {
  title: 'Protegiendo tus Wallets: Hot vs. Cold - Curso de Seguridad',
  description: 'Aprende a proteger tus wallets de criptomonedas. Descubre las diferencias de seguridad entre wallets calientes (hot) y frías (cold), y las mejores prácticas para cada tipo.',
  keywords: ['proteger wallet', 'seguridad hot wallet', 'cold storage', 'hardware wallet seguridad', 'protección monedero', 'wallet fría', 'seguridad ledger'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Protegiendo tus Wallets: Hot vs. Cold - Curso de Seguridad',
    description: 'Aprende a proteger tus wallets de criptomonedas. Descubre las diferencias de seguridad entre wallets calientes (hot) y frías (cold), y las mejores prácticas para cada tipo.',
    images: ['/images/wallet-protection.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protegiendo tus Wallets: Hot vs. Cold - Curso de Seguridad',
    description: 'Aprende a proteger tus wallets de criptomonedas. Descubre las diferencias de seguridad entre wallets calientes (hot) y frías (cold), y las mejores prácticas para cada tipo.',
    images: ['/images/wallet-protection.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ProtegiendoWalletsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}