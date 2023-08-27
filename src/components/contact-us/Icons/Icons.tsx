import styles from "./Icons.module.css";
import Image from "next/image";

const iconsData = [
	{
		title: "Ubicación",
		image: "/img/contact-us/icon-1.png",
		data: "lorem ipsum lorem ipsum 123",
	},
	{
		title: "Email",
		image: "/img/contact-us/icon-2.png",
		data: "loremipsum@gmail.com",
	},
	{
		title: "Teléfono",
		image: "/img/contact-us/icon-3.png",
		data: "123456789",
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
