'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function HerramientasTraderPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const tradingCourse = courseData.trading;

  return (
    <>
      <CourseSidebar
        isOpen={isSidebarOpen}
        title={tradingCourse.title}
        modules={tradingCourse.modules}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>19. Herramientas del Trader</h1>
        <p className={styles.paragraph}>
          ¡Hola, futuros maestros del mercado! Hoy vamos a hablar de algo fundamental para cualquier científico, ingeniero o, en nuestro caso, trader: las herramientas. Imaginen a un carpintero sin martillo, a un astrónomo sin telescopio, o a un físico sin su pizarra llena de ecuaciones. Simplemente no funciona, ¿verdad? En el trading, las herramientas son nuestros ojos, nuestros oídos y, a veces, hasta nuestro cerebro extendido.
        </p>
        <p className={styles.paragraph}>
          No se trata de tener la herramienta más cara o la más sofisticada. Se trata de entender qué hace cada una, cómo funciona y, lo más importante, cómo usarla para observar el universo del mercado con mayor claridad.
        </p>

        <h2 className={styles.subtitle}>1. Plataformas de Trading: Nuestro Laboratorio</h2>
        <p className={styles.paragraph}>
          Piensen en las plataformas de trading como su laboratorio personal. Aquí es donde van a realizar sus experimentos, observar los datos y ejecutar sus hipótesis. Las más comunes son las que ofrecen los exchanges (casas de cambio) centralizados como Binance, Coinbase, Kraken, etc. También existen plataformas descentralizadas (DEXs) como Uniswap o PancakeSwap, que funcionan de manera diferente.
        </p>
        <p className={styles.paragraph}>
          Estas plataformas les dan acceso a los gráficos de precios, a las órdenes de compra y venta, y a su cartera. Es crucial que se familiaricen con la interfaz, que sepan dónde está cada botón y cómo funciona cada tipo de orden. Es su espacio de trabajo, y un buen científico conoce su laboratorio al dedillo.
        </p>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/crypto-7678815_1280.jpg" alt="Plataforma de trading con gráficos y datos" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>2. Herramientas de Gráficos y Análisis: El Microscopio y el Telescopio</h2>
        <p className={styles.paragraph}>
          Aquí es donde la cosa se pone interesante. Necesitamos herramientas para ver lo que está pasando en el mercado, tanto a nivel microscópico (movimientos de precios muy pequeños) como telescópico (tendencias a largo plazo).
        </p>
        <ul>
          <li>
            <strong>TradingView:</strong> Esta es la navaja suiza del análisis técnico. Es una plataforma web que les permite ver gráficos de casi cualquier activo, aplicar indicadores, dibujar líneas de tendencia, identificar patrones y mucho más. Es como tener un microscopio y un telescopio en uno.
          </li>
          <li>
            <strong>Indicadores Técnicos:</strong> Son como los medidores en un laboratorio. Nos dan información sobre el "estado" del mercado: ¿está sobrecomprado o sobrevendido? ¿Hay impulso? ¿La volatilidad es alta? Ejemplos son el RSI, MACD, Bandas de Bollinger, etc. No son bolas de cristal, son herramientas para interpretar datos.
          </li>
          <li>
            <strong>Herramientas de Dibujo:</strong> Líneas de tendencia, soportes y resistencias, retrocesos de Fibonacci. Son como las reglas y compases del trader. Nos ayudan a visualizar los niveles clave y las posibles trayectorias del precio.
          </li>
        </ul>

        <h2 className={styles.subtitle}>3. Fuentes de Noticias y Datos: El Periódico Científico</h2>
        <p className={styles.paragraph}>
          El mercado no solo se mueve por números; también se mueve por información. Necesitamos estar al tanto de lo que sucede en el mundo, especialmente en el espacio cripto.
        </p>
        <ul>
          <li>
            <strong>Sitios de Noticias Cripto:</strong> CoinDesk, CoinTelegraph, The Block, Decrypt. Son sus periódicos científicos. Les mantendrán informados sobre los desarrollos, regulaciones, lanzamientos de proyectos y eventos que pueden afectar el mercado.
          </li>
          <li>
            <strong>Redes Sociales (Twitter, Telegram, Discord):</strong> Con precaución. Son como los pasillos de una conferencia científica. Pueden encontrar información valiosa y análisis interesantes, pero también mucho ruido y desinformación. Aprendan a filtrar.
          </li>
          <li>
            <strong>Calendarios Económicos/Cripto:</strong> Para estar al tanto de eventos importantes como reuniones de la Fed, lanzamientos de proyectos, actualizaciones de redes, etc.
          </li>
        </ul>

        <h2 className={styles.subtitle}>4. Herramientas de Gestión de Riesgos: El Paracaídas</h2>
        <p className={styles.paragraph}>
          Esta es, quizás, la herramienta más importante de todas, aunque no sea un software o una plataforma.
        </p>
        <ul>
          <li>
            <strong>Calculadoras de Posición:</strong> Para determinar el tamaño adecuado de su operación en función de su capital y su tolerancia al riesgo.
          </li>
          <li>
            <strong>Diario de Trading:</strong> Un cuaderno donde registran cada operación, sus razones para entrar y salir, sus emociones y los resultados. Es su laboratorio de autoevaluación. Un científico siempre anota sus experimentos.
          </li>
          <li>
            <strong>Stop-Loss y Take-Profit:</strong> Órdenes automáticas para limitar pérdidas y asegurar ganancias. Son sus sistemas de seguridad.
          </li>
        </ul>

        <h2 className={styles.subtitle}>La Lección de Feynman sobre las Herramientas</h2>
        <p className={styles.paragraph}>
          Feynman decía que "la ciencia es la creencia en la ignorancia de los expertos". No confíen ciegamente en una herramienta o en un indicador. Entiendan cómo funcionan, pruebenlas, y úsenlas para formar sus propias conclusiones. Las herramientas no piensan por ustedes; les ayudan a pensar mejor. Así que, armados con estas herramientas y una mente curiosa, ¡salgan y exploren el fascinante universo del trading!
        </p>
      </div>
    </>
  );
}