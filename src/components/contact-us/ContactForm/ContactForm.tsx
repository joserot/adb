import styles from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import Map from "./Map/Map";
import Form from "./Form/Form";

export default function ContactForm() {
	return (
		<article className={styles.contactForm}>
			<section className={styles.textContainer}>
				<div className={styles.titleContainer}>
					<FontAwesomeIcon icon={faHeadset} />
					<h2>Contactanos</h2>
				</div>
				<p>Trabaja con nosotros</p>
				<Map />
			</section>
			<Form />
		</article>
	);
}
