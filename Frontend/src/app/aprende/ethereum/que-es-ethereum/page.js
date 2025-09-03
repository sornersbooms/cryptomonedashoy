'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function QueEsEthereumPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const ethereumCourse = courseData.ethereum;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={ethereumCourse.title}
        modules={ethereumCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>¿Qué es Ethereum? La Computadora del Mundo</h1>
        <p className={styles.paragraph}>
          Muy bien, ya hablamos de Bitcoin como si fuera un cuaderno de notas digital para dinero. Es fantástico para eso, pero es como una calculadora: hace una cosa y la hace muy bien. Ahora, ¿y si quisiéramos hacer más cosas? ¿Y si quisiéramos construir todo tipo de aplicaciones sobre esta idea de un sistema que nadie controla?
        </p>
        <p className={styles.paragraph}>
          Aquí es donde entra <strong>Ethereum</strong>. Piensen en Ethereum no como un cuaderno de notas, sino como una <strong>computadora mundial gigante y compartida</strong>. Al igual que con Bitcoin, todo el mundo tiene una copia, y nadie es el dueño. Pero en lugar de solo poder escribir transacciones de dinero, en esta computadora puedes ejecutar pequeños programas.
        </p>

        <h2 className={styles.subtitle}>Los Contratos Inteligentes: Programas que Viven Solos</h2>
        <p className={styles.paragraph}>
          Estos programitas se llaman <strong>"contratos inteligentes"</strong>. Pero no dejen que el nombre los intimide. Un contrato inteligente es simplemente un programa que se ejecuta automáticamente cuando se cumplen ciertas condiciones.
        </p>
        <p className={styles.paragraph}>
          Imaginen una máquina expendedora. Es un "contrato" muy simple: <strong>SI</strong> metes 1 euro <strong>Y</strong> presionas el botón de refresco, <strong>ENTONCES</strong> la máquina te da un refresco. No necesitas un dependiente. El código de la máquina lo hace todo.
        </p>
        <p className={styles.paragraph}>
          Los contratos inteligentes son así, pero para cosas digitales. Pueden manejar acuerdos, propiedad, lo que se les ocurra. Una vez que pones un contrato inteligente en Ethereum, se ejecutará para siempre exactamente como lo programaste, y nadie puede detenerlo o cambiarlo.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/ethereum-6928106_1280.jpg" alt="Símbolo de Ethereum flotando en un entorno digital" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Ether (ETH): El Combustible de la Computadora</h2>
        <p className={styles.paragraph}>
          "Fantástico", pensarán, "¡una computadora mundial! Pero... ¿quién paga la electricidad?". ¡Exacto! Ejecutar programas cuesta energía y esfuerzo computacional. No puede ser gratis, o la gente enviaría spam y programas infinitos que bloquearían el sistema.
        </p>
        <p className={styles.paragraph}>
          Aquí es donde entra el <strong>Ether (ETH)</strong>. Ether es la criptomoneda nativa de Ethereum. Pero es más que dinero. Es el <strong>combustible</strong> (o "gas", como se le llama) para la computadora de Ethereum. Cada vez que quieres hacer algo en Ethereum —ya sea enviar dinero, ejecutar un contrato inteligente o crear una aplicación— tienes que pagar una pequeña tarifa en Ether.
        </p>
        <p className={styles.paragraph}>
          Esta tarifa recompensa a la gente que presta sus computadoras para mantener la red funcionando y segura. Esto evita el spam y asegura que la red se use para cosas valiosas.
        </p>

        <h2 className={styles.subtitle}>¿Entonces, Cuál es la Diferencia?</h2>
        <ul>
          <li><strong>Bitcoin</strong> es como el <strong>oro digital</strong>. Es un sistema simple, robusto y seguro para almacenar y transferir valor. Su propósito es ser dinero.</li>
          <li><strong>Ethereum</strong> es como una <strong>plataforma de aplicaciones descentralizada</strong>. Su propósito es permitir que cualquiera pueda construir y usar aplicaciones que no dependan de una empresa o servidor central. El Ether (ETH) es el combustible que hace que todo funcione.</li>
        </ul>
        <p className={styles.paragraph}>
          Así que, si Bitcoin es el dinero de internet, Ethereum aspira a ser la computadora de internet. Un lugar donde se pueden construir nuevas y fascinantes aplicaciones financieras, de juegos, de arte... ¡lo que la gente pueda imaginar!
        </p>
      </div>
    </>
  );
}
