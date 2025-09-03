'use client';
import React, { useState } from 'react';
import styles from './Lesson.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function EcosistemaPage() {
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
        <h1 className={styles.title}>El Ecosistema: La Caja de Herramientas de Ethereum</h1>
        <p className={styles.paragraph}>
          ¡Perfecto! Hemos hablado mucho sobre la "carretera" de Ethereum, los "coches" que son las transacciones y los "edificios" que son las DApps. Pero, ¿cómo se construye todo eso? ¿Cómo navegas por la ciudad? No lo haces con las manos desnudas. Necesitas herramientas, mapas y guías. Todo ese conjunto es el <strong>ecosistema de Ethereum</strong>.
        </p>
        <p className={styles.paragraph}>
          Piensen en Ethereum no solo como una tecnología, sino como una <strong>ciudad digital en plena construcción</strong>. El ecosistema son todas las grúas, los martillos, los planos, las señales de tráfico y las guías turísticas que hacen que la ciudad funcione y crezca.
        </p>

        <h2 className={styles.subtitle}>Las Herramientas Esenciales del Constructor</h2>
        <p className={styles.paragraph}>
          Si quieres interactuar con esta ciudad digital, o construir en ella, vas a necesitar algunas herramientas clave en tu cinturón. Estas son las más importantes:
        </p>
        <ul>
          <li><strong>Wallets (Tu Llavero y Pasaporte):</strong> Esta es tu herramienta número uno. No es solo un "monedero" para guardar tu ETH y tokens. Es tu identidad digital, tu pasaporte para iniciar sesión en las DApps y tu bolígrafo para firmar transacciones. La más famosa es <strong>MetaMask</strong>, una extensión para el navegador que es la puerta de entrada a Ethereum para millones de personas.</li>
          <li><strong>Exploradores de Bloques (El Mapa GPS):</strong> ¿Quieres ver una transacción que hiciste? ¿O curiosear el código de un contrato inteligente? Para eso usas un explorador de bloques como <strong>Etherscan</strong>. Es como un Google para la blockchain de Ethereum. Te muestra cada callejón, cada edificio y cada movimiento que ha ocurrido en la ciudad, todo de forma pública y transparente.</li>
          <li><strong>Lenguajes de Programación (El Idioma de los Ladrillos):</strong> Para construir los Contratos Inteligentes, los desarrolladores necesitan un lenguaje que la Máquina Virtual de Ethereum (EVM) entienda. El más popular se llama <strong>Solidity</strong>. Es el "latín" de Ethereum, el idioma en el que se escriben las reglas de las DApps.</li>
          <li><strong>Nodos como Servicio (La Conexión a la Red Eléctrica):</strong> Para que una DApp pueda hablar con la blockchain, necesita conectarse a un "nodo". Mantener un nodo propio es complicado, así que servicios como <strong>Infura</strong> o <strong>Alchemy</strong> actúan como la compañía eléctrica de la ciudad. Ofrecen una conexión fácil y fiable a la blockchain para que los desarrolladores no tengan que preocuparse por ello.</li>
          <li><strong>Frameworks de Desarrollo (El Taller Pre-fabricado):</strong> Herramientas como <strong>Hardhat</strong> o <strong>Truffle</strong> son como un taller de carpintería completo para los desarrolladores. Les dan plantillas, herramientas de prueba y todo lo necesario para construir, probar y desplegar sus contratos inteligentes de forma mucho más sencilla.</li>
        </ul>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-4231398_1280.jpg" alt="Una caja de herramientas representando el ecosistema de Ethereum" width={600} height={400} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>En Resumen: Más que Solo una Blockchain</h2>
        <p className={styles.paragraph}>
          El verdadero poder de Ethereum no reside solo en su blockchain, sino en la increíble comunidad y el ecosistema de herramientas que han surgido a su alrededor. Es esta combinación de una base segura y descentralizada con herramientas accesibles y potentes lo que ha permitido que la innovación florezca. Entender el ecosistema es entender que Ethereum no es solo una cosa, sino una plataforma viva y en constante evolución, construida por miles de personas en todo el mundo.
        </p>
      </div>
    </>
  );
}
