'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function FuturoDeLasWalletsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const walletsCourse = courseData.wallets;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={walletsCourse.title}
        modules={walletsCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>El Futuro de las Wallets</h1>
        <p className={styles.paragraph}>
          Muy bien, sentémonos un rato y hablemos de algo que parece complicado: el futuro de las billeteras de criptomonedas. Olvídense de las palabras rimbombantes. Pensemos en esto de una manera sencilla y directa.
        </p>
        <p className={styles.paragraph}>
          Hoy en día, una wallet es como una cartera o una cuenta bancaria para su dinero digital. Tienen una dirección para recibir, una clave secreta para enviar... Funciona, pero a veces es un poco torpe, ¿no creen? Hay que copiar y pegar direcciones largas, preocuparse por las comisiones, y siempre está ese miedo de perder la famosa "frase semilla".
        </p>

        <h2 className={styles.subtitle}>Carteras que Piensan por Ti</h2>
        <p className={styles.paragraph}>
          Ahora, imaginen una cartera que es mucho más inteligente. En lugar de una dirección que parece un jeroglífico, ¿qué tal si pudieran enviar dinero a '''juan.crypto'''? O incluso a un número de teléfono. El futuro de las wallets se trata de <strong>abstracción</strong>. Esconder toda la complejidad para que usar cripto sea tan fácil como enviar un email.
        </p>
        <p className={styles.paragraph}>
          Estas futuras wallets se encargarán de las cosas aburridas por nosotros. ¿Quieren enviar dinero a un amigo que usa una red blockchain diferente? La wallet lo resolverá por sí misma, encontrando el puente más barato y rápido sin que ustedes tengan que hacer un máster en ingeniería de cohetes. A esto se le llama <strong>interoperabilidad nativa</strong>.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/3d-cryptocurrency-rendering-design.jpg" alt="Futuro de las wallets" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Wallet como tu Identidad Digital</h2>
        <p className={styles.paragraph}>
          Pero aquí viene lo realmente interesante. Una wallet del futuro no será solo para guardar dinero. Será su <strong>identidad en el mundo digital</strong>. Piensen en ello. Su wallet podrá demostrar quiénes son sin revelar toda su información personal. Podrían votar en una organización, iniciar sesión en una página web o incluso firmar documentos, todo con la misma wallet.
        </p>
        <p className={styles.paragraph}>
          Imaginen que quieren demostrar que son mayores de 18 años para entrar a un sitio web. En lugar de mostrar su carnet de identidad completo, su wallet simplemente le dirá al sitio: "Sí, esta persona tiene más de 18". Y nada más. Ni su nombre, ni su dirección. Privacidad y control en sus manos.
        </p>

        <h2 className={styles.subtitle}>Recuperación Social: Adiós al Pánico</h2>
        <p className={styles.paragraph}>
          ¿Y qué pasa si pierden el acceso a su wallet? Hoy, es un desastre. Mañana, no tanto. El concepto de <strong>recuperación social</strong> está ganando fuerza. En lugar de una frase semilla que deben guardar bajo el colchón, podrán designar a un grupo de "guardianes" de confianza (amigos, familiares, incluso otras wallets suyas).
        </p>
        <p className={styles.paragraph}>
          Si pierden el acceso, simplemente contactan a la mayoría de sus guardianes. Ellos pueden realizar una acción criptográfica para verificar su identidad y ayudarles a recuperar el control de su cuenta. Es como tener amigos que les guardan una copia de la llave de casa, pero de una forma mucho más segura y digital.
        </p>

        <h2 className={styles.subtitle}>En Resumen, ¿Hacia Dónde Vamos?</h2>
        <p className={styles.paragraph}>
          El futuro de las wallets es pasar de ser simples contenedores de monedas a ser <strong>asistentes inteligentes y seguros para nuestra vida digital</strong>. Serán más fáciles de usar, más conectadas entre sí y se convertirán en el centro de nuestra identidad en la web descentralizada. Dejarán de ser una herramienta para '''geeks''' y se convertirán en algo que todo el mundo usa sin siquiera pensarlo. ¡Y esa es la belleza de la buena tecnología!
        </p>
      </div>
    </>
  );
}
