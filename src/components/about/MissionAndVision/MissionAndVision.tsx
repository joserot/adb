import styles from "./MissionAndVision.module.css";
import Image from "next/image";

export default function MissionAndVision() {
	return (
		<article className={styles.mission}>
			<Image
				className={styles.image}
				src={"/img/about/mission.avif"}
				width={700}
				height={700}
				alt="Almacen del bioquimico"
			/>
			<section className={styles.missionContainer}>
				<div className={styles.missionContentContainer}>
					<h2 className={styles.title}>Almacen del bioquimico</h2>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
						cursus sem. Fusce feugiat nibh ante. Sed metus nunc, laoreet id
						rutrum in, fringilla et dui. Nullam augue justo, auctor nec turpis
						vel, sollicitudin venenatis tortor. Aliquam porttitor id urna sed
						suscipit. Nunc tempus velit a congue sollicitudin. Phasellus mattis
						orci id risus volutpat, a ultrices sapien tempus. Donec vel accumsan
						tortor. Nulla leo quam, rhoncus vitae nibh ut, faucibus sodales
						massa.
					</p>
					<div className={styles.textContainer}>
						<h3>Misión</h3>
						<p>
							Ser la compañía elegida a nivel regional por brindar soluciones
							innovadoras en la distribución y comercialización de productos y
							servicios médicos.
						</p>
					</div>
					<div className={styles.textContainer}>
						<h3>Visión</h3>
						<p>
							Contribuir al bienestar de la comunidad proveyendo productos
							médicos de calidad y con tecnologías innovadoras. Mantener canales
							de comunicación eficientes con los profesionales y centros de la
							salud, atender sus necesidades específicas y colaborar con su
							crecimiento profesional y/u organizacional. Aprovechar nuestra
							capacidad procedural, organizativa y operativa para brindar
							soluciones en la comercialización de los productos médicos.
						</p>
					</div>
				</div>
			</section>
		</article>
	);
}
