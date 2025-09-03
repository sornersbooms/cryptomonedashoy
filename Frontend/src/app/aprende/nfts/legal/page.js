'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AspectosLegalesNFTsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const nftsCourse = courseData.nfts;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={nftsCourse.title}
        modules={nftsCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Aspectos Legales y Derechos en NFTs: La Ley de la Selva Digital</h1>
        <p className={styles.paragraph}>
          ¡Hola a todos! Hoy vamos a hablar de algo que a veces parece más complicado que la mecánica cuántica: <strong>los aspectos legales y los derechos en el mundo de los NFTs</strong>. Es un terreno nuevo, un poco salvaje, donde las reglas aún se están escribiendo. Y como en cualquier sistema, entender las reglas es fundamental para no meterse en líos.
        </p>
        <p className={styles.paragraph}>
          Imaginen que están en un país nuevo, con un idioma y unas costumbres que no conocen. Si no aprenden un poco sobre sus leyes, podrían terminar en problemas sin siquiera saber por qué. Con los NFTs es igual. Estamos creando un nuevo tipo de propiedad, y la ley, que es un poco lenta, está tratando de ponerse al día. Pero eso no significa que no haya reglas, ¡solo que son un poco difusas!
        </p>

        <h2 className={styles.subtitle}>¿Qué Compran Realmente Cuando Compran un NFT?</h2>
        <p className={styles.paragraph}>
          Esta es la pregunta del millón, y es donde la gente se confunde. Cuando compran un NFT, ¿están comprando la obra de arte en sí? ¿El copyright? ¿El derecho a usarla como quieran? La respuesta, mis amigos, es: <strong>depende</strong>.
        </p>
        <p className={styles.paragraph}>
          Un NFT es, fundamentalmente, un <strong>certificado de propiedad digital</strong>. Es un registro en la blockchain que dice que ustedes son los dueños de *ese token único*. Pero ese token, por sí solo, no les da automáticamente los derechos de autor sobre la obra digital a la que apunta. Es como si compraran un certificado de autenticidad de un cuadro famoso: son dueños del certificado, y del cuadro, pero no necesariamente tienen el derecho a hacer copias y venderlas.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/libra-4288548_1280.jpg" alt="Balanza de la justicia" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Derechos de Autor y Licencias: El Gran Enredo</h2>
        <p className={styles.paragraph}>
          El <strong>derecho de autor (copyright)</strong> sigue siendo del creador original, a menos que explícitamente se transfiera. Muchos proyectos NFT vienen con <strong>licencias</strong> que especifican qué pueden hacer con el NFT. Algunas licencias son muy permisivas (como las licencias CC0 o Creative Commons), permitiéndoles usar la obra para casi cualquier cosa. Otras son más restrictivas, solo permitiendo el uso personal o no comercial.
        </p>
        <p className={styles.paragraph}>
          Es crucial leer la letra pequeña. Si compran un NFT de un Bored Ape, por ejemplo, la licencia les da ciertos derechos comerciales sobre la imagen. Pero si compran un NFT de un artista independiente, puede que solo estén comprando la pieza digital para su colección personal. ¡No asuman nada!
        </p>

        <h2 className={styles.subtitle}>Regulación y el Futuro de la Ley</h2>
        <p className={styles.paragraph}>
          Los gobiernos de todo el mundo están tratando de entender cómo regular los NFTs. ¿Son activos financieros? ¿Son obras de arte? ¿Son coleccionables? La respuesta a estas preguntas tiene implicaciones fiscales y legales enormes. Lo que hoy es un vacío legal, mañana podría ser una ley estricta.
        </p>
        <p className={styles.paragraph}>
          Además, hay que considerar la jurisdicción. Si compran un NFT de alguien en otro país, ¿qué leyes se aplican si hay un problema? Es un rompecabezas legal fascinante, y aún no tenemos todas las piezas.
        </p>
        <p className={styles.paragraph}>
          Mi consejo, como siempre, es la curiosidad y la precaución. No asuman que porque algo es digital, las leyes no se aplican. Infórmense, lean las licencias, y si tienen dudas, consulten a un experto legal. Porque, al final, la ley es como la física: si no la entienden, puede que les dé un buen golpe. ¡Y eso es todo por hoy!
        </p>
      </div>
    </>
  );
}
