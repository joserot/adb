import styles from "./Footer.module.css";
import Brands from "./Brands/Brands";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<>
			<Brands />
			<footer className={styles.footer}>
				<div className={styles.footerContainer}>
					<section className={styles.row1}>
						<div className={styles.col}>
							<Link className={styles.logo} href="/">
								<Image
									src={"/img/logo.png"}
									width={100}
									height={100}
									alt="Almacen del bioquimico"
								/>
							</Link>
							<p>
								ADB EMPRESA MISIONERA FORTALECIENDO LA ACTIVIDAD ESTANDO MAS
								CERCA DE USTEDES
							</p>
						</div>
						<div className={styles.col}>
							<h3>Encontranos en:</h3>
							<p>Av. Santa Catalina 2380 - Posadas Mnes.</p>
							<p> ventas@sensemisiones.com.ar</p>
							<p>Tel. celular: 3764 909200</p>
							<p>Tel. fijo: 3765 260071</p>
						</div>
						<div className={styles.col}>
							<h3>Links</h3>
							<Link href={"/about"}>Sobre Nosotros</Link>
							<Link href={"/products"}>Nuestros Productos</Link>
						</div>
						<div className={styles.col}>
							<div className={styles.experience}>
								<span>25+</span>
								<p>Años de experiencia</p>
								<Link href={"/about"}>
									<FontAwesomeIcon icon={faArrowAltCircleRight} />
								</Link>
							</div>
						</div>
					</section>
					<section className={styles.row2}>
						<p>{`© ${getCurrentYear()} Almacen del bioquimico. Todos los derechos reservados.`}</p>
						<p>Diseño y Desarrollo web: jose.rotchen14@gmail.com</p>
					</section>
				</div>
			</footer>
		</>
	);
}
