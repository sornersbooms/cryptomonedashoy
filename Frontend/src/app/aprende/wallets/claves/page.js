'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function ClavesPage() {
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
        <h1 className={styles.title}>Claves Públicas y Privadas: Tu Sello y Tu Firma</h1>
        <p className={styles.paragraph}>
          De acuerdo, ya sabemos que una wallet es un llavero. Ahora vamos a mirar esas llaves con una lupa. Porque no hay una sola llave, sino un par que funciona en perfecta armonía. Son la <strong>clave pública</strong> y la <strong>clave privada</strong>. Entender esta pareja es entender el corazón de la seguridad de todo el sistema.
        </p>

        <h2 className={styles.subtitle}>La Magia de la Criptografía Asimétrica</h2>
        <p className={styles.paragraph}>
          No se asusten por el nombre. La idea es muy simple. Imaginen que tienen un candado especial. Este candado lo pueden cerrar ustedes, pero también lo puede cerrar cualquiera a quien le den una copia. Sin embargo, solo hay <strong>una única llave</strong> en todo el mundo que puede abrir ese candado: la llave maestra, que guardan ustedes en secreto.
        </p>
        <ul>
          <li><strong>La Clave Pública es el Candado:</strong> Pueden hacer miles de copias de este candado y repartirlas por el mundo. No hay peligro. Si alguien quiere enviarles algo de forma segura, usa una de sus copias del candado para cerrar la caja. Una vez cerrada, nadie más puede abrirla.</li>
          <li><strong>La Clave Privada es la Llave Maestra:</strong> Es su secreto. Es la única que puede abrir cualquier caja que haya sido cerrada con uno de sus candados.</li>
        </ul>
        <p className={styles.paragraph}>
          En el mundo cripto, tu <strong>dirección de la wallet</strong> se deriva de tu clave pública. Es como si pintaras el número de tu apartado postal en todos tus candados para que la gente sepa que son tuyos. Por eso puedes compartir tu dirección sin miedo. Lo único que permite es que la gente te envíe cosas (cierre cajas para ti).
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/nft-7219625_1280.png" alt="Un candado (clave pública) y una llave (clave privada)" width={600} height={600} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>La Firma Digital: Demostrando que Eres Tú</h2>
        <p className={styles.paragraph}>
          Pero este par de llaves tiene otro truco increíble bajo la manga: la <strong>firma digital</strong>. No solo sirve para recibir dinero, sino también para enviarlo. Y aquí es donde se demuestra la propiedad.
        </p>
        <p className={styles.paragraph}>
          Cuando quieren enviar una transacción ("Enviar 1 ETH a María"), su wallet hace algo muy ingenioso. Toma el mensaje de la transacción y lo combina con su clave privada, produciendo una especie de sello o firma digital única. Esta firma es como su huella dactilar en esa transacción específica.
        </p>
        <p className={styles.paragraph}>
          Lo genial es que cualquiera puede usar su clave pública (que, recuerden, es pública) para verificar que la firma es auténtica. Pueden comprobar dos cosas:
        </p>
        <ol>
          <li>Que la firma solo pudo haber sido creada por alguien que poseía la clave privada correspondiente.</li>
          <li>Que la firma pertenece a ese mensaje exacto y no a otro. No se puede copiar y pegar en otra transacción.</li>
        </ol>
        <p className={styles.paragraph}>
          Es como si su firma cambiara con cada documento que firman, pero todo el mundo pudiera verificar que, efectivamente, son ustedes quienes han firmado. Y todo esto sin revelar jamás su clave privada. ¡Es el núcleo de la magia!
        </p>

        <h2 className={styles.subtitle}>La Relación Inquebrantable</h2>
        <p className={styles.paragraph}>
          La clave pública y la privada nacen juntas de un proceso matemático. Están intrínsecamente ligadas. Es trivialmente fácil generar una clave pública a partir de una privada, pero es <strong>matemáticamente imposible</strong> (o tardaría más que la edad del universo con los ordenadores actuales) averiguar la clave privada a partir de la pública.
        </p>
        <p className={styles.paragraph}>
          Esta es la propiedad unidireccional que hace que todo el sistema sea seguro. Por eso pueden gritar su clave pública a los cuatro vientos mientras guardan su clave privada bajo siete llaves. Una es para recibir, la otra es para demostrar que eres el dueño. Una es el candado, la otra es la llave. Una es tu dirección, la otra es tu firma. Entender esta dualidad es todo lo que necesitan saber sobre criptografía para usar las criptomonedas de forma segura.
        </p>
      </div>
    </>
  );
}
