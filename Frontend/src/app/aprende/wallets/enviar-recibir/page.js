'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function EnviarRecibirPage() {
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
        <h1 className={styles.title}>Enviando y Recibiendo Cripto: El Correo Digital</h1>
        <p className={styles.paragraph}>
          Muy bien, ya tenemos nuestra wallet configurada, sabemos que guarda nuestras llaves y no las monedas. Ahora, ¿cómo hacemos para que esas monedas se muevan de un sitio a otro? Es como enviar una carta, pero en lugar de papel y sellos, usamos direcciones y firmas digitales. Es un proceso que, una vez que lo entiendes, es increíblemente simple y poderoso.
        </p>

        <h2 className={styles.subtitle}>Recibiendo Cripto: Tu Apartado Postal</h2>
        <p className={styles.paragraph}>
          Esto es lo más fácil. Si alguien quiere enviarte criptomonedas, necesitas darle tu dirección pública. Recuerda, tu dirección es como el número de tu apartado postal. Puedes compartirla con cualquiera sin ningún peligro. 
        </p>
        <ol>
          <li><strong>Encuentra tu Dirección:</strong> Abre tu wallet (MetaMask, Trust Wallet, etc.). Verás tu dirección pública, que suele ser una cadena larga de letras y números que empieza por "0x" (para Ethereum y redes compatibles) o "1" o "bc1" (para Bitcoin).</li>
          <li><strong>Copia la Dirección:</strong> La mayoría de las wallets tienen un botón para copiar la dirección al portapapeles. ¡Úsalo! No la escribas a mano, es muy fácil cometer errores.</li>
          <li><strong>Comparte la Dirección:</strong> Envía esa dirección a la persona o al exchange que te va a enviar las criptomonedas.</li>
          <li><strong>Espera la Confirmación:</strong> Una vez que la transacción se envía, aparecerá en tu wallet. Pero no te asustes si no la ves inmediatamente. Las transacciones en blockchain necesitan ser "confirmadas" por la red, lo que puede tardar desde segundos hasta varios minutos, dependiendo de la congestión de la red y la criptomoneda.</li>
        </ol>
        <p className={styles.paragraph}>
          ¡Y ya está! Tus criptomonedas aparecerán en tu saldo. Es como recibir un email, pero de dinero.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/bitcoin-3411355_1280.jpg" alt="Una flecha de envío y una flecha de recepción de criptomonedas" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Enviando Cripto: La Firma Secreta</h2>
        <p className={styles.paragraph}>
          Aquí es donde usas tu clave privada. Cuando envías criptomonedas, estás creando un mensaje que dice: "Yo, el dueño de esta clave privada, quiero enviar X cantidad de esta moneda a esta otra dirección". Luego, usas tu clave privada para "firmar" ese mensaje, demostrando que eres el dueño legítimo.
        </p>
        <ol>
          <li><strong>Obtén la Dirección del Destinatario:</strong> Pide la dirección pública a la persona o al servicio al que quieres enviar las criptomonedas. ¡Cópiala y pégala! ¡No la escribas a mano!</li>
          <li><strong>Abre tu Wallet y Selecciona "Enviar":</strong> En tu wallet, busca el botón o la opción para "Enviar" o "Send".</li>
          <li><strong>Pega la Dirección:</strong> Pega la dirección del destinatario en el campo correspondiente. ¡VERIFICA! Vuelve a verificar que la dirección es correcta. Un error aquí y tus fondos se perderán para siempre.</li>
          <li><strong>Introduce la Cantidad:</strong> Escribe la cantidad de criptomonedas que quieres enviar.</li>
          <li><strong>Elige la Red (¡Crucial!):</strong> Si estás enviando tokens que existen en varias redes (como USDT o USDC), asegúrate de elegir la red correcta. Si envías USDT de la red Ethereum a una dirección de USDT en la red Binance Smart Chain, ¡tus fondos se perderán! Es como enviar una carta a la dirección correcta, pero al país equivocado.</li>
          <li><strong>Revisa las Tarifas (Gas):</strong> Verás una pequeña tarifa por la transacción (el "gas"). Esto es lo que pagas a los mineros o validadores para que procesen tu transacción y la incluyan en la blockchain.</li>
          <li><strong>Confirma y Firma:</strong> Revisa todos los detalles una última vez. Si todo es correcto, confirma la transacción. Tu wallet usará tu clave privada para firmarla y la enviará a la red.</li>
        </ol>

        <h2 className={styles.subtitle}>Consejos de Seguridad: La Paranoia es tu Amiga</h2>
        <p className={styles.paragraph}>
          En el mundo cripto, es mejor ser un poco paranoico. Aquí van algunos consejos:
        </p>
        <ul>
          <li><strong>Doble Verificación:</strong> Siempre, siempre, verifica la dirección del destinatario. Si es una cantidad grande, considera enviar una pequeña cantidad de prueba primero.</li>
          <li><strong>Cuidado con el Phishing:</strong> Asegúrate de que estás en la página web correcta o usando la aplicación oficial. Los estafadores crean sitios idénticos para robar tus claves.</li>
          <li><strong>Red Correcta:</strong> ¡No te canses de verificar la red! Es el error más común y el más costoso.</li>
        </ul>
        <p className={styles.paragraph}>
          Enviar y recibir criptomonedas es el pan de cada día en este mundo. Es un proceso que te da un control sin precedentes sobre tu dinero. Pero con ese control viene la responsabilidad de hacerlo bien. ¡Practica con pequeñas cantidades hasta que te sientas cómodo!
        </p>
      </div>
    </>
  );
}
