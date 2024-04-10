import styles from "./About.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFlaskVial } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <article className={styles.container}>
      <section className={styles.col1}>
        <Image
          className={styles.image1}
          src="/img/home/about.webp"
          alt="Sobre el Almacen Del Bioquimico"
          width={150}
          height={150}
        />
        <Image
          className={styles.image2}
          src="/img/home/about-2.webp"
          alt="Sobre el Almacen Del Bioquimico"
          width={400}
          height={400}
        />
      </section>
      <section className={styles.col2}>
        <div className={styles.titleContainer}>
          <FontAwesomeIcon icon={faFlaskVial} />
          <h2>Sobre el Almacen Del Bioquimico</h2>
        </div>
        <h3>Los productos de mejor calidad</h3>
        <p>
          Almacén del Bioquímico contribuye a su mejor planificación de compras
          y de stock permanete para su Laboratorio. Distribuye insumos de
          laboratorio y material descartable de manera inmediata. Nuestro
          compromiso es garantizar la disponibilidad y eficiencia en la entrega
          de los productos requeridos
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Asesoramiento y pronta
            respuesta
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Entrega rápida y confiable.
          </li>
        </ul>
        <Link href={"/products"}>Conoce nuestros productos</Link>
      </section>
    </article>
  );
}
