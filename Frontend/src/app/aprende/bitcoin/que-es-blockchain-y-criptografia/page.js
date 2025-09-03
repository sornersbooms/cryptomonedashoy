'use client';
import React, { useState } from 'react';
import styles from './page.module.css'; // Import the CSS module
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Header from '@/components/Header';

export default function BlockchainCriptografiaPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const bitcoinCourse = courseData.bitcoin;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={bitcoinCourse.title}
        modules={bitcoinCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Blockchain y Criptografía: El Corazón de Bitcoin</h1>
        <p className={styles.paragraph}>
          ¡Hola! Pónganse cómodos. Hoy vamos a desarmar el motor de Bitcoin. No se asusten, no es tan complicado como parece. Imaginen que estamos jugando a los detectives. Tenemos un misterio: ¿cómo podemos confiar en un sistema de dinero que no tiene un jefe, ni un banco, ni nadie que ponga orden? La respuesta es una idea brillante, una combinación de dos trucos: la <strong>Blockchain</strong> y la <strong>Criptografía</strong>.
        </p>
        <h2 className={styles.subtitle}>La Blockchain: Un Cuaderno de Cuentas a Prueba de Tramposos</h2>
        <p className={styles.paragraph}>
          Piensen en la blockchain como un cuaderno de notas. Pero no es un cuaderno cualquiera. Primero, es <strong>público</strong>. Todos los que participan en Bitcoin tienen una copia de este cuaderno. ¡Todos! Es como si en un pueblo, cada habitante tuviera una copia exacta del libro de cuentas del ayuntamiento. Si alguien intenta hacer trampa y cambiar una página en su copia, los demás dirán: "¡Un momento! Mi copia no dice eso". Y la trampa se descubre al instante.
        </p>
        <p className={styles.paragraph}>
          Segundo, este cuaderno está <strong>encadenado</strong>. Cada página (o "bloque") está conectada con la anterior de una forma muy ingeniosa. Es como si cada página tuviera una huella digital de la página anterior. Si intentas arrancar una página del medio o cambiarla, rompes la cadena. Toda la estructura se desmorona y la manipulación es evidente. Por eso se llama "cadena de bloques". Es una forma muy simple y robusta de asegurarse de que la historia no se pueda reescribir.
        </p>
        <h2 className={styles.subtitle}>Criptografía: El Arte de los Secretos</h2>
        <p className={styles.paragraph}>
          Ahora, la criptografía. Esta palabra suena a espías y mensajes secretos, ¿verdad? Y no está tan lejos de la realidad. En Bitcoin, la criptografía se usa para dos cosas muy importantes: asegurarse de que eres quien dices ser y proteger la información.
        </p>
        <p className={styles.paragraph}>
          Imaginen que tienen una caja fuerte con dos llaves. Una <strong>llave pública</strong>, que pueden darle a cualquiera, y una <strong>llave privada</strong>, que guardan como su mayor secreto. La gente usa su llave pública para enviarles dinero. Pero solo ustedes, con su llave privada, pueden abrir la caja y usar ese dinero. Su llave privada es su firma, la prueba irrefutable de que el dinero les pertenece. Si alguien conoce su llave privada, puede robarles. ¡Así que hay que guardarla muy bien!
        </p>
        <p className={styles.paragraph}>
          La criptografía también se usa para crear esas "huellas digitales" de las que hablábamos antes, las que conectan los bloques. Es un truco matemático que convierte cualquier información en una serie única de letras y números. Si cambias una sola coma en la información, la huella digital cambia por completo. Esto es lo que hace que la blockchain sea tan segura.
        </p>
        <h2 className={styles.subtitle}>En Resumen: Confianza sin Confiar</h2>
        <p className={styles.paragraph}>
          Así que, ¿ven? No es magia, es ingenio. La blockchain es un sistema para registrar cosas de forma que no se puedan cambiar, y la criptografía es la herramienta que usamos para firmar nuestras transacciones y para encadenar los bloques de forma segura. Juntas, crean un sistema donde no necesitamos confiar en una persona o en un banco. Confiamos en las reglas del juego, en las matemáticas. Y eso, amigos míos, es una idea revolucionaria.
        </p>
      </div>
    </>
  );
}
