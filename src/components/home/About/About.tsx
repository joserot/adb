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
					src="/img/home/about-2.avif"
					alt="Sobre el Almacen Del Bioquimico"
					width={150}
					height={150}
				/>
				<Image
					className={styles.image2}
					src="/img/home/about.avif"
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam Lorem
					ipsum dolor sit amet consectetur adipisicing elit QuisquamLorem ipsum
					dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum
				</p>
				<ul>
					<li>
						<FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor sit
					</li>
					<li>
						<FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor sit amet
						consectetur
					</li>
				</ul>
				<Link href={"/products"}>Conoce nuestros productos</Link>
			</section>
		</article>
	);
}
