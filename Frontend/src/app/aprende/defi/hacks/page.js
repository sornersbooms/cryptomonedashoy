'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function HacksPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const defiCourse = courseData.defi;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={defiCourse.title}
        modules={defiCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Hacks y Exploits: El Lado Oscuro del Código</h1>
        <p className={styles.paragraph}>
          Hemos hablado de todas las maravillas de DeFi, este mundo de LEGOs financieros donde todo es automático y transparente. Pero tenemos que ser honestos. Construir con LEGOs es divertido, pero a veces, si no pones una pieza en el lugar correcto, toda la estructura se puede venir abajo. En DeFi, a esto lo llamamos un <strong>exploit</strong> o un <strong>hack</strong>.
        </p>
        <p className={styles.paragraph}>
          La idea de que &quot;el código es la ley&quot; es muy poderosa, pero también es una espada de doble filo. Si la ley (el código) tiene un agujero, una pequeña grieta que nadie vio, alguien la encontrará y la aprovechará. Y como no hay un policía o un juez a quien llamar, el dinero simplemente... desaparece.
        </p>

        <h2 className={styles.subtitle}>El Bug en el Contrato: La Puerta Trasera</h2>
        <p className={styles.paragraph}>
          La forma más común de hackeo es un simple <strong>error en el código (un bug)</strong>. Imaginen que el contrato inteligente de un protocolo de préstamos es como una caja fuerte con unas reglas muy complejas. Una de las reglas dice: &quot;Para sacar dinero, tienes que haber depositado una garantía &quot;. Pero un programador, por un despiste, se olvidó de poner un punto y coma en una línea, y sin querer creó una puerta trasera que dice: "...a menos que me lo pidas amablemente tres veces seguidas".
        </p>
        <p className={styles.paragraph}>
          Un hacker es alguien que se dedica a leer el manual de instrucciones de estas cajas fuertes (el código, que es público) con una lupa, buscando precisamente esas pequeñas erratas. Cuando la encuentra, la explota y vacía la caja. No está rompiendo las reglas, está usando las propias reglas del contrato en su contra.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3327643_1280.jpg" alt="Una figura oscura explotando una vulnerabilidad en el código" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Manipulación del Oráculo: Engañando al Mensajero</h2>
        <p className={styles.paragraph}>
          Otra forma muy popular de ataque es manipular a los oráculos. Como vimos, los oráculos son los mensajeros que le dicen a DeFi cuánto valen las cosas en el mundo real. ¿Qué pasa si consigues engañar al mensajero?
        </p>
        <p className={styles.paragraph}>
          Imaginen un protocolo de préstamos que usa un oráculo para saber el precio de la "Criptomoneda Banana". Un atacante podría, por un instante, usar mucho dinero para manipular el precio de esa criptomoneda en un exchange poco conocido que el oráculo está mirando. Hace que el precio se dispare artificialmente de $1 a $100.
        </p>
        <p className={styles.paragraph}>
          Entonces, va al protocolo de préstamos y dice: "¡Miren! Tengo una Criptomoneda Banana que vale $100. Déjenme pedir prestados $80 en stablecoins". El protocolo, engañado por el oráculo, le da el dinero. Un segundo después, el atacante deja de manipular el precio, la Criptomoneda Banana vuelve a valer $1, y el ladrón se marcha con $80 que nunca devolverá, dejando una garantía que no vale casi nada. Esto se llama un <strong>ataque de préstamo relámpago (flash loan attack)</strong> y es una de las formas más devastadoras de exploits.
        </p>

        <h2 className={styles.subtitle}>¿Estamos Condenados? No, Estamos Aprendiendo</h2>
        <p className={styles.paragraph}>
          Todo esto suena aterrador, y lo es. Se ha perdido mucho dinero. Pero hay que verlo con perspectiva. Esto es tecnología punta. Es como los primeros días de los coches o de los aviones. Había accidentes, las cosas explotaban. Pero con cada accidente, aprendíamos algo.
        </p>
        <p className={styles.paragraph}>
          En DeFi, cada hackeo es una lección carísima. Los desarrolladores aprenden a escribir código más seguro. Surgen las <strong>auditorías de seguridad</strong>, donde empresas externas revisan el código buscando agujeros antes de que se lance. Y aparecen los <strong>seguros descentralizados</strong> para proteger a los usuarios.
        </p>
        <p className={styles.paragraph}>
          El riesgo es real. Invertir en DeFi es estar en la frontera, y en la frontera hay peligros. Pero es importante entender que estos no son problemas de la idea de DeFi en sí, sino de su implementación. La física no está mal, son nuestros cohetes los que a veces fallan. Y con cada fallo, aprendemos a construir cohetes mejores.
        </p>
      </div>
    </>
  );
}
