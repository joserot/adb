import styles from "./Map.module.css";

export default function Map() {
	return (
		<div className={styles.mapContainer}>
			<iframe
				className={styles.map}
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.1511585333915!2d-55.91183928446332!3d-27.37099428293241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be3e941ff9c1%3A0x63d23ebc1deea34c!2sAv.%20Sta.%20Catalina%202380%2C%20N3301BOC%20Posadas%2C%20Misiones!5e0!3m2!1sen!2sar!4v1666882319366!5m2!1sen!2sar"
				loading="lazy"
			></iframe>
		</div>
	);
}
