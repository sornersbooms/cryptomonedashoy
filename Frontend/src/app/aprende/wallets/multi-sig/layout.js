export const metadata = {
  title: 'Wallets Multi-firma (Multi-sig): Seguridad Avanzada - Curso de Wallets',
  description: 'Descubre las wallets multi-firma (multi-sig) para criptomonedas. Aprende cómo funcionan, sus ventajas para empresas y grandes inversores, y cómo configurarlas correctamente.',
  keywords: ['multi-sig', 'multifirma', 'wallet empresarial', 'seguridad avanzada cripto', '2-de-3 firma', 'gobernanza wallet', 'control compartido'],
  authors: [{ name: 'Cryptomonedas Hoy' }],
  openGraph: {
    title: 'Wallets Multi-firma (Multi-sig): Seguridad Avanzada - Curso de Wallets',
    description: 'Descubre las wallets multi-firma (multi-sig) para criptomonedas. Aprende cómo funcionan, sus ventajas para empresas y grandes inversores, y cómo configurarlas correctamente.',
    images: ['/images/multisig-wallet.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallets Multi-firma (Multi-sig): Seguridad Avanzada - Curso de Wallets',
    description: 'Descubre las wallets multi-firma (multi-sig) para criptomonedas. Aprende cómo funcionan, sus ventajas para empresas y grandes inversores, y cómo configurarlas correctamente.',
    images: ['/images/multisig-wallet.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function MultiSigLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}