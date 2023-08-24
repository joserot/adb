import styles from "./Hero.module.css";

export default function HeroHome() {
	return (
		<article className={styles.hero}>
			<div className={styles.content}>
				<h2>Almacen del Bioquimico</h2>
				<p>Insumos para Laboratorio</p>
			</div>
			<div className={styles.waves}></div>
		</article>
	);
}
