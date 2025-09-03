'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ImpuestosCriptomonedasPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const tradingCourse = courseData.trading;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={tradingCourse.title}
        modules={tradingCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Impuestos sobre Criptomonedas: La Realidad del Tío Sam</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Hoy vamos a hablar de algo que a nadie le gusta, pero que es tan real como la gravedad: los impuestos. Y sí, incluso en el salvaje oeste de las criptomonedas, el Tío Sam (o su equivalente local) siempre encuentra la manera de meter la mano. No es magia, es física básica de la economía.
        </p>
        <p className={styles.paragraph}>
          Imaginen que tienen un cubo de agua. Si mueven el agua de un cubo a otro, el agua sigue siendo agua, ¿verdad? Pero si ese movimiento de agua hace que su cubo sea más grande, o que el cubo del vecino se haga más pequeño y el suyo más grande, entonces hay un cambio. Y a los gobiernos les encantan los cambios, especialmente cuando significan que alguien tiene más de algo que antes.
        </p>

        <h2 className={styles.subtitle}>¿Cuándo se Activa el Radar del Tío Sam?</h2>
        <p className={styles.paragraph}>
          La clave aquí es entender cuándo se produce un <strong>"evento imponible"</strong>. No es cuando compras Bitcoin y lo guardas bajo el colchón digital. Eso es como comprar un lingote de oro y meterlo en una caja fuerte. No has ganado ni perdido nada hasta que lo vendes.
        </p>
        <p className={styles.paragraph}>
          El radar se enciende cuando hay una <strong>"disposición"</strong> de tu criptomoneda. ¿Qué significa eso? Significa que te deshaces de ella de alguna manera, y esa manera genera una ganancia o una pérdida. Piensen en ello como si el agua de su cubo se transformara en algo más valioso, o menos valioso, en el momento en que la usan.
        </p>
        <ul>
          <li><strong>Vender cripto por dinero fiduciario (dólares, euros, etc.):</strong> ¡Bingo! Este es el más obvio. Si compraste Bitcoin a $10,000 y lo vendes a $20,000, esa diferencia de $10,000 es una ganancia de capital.</li>
          <li><strong>Intercambiar una cripto por otra (Bitcoin por Ethereum):</strong> ¡Sorpresa! Esto también es un evento imponible. Es como si vendieras tu Bitcoin por dólares y luego usaras esos dólares para comprar Ethereum. Se calcula la ganancia o pérdida en el Bitcoin en el momento del intercambio.</li>
          <li><strong>Usar cripto para comprar bienes o servicios:</strong> Sí, también. Si pagas una pizza con Bitcoin, se considera que has "vendido" ese Bitcoin por el valor de la pizza en el momento de la transacción. La diferencia entre el precio al que compraste ese Bitcoin y el valor de la pizza es tu ganancia o pérdida.</li>
          <li><strong>Recibir cripto como ingreso (minería, staking, airdrops):</strong> Esto es ingreso ordinario, como si te pagaran en tu salario. Se valora al precio de mercado en el momento en que lo recibes.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-7074949_1280.jpg" alt="Concepto de impuestos sobre criptomonedas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Ganancias a Corto y Largo Plazo: El Tiempo es Dinero (y Impuestos)</h2>
        <p className={styles.paragraph}>
          Aquí es donde la cosa se pone un poco más interesante, como cuando estudias la desintegración de partículas. No todas las ganancias son iguales. Depende de cuánto tiempo hayas tenido esa criptomoneda antes de deshacerte de ella.
        </p>
        <ul>
          <li><strong>Ganancias a Corto Plazo:</strong> Si vendes o intercambias cripto que has tenido por <strong>un año o menos</strong>, se considera una ganancia a corto plazo. Esto se grava a tu tasa de impuesto sobre la renta ordinaria, que puede ser bastante alta. Es como si el agua de tu cubo se evaporara rápidamente y tuvieras que pagar por esa pérdida de volumen de inmediato.</li>
          <li><strong>Ganancias a Largo Plazo:</strong> Si mantienes la cripto por <strong>más de un año</strong> antes de venderla o intercambiarla, se considera una ganancia a largo plazo. Estas suelen tener tasas impositivas preferenciales, mucho más bajas. Es como si el agua se hubiera asentado, y el gobierno te diera un pequeño descuento por tu paciencia.</li>
        </ul>
        <p className={styles.paragraph}>
          Esta distinción es crucial para la planificación fiscal. A veces, esperar un día más puede significar una diferencia significativa en lo que pagas en impuestos.
        </p>

        <h2 className={styles.subtitle}>Registros: Tu Cuaderno de Notas Personal</h2>
        <p className={styles.paragraph}>
          Así como la blockchain es un registro público, tú necesitas tu propio registro personal. Cada vez que compras, vendes, intercambias o recibes cripto, anota la fecha, el tipo de activo, la cantidad, el precio en dinero fiduciario en ese momento y la plataforma utilizada. Esto es vital para calcular tus ganancias y pérdidas y para defenderte ante cualquier pregunta de la autoridad fiscal.
        </p>
        <p className={styles.paragraph}>
          No es divertido, lo sé. Es como tener que medir cada gota de agua que entra y sale de tu cubo. Pero es la única manera de asegurarte de que estás cumpliendo con las reglas y de que no te llevas una sorpresa desagradable. La transparencia es clave, incluso cuando se trata de algo tan opaco como los impuestos.
        </p>

        <h2 className={styles.subtitle}>Conclusión: No es Magia, es Contabilidad</h2>
        <p className={styles.paragraph}>
          En resumen, los impuestos sobre criptomonedas no son un misterio insondable. Son simplemente la aplicación de principios fiscales existentes a una nueva clase de activos. La clave es entender los eventos imponibles, la diferencia entre ganancias a corto y largo plazo, y mantener registros meticulosos. No hay trucos, no hay atajos mágicos. Solo es contabilidad, y como en la física, los números tienen que cuadrar.
        </p>
        <p className={styles.paragraph}>
          Así que, mientras disfrutan de la libertad y la innovación que ofrecen las criptomonedas, no olviden que el universo fiscal tiene sus propias leyes. Ignorarlas no las hace desaparecer. ¡A seguir aprendiendo y a mantener esos registros en orden!
        </p>
      </div>
    </>
  );
}
