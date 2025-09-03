'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function AuditoriasContratosPage() {
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
        <h1 className={styles.title}>Auditorías de Contratos Inteligentes</h1>
        <p className={styles.paragraph}>
          ¡Excelente! Ya sabemos que en DeFi, el código es la ley. Un contrato inteligente es como una bóveda autónoma que sigue las reglas al pie de la letra. Pero, ¿cómo sabemos si las reglas están bien escritas? ¿Cómo sabemos si el arquitecto no dejó una ventana abierta por accidente? Aquí es donde entra en juego uno de los conceptos más importantes en la seguridad de DeFi: la <strong>auditoría</strong>.
        </p>
        <p className={styles.paragraph}>
          Piensen en esto. Van a construir un rascacielos. No se conforman con que el arquitecto diga "confíen en mí, está bien". Contratan a un equipo de ingenieros independientes para que revisen los planos, para que busquen puntos débiles, para que intenten imaginar todas las formas en que el edificio podría fallar. Una auditoría de un contrato inteligente es exactamente eso: <strong>contratar a un equipo de hackers de élite para que intenten reventar tu código antes de que lo hagan los malos</strong>.
        </p>

        <h2 className={styles.subtitle}>¿Qué Busca un Auditor?</h2>
        <p className={styles.paragraph}>
          Los auditores son como detectives del código. No solo buscan errores obvios. Buscan vulnerabilidades sutiles y complejas, las que un desarrollador normal, centrado en hacer que las cosas funcionen, podría pasar por alto. Algunas de las cosas que buscan son:
        </p>
        <ul>
            <li><strong>Vulnerabilidades conocidas:</strong> Hay una lista de errores comunes que los desarrolladores de contratos inteligentes cometen. Los auditores tienen un checklist y buscan sistemáticamente estos fallos, como el famoso "re-entrancy attack" que derribó a The DAO en los primeros días de Ethereum.</li>
            <li><strong>Lógica de negocio defectuosa:</strong> A veces el código hace exactamente lo que se le programó, pero la idea detrás era defectuosa. ¿Permite el contrato que un usuario retire más dinero del que depositó bajo ciertas condiciones extrañas? Los auditores piensan de forma maliciosa para encontrar estos fallos de lógica.</li>
            <li><strong>Eficiencia del Gas:</strong> Un contrato mal escrito puede ser muy caro de usar. Los auditores también sugieren formas de optimizar el código para que las transacciones cuesten menos gas a los usuarios.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/blockchain-3368174_1280.jpg" alt="Auditoría de Contrato Inteligente" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Una Auditoría No es una Garantía de Inmunidad</h2>
        <p className={styles.paragraph}>
          Aquí viene la parte crucial. Que un proyecto haya sido auditado <strong>NO significa que sea 100% seguro</strong>. Es una señal de que el equipo se toma la seguridad en serio, pero no es una bala de plata. ¿Por qué?
        </p>
        <ul>
            <li><strong>El Alcance es Limitado:</strong> La auditoría cubre el código en un momento específico. Si el equipo actualiza el contrato después de la auditoría, esos cambios no están auditados.</li>
            <li><strong>Los Auditores son Humanos:</strong> Pueden pasar cosas por alto. Las empresas de auditoría más prestigiosas son muy buenas, pero nadie es perfecto.</li>
            <li><strong>La Complejidad es un Desafío:</strong> DeFi es como un juego de Lego gigante. Un contrato puede interactuar con otros cinco contratos, y cada uno de ellos con otros más. La forma en que interactúan puede crear vulnerabilidades que no existen en ninguno de los contratos por separado.</li>
        </ul>
        <p className={styles.paragraph}>
          Una auditoría es una foto, no una película. Es una reducción de riesgo, no su eliminación. Es una bandera verde muy importante, pero no la única que deben buscar.
        </p>

        <h2 className={styles.subtitle}>Cómo Leer un Informe de Auditoría</h2>
        <p className={styles.paragraph}>
          No tienen que ser programadores para sacar provecho de un informe de auditoría. Los proyectos serios publican estos informes. Cuando lo vean, fíjense en estas cosas:
        </p>
        <ul>
            <li><strong>Resumen Ejecutivo:</strong> La mayoría de los informes empiezan con un resumen en lenguaje sencillo. Léanlo.</li>
            <li><strong>Clasificación de los Hallazgos:</strong> Los auditores clasifican los problemas por severidad: Crítico, Alto, Medio, Bajo, Informativo. ¿Encontraron problemas críticos o altos? Y lo más importante, ¿el equipo de desarrollo los solucionó?</li>
            <li><strong>Problemas sin Resolver:</strong> El informe dirá si el equipo arregló los problemas encontrados. Si un equipo ignora una vulnerabilidad crítica señalada por un auditor, es una bandera roja del tamaño de un estadio.</li>
            <li><strong>La Reputación de la Firma Auditora:</strong> No todas las auditorías son iguales. Una auditoría de una firma de primer nivel como Trail of Bits, ConsenSys Diligence, OpenZeppelin o CertiK tiene mucho más peso que una de una empresa desconocida.</li>
        </ul>

        <h2 className={styles.subtitle}>Más Allá de la Auditoría</h2>
        <p className={styles.paragraph}>
          La auditoría es una pieza del rompecabezas de la seguridad. Otras piezas importantes son los <strong>programas de recompensas por errores (bug bounties)</strong>, donde un proyecto ofrece dinero a hackers éticos que encuentren vulnerabilidades, y los <strong>seguros para contratos inteligentes</strong>.
        </p>
        <p className={styles.paragraph}>
          Al final, todo se reduce a pensar en capas. ¿El proyecto está auditado? Bien. ¿Por quién? Mejor. ¿Tienen un programa de bug bounty? Excelente. ¿El equipo es público y tiene una buena reputación? Fantástico. Cada "sí" es una capa más de seguridad y confianza. No se conformen con una sola. Busquen proyectos que se tomen la seguridad como lo que es: la base sobre la que se construye todo lo demás.
        </p>
      </div>
    </>
  );
}
