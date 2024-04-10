import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <article className={styles.hero}>
      <Image
        className={styles.heroImage}
        src={"/img/hero-contact.webp"}
        alt={"Hero Contact"}
        width={1000}
        height={500}
      />
      <h1>Contacto</h1>
      <footer>
        <div className={styles.footerContainer}>
          <Link href={"/"}>Home</Link>
          <span>-</span>
          <span>Contacto</span>
        </div>
      </footer>
    </article>
  );
}
