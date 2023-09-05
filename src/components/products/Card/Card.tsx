import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";

export default function Card({ name, image, url }: Product) {
	return (
		<a className={styles.cardLink} target="_blank" href={url}>
			<article className={styles.card}>
				<Image src={image} width={200} height={200} alt={name} />
				<div className={styles.cardText}>
					<button>
						<FontAwesomeIcon icon={faDownload} />
					</button>
					<h3>{name}</h3>
				</div>
			</article>
		</a>
	);
}