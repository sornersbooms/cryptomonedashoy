'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function SeguridadCEXPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const seguridadCourse = courseData.seguridad;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={seguridadCourse.title}
        modules={seguridadCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Seguridad en Exchanges Centralizados (CEX)</h1>
        <p className={styles.paragraph}>
          Muy bien, hablemos de esos sitios donde la mayoría de la gente compra y vende sus primeras criptomonedas: los <strong>Exchanges Centralizados</strong> o CEX. Piensen en ellos como los bancos del mundo cripto. Son empresas, con oficinas, empleados y un gran libro de contabilidad donde apuntan quién tiene qué.
        </p>
        <p className={styles.paragraph}>
          Cuando depositan sus criptomonedas en un CEX, están haciendo algo fundamental: están cediendo el control. Ya no tienen ustedes las claves privadas, las tienen ellos. Están confiando en que el "banco" cuidará bien de su dinero. Esto tiene ventajas y desventajas, y la seguridad aquí se juega en dos campos de batalla: lo que ellos hacen para protegerse y lo que ustedes hacen para proteger su cuenta.
        </p>

        <h2 className={styles.subtitle}>El Famoso "Not Your Keys, Not Your Coins"</h2>
        <p className={styles.paragraph}>
          Esta es la frase más repetida en el mundo cripto, y por una buena razón: <strong>"Si no son tus claves, no son tus monedas"</strong>. Cuando sus fondos están en un CEX, técnicamente no son suyos. Son un "pagaré" que el exchange tiene con ustedes. Si el exchange es hackeado, se declara en bancarrota o simplemente decide congelar su cuenta, su dinero está en riesgo.
        </p>
        <p className={styles.paragraph}>
          ¿Significa esto que los CEX son el demonio? No, en absoluto. Son herramientas increíblemente útiles y necesarias para el ecosistema. Pero hay que entender la naturaleza del trato. Están cambiando la soberanía total por la conveniencia. La clave es no dejar todos los huevos en esa cesta. No usen un exchange como una cuenta de ahorros a largo plazo.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/cryptocurrency-3423263_1280.jpg" alt="Exchange centralizado" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Tu Parte del Trato: Asegurando Tu Cuenta</h2>
        <p className={styles.paragraph}>
          No pueden controlar la seguridad interna del exchange, pero sí pueden y deben fortificar su propia cuenta hasta los dientes. Aquí no hay excusas. Esto es lo mínimo que deben hacer:
        </p>
        <ul>
            <li><strong>Contraseña Única y Fuerte:</strong> No usen la misma contraseña que en otros sitios. Si otro servicio es hackeado, los atacantes probarán esa misma contraseña en todos los exchanges. Usen un gestor de contraseñas para crear y guardar claves largas y complejas.</li>
            <li><strong>Activar el 2FA (¡con una App!):</strong> Ya lo vimos. Usen Google Authenticator o Authy. No usen 2FA por SMS si pueden evitarlo. Esta es, sin duda, la medida de seguridad más importante que pueden tomar.</li>
            <li><strong>Código Anti-Phishing:</strong> Muchos exchanges te permiten configurar un código o palabra secreta que aparecerá en todos los correos electrónicos legítimos que te envíen. Si reciben un correo que no incluye su código, saben inmediatamente que es una estafa.</li>
            <li><strong>Lista Blanca de Direcciones (Whitelisting):</strong> Pueden configurar su cuenta para que solo permita retiros a direcciones que ustedes hayan aprobado previamente. Si un atacante entra, no podrá enviar los fondos a su propia wallet, solo a las que ya están en la lista.</li>
        </ul>

        <h2 className={styles.subtitle}>La Parte del Exchange: ¿En Quién Confiar?</h2>
        <p className={styles.paragraph}>
          No todos los exchanges son iguales. Los grandes y reputados invierten millones en seguridad. Hacen cosas como:
        </p>
        <ul>
            <li><strong>Almacenamiento en Frío (Cold Storage):</strong> Guardan la gran mayoría de los fondos de los clientes en wallets frías, fuera del alcance de internet. Solo una pequeña porción está en wallets calientes para la operativa diaria.</li>
            <li><strong>Prueba de Reservas (Proof of Reserves):</strong> Algunos exchanges publican auditorías para demostrar que realmente tienen los fondos que dicen tener, que no están operando con el dinero de los clientes.</li>
            <li><strong>Fondos de Seguro (SAFU):</strong> Ciertos exchanges tienen fondos de seguro para compensar a los usuarios en caso de un hackeo.</li>
        </ul>
        <p className={styles.paragraph}>
          Investiguen un poco. Usen exchanges grandes, con buena reputación y que lleven tiempo operando. Desconfíen de plataformas nuevas que prometen rendimientos absurdos.
        </p>

        <h2 className={styles.subtitle}>La Estrategia Correcta</h2>
        <p className={styles.paragraph}>
          La forma inteligente de usar un CEX es como un puente, no como un destino. Úsenlo para comprar, para vender, para hacer trading si es lo que les interesa. Pero cuando terminen, muevan la mayor parte de sus fondos, sus ahorros a largo plazo, a una <strong>wallet personal donde ustedes controlen las claves</strong> (idealmente, una hardware wallet).
        </p>
        <p className={styles.paragraph}>
          Dejar una pequeña cantidad en el exchange para operar es normal y aceptable. Dejar los ahorros de toda una vida es jugar a la ruleta rusa. Entender esta diferencia es fundamental para sobrevivir y prosperar en el mundo de las criptomonedas.
        </p>
      </div>
    </>
  );
}
