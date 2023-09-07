import styles from "./Icons.module.css";
import Image from "next/image";

const iconsData = [
	{
		title: "Ubicación",
		image: "/img/contact-us/icon-1.png",
		data: "Av. Santa Catalina 2380 - Posadas Mnes.",
	},
	{
		title: "Email",
		image: "/img/contact-us/icon-2.png",
		data: "ventas@sensemisiones.com.ar",
	},
	{
		title: "Teléfono",
		image: "/img/contact-us/icon-3.png",
		data: "3764 909200",
	},
];

export default function Icons() {
	return (
		<article className={styles.icons}>
			<div className={styles.iconsContainer}>
				{iconsData.map((icon) => {
					return (
						<section key={icon.title} className={styles.icon}>
							<div className={styles.imageContainer}>
								<Image
									src={icon.image}
									alt={icon.title}
									width={50}
									height={50}
								/>
							</div>
							<h3>{icon.title}</h3>
							<p>{icon.data}</p>
						</section>
					);
				})}
			</div>
		</article>
	);
}
