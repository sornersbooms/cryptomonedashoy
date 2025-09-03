import styles from './aprende.module.css';

export const metadata = {
  title: 'Aprende Sobre Criptomonedas | Guías y Cursos para Principiantes',
  description: 'Explora nuestras guías y cursos gratuitos sobre criptomonedas. Aprende sobre Bitcoin, Ethereum, blockchain, trading y más. Ideal para principiantes.',
  keywords: ['aprender criptomonedas', 'curso bitcoin', 'guía blockchain', 'trading cripto', 'ethereum para principiantes'],
};

export default function AprendePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a la Sección de Aprendizaje</h1>
      <p className={styles.description}>
        Aquí encontrarás todo lo que necesitas para empezar tu viaje en el mundo de las criptomonedas. 
        Selecciona un curso de la barra de navegación de arriba para comenzar.
      </p>
    </div>
  );
}
