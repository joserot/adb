"use client";

import styles from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faComment,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Form() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			name: { value: string };
			subject: { value: string };
			message: { value: string };
			reset: () => void;
		};

		const name = target.name.value;
		const subject = target.subject.value;
		const message = target.message.value;

		if (!name || !subject || !message)
			return alert("Por favor complete todos los campos");

		const textMessage =
			"- Nombre: " +
			name +
			"%0A- Asunto: " +
			subject +
			"%0A - Mensaje: " +
			message;

		const phone = "543764909200";
		const link = `https://wa.me/${phone}?text=${textMessage}`;

		window.open(link, "_blank");

		target.reset();
	};

	return (
		<section className={styles.containerFrom}>
			<form onSubmit={handleSubmit} className={styles.form}>
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
