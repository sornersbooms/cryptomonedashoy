'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function FuturoSeguridadPage() {
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
        <h1 className={styles.title}>El Futuro de la Seguridad en Cripto</h1>
        <p className={styles.paragraph}>
          Muy bien, hemos recorrido un largo camino. Hemos hablado de llaves, de estafas, de cómo protegerse en este Salvaje Oeste digital. Ahora, miremos hacia adelante. ¿Cómo será la seguridad en el mundo cripto en el futuro? ¿Será siempre una batalla cuesta arriba, o la tecnología nos dará nuevas herramientas para estar más tranquilos?
        </p>
        <p className={styles.paragraph}>
          Piensen en los primeros días de internet. Era un lugar peligroso, lleno de virus y estafas. Pero con el tiempo, la tecnología evolucionó: antivirus, firewalls, cifrado... La seguridad se volvió más robusta y, para el usuario promedio, más invisible. Con las criptomonedas, estamos en una fase similar. La curva de aprendizaje es empinada, pero hay mucha gente brillante trabajando para hacerla más plana.
        </p>

        <h2 className={styles.subtitle}>Wallets Más Inteligentes y Seguras</h2>
        <p className={styles.paragraph}>
          El futuro de la seguridad empieza en la wallet. Las wallets serán cada vez más inteligentes, con funciones de seguridad integradas que hoy nos parecen ciencia ficción:
        </p>
        <ul>
            <li><strong>Recuperación Social:</strong> Ya lo mencionamos. En lugar de una frase semilla que puedes perder, podrás designar a amigos o familiares de confianza que te ayuden a recuperar el acceso a tus fondos si pierdes tu dispositivo.</li>
            <li><strong>Abstracción de Cuentas (Account Abstraction):</strong> Esto es un concepto técnico, pero la idea es que tu wallet se comporte más como una cuenta bancaria moderna. Podrás establecer límites de gasto diarios, requerir múltiples firmas para transacciones grandes, o incluso congelar tu cuenta si detectas actividad sospechosa. Todo esto programado directamente en la blockchain.</li>
            <li><strong>Autenticación Biométrica Avanzada:</strong> El uso de huellas dactilares o reconocimiento facial será más común y seguro, integrado directamente con la criptografía de la wallet.</li>
        </ul>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-7693848_1280.png" alt="Futuro de la Seguridad en Cripto" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Inteligencia Artificial al Rescate</h2>
        <p className={styles.paragraph}>
          La Inteligencia Artificial (IA) jugará un papel enorme. Los sistemas de IA podrán analizar patrones de transacciones en tiempo real, detectando actividades sospechosas mucho antes de que un humano pueda hacerlo. Imaginen un guardián de IA que monitorea su wallet y les alerta si detecta un intento de phishing o un movimiento inusual de fondos.
        </p>
        <p className={styles.paragraph}>
          También ayudará a identificar y bloquear sitios web de phishing, a analizar contratos inteligentes en busca de vulnerabilidades y a predecir nuevos vectores de ataque. La IA no reemplazará la necesidad de que ustedes sean cuidadosos, pero será una herramienta poderosa en su arsenal de defensa.
        </p>

        <h2 className={styles.subtitle}>Regulación Más Clara y Global</h2>
        <p className={styles.paragraph}>
          Aunque a muchos no les guste, una regulación más clara y armonizada a nivel global traerá más seguridad. No me refiero a una regulación que ahogue la innovación, sino a una que establezca reglas de juego claras para los exchanges, los custodios y los proyectos. Esto reducirá las estafas, protegerá a los inversores y hará que el ecosistema sea más atractivo para el dinero institucional.
        </p>
        <p className={styles.paragraph}>
          Veremos más licencias, más auditorías obligatorias y más cooperación entre países para perseguir a los criminales. Esto no significa que la descentralización desaparezca, sino que los puntos de contacto entre el mundo cripto y el mundo tradicional estarán mejor protegidos.
        </p>

        <h2 className={styles.subtitle}>Educación y Conciencia: El Factor Humano</h2>
        <p className={styles.paragraph}>
          Por mucha tecnología que tengamos, el factor humano siempre será el eslabón más débil o el más fuerte. El futuro de la seguridad también depende de que más gente entienda los principios básicos. Cursos como este, información clara y accesible, y una cultura de escepticismo saludable son fundamentales.
        </p>
        <p className={styles.paragraph}>
          A medida que las criptomonedas se vuelvan más comunes, la educación en seguridad será tan importante como saber usar un email. La gente aprenderá a identificar estafas, a proteger sus claves y a usar las herramientas de seguridad de forma intuitiva.
        </p>

        <h2 className={styles.subtitle}>Un Futuro Más Seguro, Pero No Infalible</h2>
        <p className={styles.paragraph}>
          El futuro de la seguridad en cripto es prometedor. Veremos wallets más fáciles de usar y más resistentes a los ataques, IA que nos protege y una regulación que aporta claridad. Pero una cosa es segura: <strong>la seguridad nunca será infalible</strong>. Siempre habrá nuevos trucos, nuevos atacantes y nuevas vulnerabilidades.
        </p>
        <p className={styles.paragraph}>
          La seguridad es un proceso continuo, no un destino. Es una carrera armamentista constante entre los que construyen y los que intentan destruir. Pero con cada nueva herramienta, con cada nueva lección aprendida, el ecosistema se vuelve más robusto. Y ustedes, al entender estos principios, son parte activa de esa evolución. ¡Así que sigan aprendiendo y manténganse seguros!
        </p>
      </div>
    </>
  );
}
