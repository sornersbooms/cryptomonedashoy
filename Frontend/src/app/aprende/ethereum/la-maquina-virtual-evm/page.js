'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function LaMaquinaVirtualEVMPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  // Asumo que courseData.ethereum existe y tiene la estructura necesaria
  const ethereumCourse = courseData.ethereum;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={ethereumCourse.title}
        modules={ethereumCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>La Máquina Virtual de Ethereum (EVM): El Cerebro de la Computadora Global</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Soy Richard Feynman, y hoy vamos a hablar de algo que suena muy complicado, pero que en realidad es fascinante: la <strong>Máquina Virtual de Ethereum</strong>, o como la llamamos cariñosamente, la EVM. Imaginen que tienen una computadora, pero no una cualquiera, ¡una computadora que está distribuida por todo el planeta! Una computadora que no tiene un dueño, sino que es de todos y de nadie a la vez. Esa es la idea detrás de Ethereum, y la EVM es su cerebro.
        </p>
        <p className={styles.paragraph}>
          Piensen en la EVM como una pequeña caja mágica. Dentro de esta caja, hay un procesador, memoria y todo lo necesario para ejecutar programas. Pero aquí viene lo interesante: esta caja no está en su escritorio. ¡Está replicada en miles de computadoras alrededor del mundo! Cada vez que alguien ejecuta un programa en Ethereum, todas estas cajas mágicas hacen el mismo cálculo, al mismo tiempo, y llegan al mismo resultado. Es como si tuvieran un ejército de calculadoras, todas haciendo la misma suma para asegurarse de que nadie se equivoque.
        </p>

        <h2 className={styles.subtitle}>¿Qué Puede Hacer Esta Máquina?</h2>
        <p className={styles.paragraph}>
          Bueno, esta máquina no es para jugar videojuegos o editar videos. Su propósito es ejecutar "contratos inteligentes". Imaginen un contrato legal, pero que no necesita abogados ni jueces. Es un programa que se ejecuta automáticamente cuando se cumplen ciertas condiciones. Por ejemplo, "si Juan me envía 10 ETH, entonces automáticamente le envío el título de propiedad de mi casa digital". La EVM es la que se encarga de que estos contratos se cumplan al pie de la letra, sin trampas ni atajos.
        </p>
        <p className={styles.paragraph}>
          Cada vez que se ejecuta una operación en la EVM, se consume una pequeña cantidad de "gas". No es gas de verdad, claro. Es una unidad de medida que representa el esfuerzo computacional. Es como si cada instrucción que la EVM ejecuta costara un poquito de energía. Y esa energía se paga con Ether, la moneda de Ethereum. Esto es crucial, porque evita que la gente escriba programas infinitos o que saturen la red con cálculos inútiles. Si quieres que la computadora global haga algo, tienes que pagar por el trabajo.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/ethereum-6928106_1280.jpg" alt="Representación de la Máquina Virtual de Ethereum" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>¿Por Qué Es Tan Especial?</h2>
        <p className={styles.paragraph}>
          La EVM es especial porque es determinista. Esto significa que, si le das la misma entrada, siempre producirá la misma salida. No hay sorpresas. Y como está replicada en miles de nodos, es increíblemente resistente a fallos y a la censura. Si un nodo se cae, no importa, los demás siguen funcionando. Si un gobierno intenta apagarla en un lugar, no puede, porque está en todas partes. Es una computadora que no se puede apagar.
        </p>
        <p className={styles.paragraph}>
          Además, es Turing-completa. Esto es un término elegante para decir que puede ejecutar cualquier programa que una computadora normal pueda ejecutar, siempre y cuando tengas suficiente "gas" y tiempo. Esto abre un mundo de posibilidades, desde finanzas descentralizadas hasta juegos y sistemas de votación. Es una plataforma para construir aplicaciones que no pueden ser controladas por una sola entidad.
        </p>

        <h2 className={styles.subtitle}>En Resumen: La Computadora Imparable</h2>
        <p className={styles.paragraph}>
          Así que, la Máquina Virtual de Ethereum es como una computadora global, distribuida y determinista, que ejecuta contratos inteligentes. Es el motor que impulsa la visión de un internet más abierto y descentralizado. No es solo una tecnología, es una nueva forma de pensar sobre cómo interactuamos y hacemos negocios en el mundo digital. ¡Y eso, mis amigos, es realmente emocionante!
        </p>
      </div>
    </>
  );
}
