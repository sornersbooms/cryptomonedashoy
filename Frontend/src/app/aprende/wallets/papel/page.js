'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function PapelPage() {
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
        <h1 className={styles.title}>Wallets de Papel: El Tesoro Escondido</h1>
        <p className={styles.paragraph}>
          Hemos hablado de wallets calientes (conectadas a internet) y frías (desconectadas). Las de hardware son la joya de la corona para la seguridad. Pero, ¿y si les digo que hay una forma aún más "fría" de guardar sus claves? Una forma que no necesita baterías, ni actualizaciones de software, ni conexión a internet. Una forma tan simple que es casi ridícula: una <strong>wallet de papel</strong>.
        </p>
        <p className={styles.paragraph}>
          Una wallet de papel es, literalmente, un trozo de papel. En ese papel se imprimen tu clave pública (tu dirección) y tu clave privada (tu secreto) en formato de texto y, a menudo, como códigos QR. Eso es todo. No hay electrónica, no hay software, solo tinta y papel.
        </p>

        <h2 className={styles.subtitle}>La Simplicidad Extrema</h2>
        <p className={styles.paragraph}>
          Imaginen que quieren esconder un mapa del tesoro. ¿Lo guardan en un ordenador conectado a internet? ¡No! Lo imprimen, lo meten en una botella y lo entierran en una isla desierta. Una wallet de papel es eso. Es la forma más básica de almacenamiento en frío.
        </p>
        <p className={styles.paragraph}>
          Para crear una, usas un generador de wallets de papel (¡siempre offline y desde una máquina limpia!). El programa genera un par de claves, las imprimes, y luego borras el programa y desconectas la máquina. Tus claves nunca tocaron internet. Están ahí, en ese trozo de papel, esperando.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Una wallet de papel con códigos QR" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Ventajas: La Seguridad Absoluta (Casi)</h2>
        <p className={styles.paragraph}>
          La principal ventaja es la seguridad. Al estar completamente desconectada de internet, es inmune a los ataques online, a los virus, a los hackers. Es el búnker definitivo para tus criptomonedas. Si la guardas bien, nadie puede robarte tus claves de forma remota.
        </p>
        <p className={styles.paragraph}>
          Además, es barata. Un trozo de papel y una impresora. No necesitas comprar un dispositivo de hardware caro.
        </p>

        <h2 className={styles.subtitle}>Desventajas: La Fragilidad del Papel</h2>
        <p className={styles.paragraph}>
          Pero, como todo en la vida, la simplicidad tiene un precio. El papel es frágil. Puede quemarse, mojarse, romperse, desvanecerse la tinta, ser comido por insectos, o simplemente perderse. Si pierdes ese papel, ¡has perdido tus monedas para siempre! No hay copia de seguridad en la nube, no hay servicio de atención al cliente.
        </p>
        <p className={styles.paragraph}>
          Además, usarla es un engorro. Para gastar tus monedas, tienes que "importar" la clave privada a una wallet de software. Esto es peligroso, porque una vez que la clave privada toca un dispositivo conectado a internet, deja de ser una wallet fría y se convierte en una caliente, expuesta a los mismos riesgos. Lo ideal es que, una vez que importas la clave para gastar, vacíes la wallet de papel por completo y generes una nueva si quieres volver a usar este método.
        </p>

        <h2 className={styles.subtitle}>¿Para Quién es?</h2>
        <p className={styles.paragraph}>
          Las wallets de papel no son para el uso diario. Son para el almacenamiento a largo plazo de grandes cantidades de criptomonedas, lo que se conoce como "cold storage" o "almacenamiento en frío". Son para el inversor que compra y no piensa tocar sus monedas en años.
        </p>
        <p className={styles.paragraph}>
          Hoy en día, con la mejora de las wallets de hardware, las wallets de papel son menos comunes. Las de hardware ofrecen una seguridad similar con mucha más conveniencia y menos riesgo de errores humanos (como escribir mal una clave). Pero la idea fundamental de la wallet de papel, la de desconectar tus claves de internet, sigue siendo la base de la seguridad en el mundo cripto. Es la forma más pura de auto-custodia.
        </p>
      </div>
    </>
  );
}
