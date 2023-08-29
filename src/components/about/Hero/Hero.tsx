import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<article className={styles.hero}>
			<Image
				className={styles.heroImage}
				src={"/img/about/hero-about.avif"}
				alt={"Hero Contact"}
				width={1000}
				height={500}
			/>
			<h1>Nosotros</h1>
			<footer>
				<div className={styles.footerContainer}>
					<Link href={"/"}>Home</Link>
					<span>-</span>
					<span>Nosotros</span>
				</div>
			</footer>
		</article>
	);
}
