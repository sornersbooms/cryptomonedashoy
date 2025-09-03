'use client';
import React, { useState } from 'react';
import styles from '../que-es-bitcoin/page.module.css'; // Re-using the same styles
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function InversionBitcoinPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const bitcoinCourse = courseData.bitcoin;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={bitcoinCourse.title}
        modules={bitcoinCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Bitcoin como Inversión: ¿Una Apuesta o un Ahorro?</h1>
        <p className={styles.paragraph}>
          Ya entendimos Bitcoin como dinero y como tecnología. Pero seguro han escuchado a la gente hablar de él de otra manera, con un brillo en los ojos: como una <strong>"inversión"</strong>. ¿Qué significa eso realmente? Bueno, invertir es simplemente guardar algo de valor hoy, con la esperanza de que en el futuro valga más. La gente lo hace con oro, casas, arte, acciones de empresas... ¿Tiene sentido hacerlo con Bitcoin?
        </p>

        <h2 className={styles.subtitle}>La Montaña Rusa de Precios: Volatilidad</h2>
        <p className={styles.paragraph}>
          Lo primero que cualquiera nota sobre el precio de Bitcoin es que es como un yo-yo en medio de un terremoto. Sube y baja de forma dramática. A esta cualidad la llamamos <strong>volatilidad</strong>. ¿Y por qué es así? Imaginen que todo el mundo está tratando de adivinar el peso de un objeto completamente nuevo y extraño. 
        </p>
        <p className={styles.paragraph}>
          Algunos gritan: "¡Esto es el futuro, valdrá un millón!". Y el precio se dispara. Otros se asustan por una noticia y dicen: "¡Esto es una burbuja, no vale nada!". Y el precio se desploma. Es un mercado muy joven, como un adolescente lleno de emociones. Aún no tiene la larga y aburrida historia del oro para calmar los nervios de la gente.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-4231398_1280.jpg" alt="Gráfico de criptomonedas subiendo" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Magia de la Escasez: La Regla de los 21 Millones</h2>
        <p className={styles.paragraph}>
          Aquí es donde la idea de invertir en Bitcoin se pone interesante. A diferencia del dinero que usamos, que los bancos centrales pueden imprimir cuando quieran (haciendo que el dinero de todos valga un poquito menos cada vez), Bitcoin tiene una regla sagrada, escrita en piedra en su código: <strong>nunca existirán más de 21 millones de bitcoins</strong>.
        </p>
        <p className={styles.paragraph}>
          Piénsenlo. Es como si supiéramos que solo existen 21 millones de cuadros de un pintor famoso. Si la cantidad de algo es finita y predecible, y con el tiempo más y más gente se interesa en tener un pedazo... ¿qué le dice la lógica que pasará con su precio? Es la ley más simple de la economía: la oferta y la demanda.
        </p>

        <h2 className={styles.subtitle}>¿Cómo Invertir sin Volverse Loco?</h2>
        <p className={styles.paragraph}>
          Dado que predecir el precio es imposible, la gente ha desarrollado estrategias. No son consejos, sino ideas para pensar:
        </p>
        <ul>
          <li><strong>HODL:</strong> Verán esta palabra extraña por todas partes. Nació de un error al escribir "hold" (mantener). La filosofía es simple: si crees en el potencial a largo plazo de Bitcoin, compras y simplemente guardas, sin importar las tormentas de precios. Es una estrategia de paciencia.</li>
          <li><strong>Promedio de Costo en Dólares (DCA):</strong> Esta es una estrategia para domar la volatilidad. En lugar de invertir una gran suma de golpe, compras una cantidad fija de forma regular (por ejemplo, 20€ cada semana). A veces comprarás en la cima, otras en el fondo. Con el tiempo, tu precio de compra se promedia, y acumulas poco a poco sin el estrés de "adivinar" el mercado.</li>
        </ul>

        <h2 className={styles.subtitle}>Una Advertencia Final y Crucial</h2>
        <p className={styles.paragraph}>
          Entonces, ¿es Bitcoin una buena inversión? Nadie tiene una bola de cristal. Es una tecnología revolucionaria con un potencial inmenso, pero también es un activo joven con riesgos reales. Es como explorar un continente nuevo. Podrías encontrar oro, o podrías encontrarte con problemas inesperados.
        </p>
        <p className={styles.paragraph}>
          Por eso, la regla de oro de cualquier inversión, y especialmente en criptomonedas, es: <strong>nunca inviertas más dinero del que estás dispuesto a perder por completo</strong>. Estudia, entiende la idea fundamental y toma tus propias decisiones. No lo hagas solo porque un amigo te lo dijo. Es un experimento fascinante, pero participa con curiosidad y prudencia.
        </p>
      </div>
    </>
  );
}
