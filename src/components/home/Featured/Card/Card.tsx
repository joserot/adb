import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./Card.module.css";

interface Props {
	name: string;
	image: string;
	icon: IconDefinition;
}

export default function Card({ name, image, icon }: Props) {
	return (
		<article className={styles.card}>
			<Image
				className={styles.image}
				src={image}
				alt={name}
				width={300}
				height={300}
			/>
			<div className={styles.textContainer}>
				<FontAwesomeIcon className={styles.icon} icon={icon} />
				<h3>{name}</h3>
			</div>
		</article>
	);
}
