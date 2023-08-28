import styles from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faComment,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Form() {
	return (
		<section className={styles.containerFrom}>
			<form className={styles.form}>
				<label>
					<FontAwesomeIcon icon={faUser} />
					<input type="text" placeholder="Nombre completo" name="name" />
				</label>
				<label>
					<FontAwesomeIcon icon={faComment} />
					<input type="text" placeholder="Asunto" name="subject" />
				</label>
				<label>
					<FontAwesomeIcon icon={faEnvelope} />
					<textarea name="message" placeholder="Mensaje"></textarea>
				</label>
				<button className={styles.formButton}>Enviar Mensaje</button>
			</form>
		</section>
	);
}
