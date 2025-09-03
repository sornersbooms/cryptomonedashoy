'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import CourseSidebar from '@/components/CourseSidebar';
import courseData from '@/lib/courseData';
import Image from 'next/image';

export default function MarketplacesNFTPage() {
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
        <h1 className={styles.title}>Marketplaces de NFTs: Los Grandes Bazares Digitales</h1>
        <p className={styles.paragraph}>
          ¡Hola amigos! Hoy vamos a explorar algo fascinante: los <strong>marketplaces de NFTs</strong>. Imaginen un enorme mercado al aire libre, como los que existían en las antiguas civilizaciones, pero completamente digital y abierto las 24 horas. Eso es un marketplace de NFTs en esencia.
        </p>
        <p className={styles.paragraph}>
          Cuando era niño, me encantaba ir a las tiendas de coleccionables. Había cartas, cómics, figuras, todas organizadas cuidadosamente. Cada objeto tenía su historia y su valor. Los marketplaces de NFTs son exactamente eso, pero llevados al mundo digital y con algunas ventajas sorprendentes que solo la tecnología blockchain puede ofrecer.
        </p>

        <h2 className={styles.subtitle}>¿Qué es un Marketplace de NFTs?</h2>
        <p className={styles.paragraph}>
          Un marketplace de NFTs es simplemente una plataforma donde puedes <strong>comprar, vender e intercambiar</strong> tokens no fungibles. Es como un eBay o un Amazon, pero especializado en activos digitales únicos. Estos mercados conectan a creadores con coleccionistas, y proporcionan las herramientas necesarias para que las transacciones sean seguras y verificables.
        </p>
        <p className={styles.paragraph}>
          Lo interesante es que estos marketplaces no almacenan realmente los NFTs. Recuerden que los NFTs existen en la blockchain, no en un servidor centralizado. Lo que hace el marketplace es proporcionar una interfaz amigable para interactuar con la blockchain, mostrando metadatos, imágenes y facilitando las transacciones.
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Image src="/images/cryptocurrency-3409658_1280.jpg" alt="Interfaz de un marketplace de NFTs mostrando colecciones digitales" width={600} height={337} style={{ borderRadius: '12px' }} />
        </div>

        <h2 className={styles.subtitle}>Los Grandes Jugadores: Un Tour por los Marketplaces Principales</h2>
        <p className={styles.paragraph}>
          Vamos a conocer algunos de los marketplaces más importantes. Es como si visitáramos diferentes ciudades, cada una con su propia cultura y especialidad:
        </p>

        <h3 className={styles.subsubtitle}>OpenSea: El Océano de Posibilidades</h3>
        <p className={styles.paragraph}>
          <strong>OpenSea</strong> es el marketplace más grande y conocido. Imagínenlo como Nueva York: enorme, diverso y con algo para todos. Aquí pueden encontrar prácticamente cualquier tipo de NFT: arte, música, dominios, coleccionables virtuales, objetos de juegos... La lista es interminable.
        </p>
        <p className={styles.paragraph}>
          Lo que hace especial a OpenSea es su <strong>accesibilidad</strong>. Cualquiera puede crear (o "mintear") un NFT sin conocimientos técnicos avanzados. También soporta múltiples blockchains, no solo Ethereum, lo que amplía enormemente las posibilidades.
        </p>

        <h3 className={styles.subsubtitle}>Rarible: El Poder de la Comunidad</h3>
        <p className={styles.paragraph}>
          <strong>Rarible</strong> es como un mercado de artesanos donde los propios vendedores tienen voz y voto en cómo se gestiona el mercado. Utiliza un token de gobernanza llamado RARI que permite a los usuarios participar en las decisiones de la plataforma. Es un enfoque más <strong>descentralizado</strong> y comunitario.
        </p>

        <h3 className={styles.subsubtitle}>Foundation: La Galería Exclusiva</h3>
        <p className={styles.paragraph}>
          Si OpenSea es un gran bazar, <strong>Foundation</strong> es más como una galería de arte exclusiva. Es un marketplace curado donde los artistas necesitan invitaciones para poder vender. Esto crea un ambiente más selecto y, a menudo, de mayor calidad artística. Las obras se venden mediante subastas, lo que añade emoción al proceso.
        </p>

        <h3 className={styles.subsubtitle}>Nifty Gateway: El Marketplace de las Celebridades</h3>
        <p className={styles.paragraph}>
          <strong>Nifty Gateway</strong> se ha hecho famoso por colaborar con artistas reconocidos y celebridades. Es como una galería de lujo en el centro de la ciudad. Aquí es donde Beeple vendió su famosa obra por 69 millones de dólares. Una característica interesante es que permite comprar NFTs con tarjeta de crédito, no solo con criptomonedas.
        </p>

        <h3 className={styles.subsubtitle}>SuperRare: La Boutique de Arte Digital</h3>
        <p className={styles.paragraph}>
          <strong>SuperRare</strong> se enfoca exclusivamente en arte digital de edición única. Cada obra en SuperRare es única (1 de 1), lo que aumenta su rareza y potencial valor. Es como una galería de arte contemporáneo muy selectiva, donde cada pieza tiene su certificado de autenticidad.
        </p>

        <h2 className={styles.subtitle}>¿Cómo Funcionan? El Mecanismo Detrás de la Cortina</h2>
        <p className={styles.paragraph}>
          Ahora, vamos a desmontar el juguete para ver cómo funciona por dentro. Cuando usas un marketplace de NFTs, estás interactuando con <strong>contratos inteligentes</strong> en la blockchain. Estos contratos son como pequeños programas automáticos que ejecutan las reglas de la transacción sin necesidad de intermediarios.
        </p>
        <p className={styles.paragraph}>
          Cuando alguien pone a la venta un NFT, está dando permiso al contrato inteligente del marketplace para transferir el NFT cuando se cumplan ciertas condiciones (generalmente, cuando alguien paga el precio solicitado). El marketplace cobra una comisión por este servicio, típicamente entre el 2.5% y el 15% del valor de la venta.
        </p>

        <h3 className={styles.subsubtitle}>El Proceso de Compra-Venta</h3>
        <p className={styles.paragraph}>
          Vamos a seguir el viaje de un NFT desde su creación hasta su venta:
        </p>
        <ol className={styles.list}>
          <li className={styles.listItem}><strong>Creación (Minting):</strong> El artista crea el NFT en el marketplace, subiendo el archivo digital y estableciendo los metadatos (título, descripción, etc.). Esto requiere pagar una tarifa de gas en la blockchain.</li>
          <li className={styles.listItem}><strong>Listado:</strong> El NFT se pone a la venta, ya sea a un precio fijo o mediante una subasta.</li>
          <li className={styles.listItem}><strong>Descubrimiento:</strong> Los compradores exploran el marketplace, buscan, filtran y encuentran NFTs que les interesan.</li>
          <li className={styles.listItem}><strong>Compra:</strong> Un comprador adquiere el NFT pagando con criptomonedas (generalmente ETH, pero puede variar según la plataforma).</li>
          <li className={styles.listItem}><strong>Transferencia:</strong> El contrato inteligente transfiere automáticamente el NFT al comprador y el dinero al vendedor (menos las comisiones).</li>
          <li className={styles.listItem}><strong>Propiedad:</strong> El nuevo propietario puede mantener el NFT, mostrarlo en su perfil, o revenderlo en el futuro.</li>
        </ol>

        <h2 className={styles.subtitle}>Comisiones por Ventas Secundarias: La Revolución para los Creadores</h2>
        <p className={styles.paragraph}>
          Aquí hay algo verdaderamente revolucionario: los <strong>royalties automáticos</strong>. En el mundo tradicional del arte, cuando un artista vende una obra, no recibe nada si esa obra se revenda por un precio mayor en el futuro. Con los NFTs, los creadores pueden programar una comisión automática (típicamente entre el 5% y el 10%) que recibirán cada vez que su obra se revenda. ¡Para siempre!
        </p>
        <p className={styles.paragraph}>
          Imaginen a un músico que vende una canción como NFT por $100. Años después, esa canción se vuelve muy valiosa y se vende por $10,000. Con un royalty del 10%, el artista original recibiría automáticamente $1,000 de esa venta secundaria. Y lo mismo ocurriría con todas las ventas futuras. Es un cambio de paradigma en cómo los creadores pueden beneficiarse de su trabajo a largo plazo.
        </p>

        <h2 className={styles.subtitle}>Consejos Prácticos: Navegando los Marketplaces con Inteligencia</h2>
        <p className={styles.paragraph}>
          Si están pensando en aventurarse en estos bazares digitales, aquí tienen algunos consejos prácticos:
        </p>
        <ul>
          <li><strong>Investiguen antes de comprar:</strong> Verifiquen la autenticidad del creador y la historia de ventas del NFT.</li>
          <li><strong>Entiendan las tarifas:</strong> Además del precio del NFT, tendrán que pagar tarifas de gas (el combustible de la blockchain) que pueden ser significativas.</li>
          <li><strong>Seguridad primero:</strong> Usen wallets seguras y nunca compartan sus claves privadas.</li>
          <li><strong>Diversifiquen:</strong> Si están invirtiendo, no pongan todos sus huevos en la misma canasta.</li>
          <li><strong>Valoren la utilidad:</strong> Más allá de la especulación, piensen en el valor real y la utilidad del NFT que están adquiriendo.</li>
        </ul>

        <h2 className={styles.subtitle}>El Futuro de los Marketplaces: Hacia Dónde Vamos</h2>
        <p className={styles.paragraph}>
          Los marketplaces de NFTs están evolucionando rápidamente. Estamos viendo tendencias interesantes como:
        </p>
        <ul>
          <li><strong>Marketplaces especializados:</strong> Plataformas dedicadas a nichos específicos como música, deportes o bienes raíces virtuales.</li>
          <li><strong>Integración con metaversos:</strong> Lugares donde puedes mostrar tus NFTs en entornos virtuales.</li>
          <li><strong>Soluciones de capa 2:</strong> Tecnologías que reducen las tarifas de gas y hacen las transacciones más accesibles.</li>
          <li><strong>Mayor interoperabilidad:</strong> La capacidad de mover NFTs entre diferentes blockchains y plataformas.</li>
        </ul>

        <h2 className={styles.subtitle}>Conclusión: El Gran Bazar Digital</h2>
        <p className={styles.paragraph}>
          Los marketplaces de NFTs son mucho más que lugares para comprar imágenes digitales caras. Son ecosistemas completos que están redefiniendo cómo valoramos, intercambiamos y poseemos activos digitales. Han abierto nuevas posibilidades para creadores, coleccionistas e inversores, y apenas estamos viendo el comienzo de su potencial.
        </p>
        <p className={styles.paragraph}>
          Como con cualquier tecnología emergente, habrá altibajos, burbujas que estallarán y nuevas oportunidades que surgirán. Lo importante es entender los fundamentos, mantenerse informado y, si deciden participar, hacerlo con conocimiento y prudencia.
        </p>
        <p className={styles.paragraph}>
          ¡Y eso es todo sobre los marketplaces de NFTs! Un fascinante punto de encuentro donde el arte, la tecnología y el comercio se fusionan para crear algo completamente nuevo. ¿No es maravilloso vivir en tiempos tan interesantes?
        </p>
      </div>
    </>
  );
}