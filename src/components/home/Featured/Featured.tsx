import styles from "./Featured.module.css";
import { faStar, faBolt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card/Card";

const featuredList = [
	{
		name: "Lorem ipsum",
		image: "/img/home/1.avif",
		icon: faStar,
	},
	{
		name: "Lorem ipsum",
		image: "/img/home/2.avif",
		icon: faBolt,
	},
	{
		name: "Lorem ipsum",
		image: "/img/home/3.avif",
		icon: faGlobe,
	},
];

export default function Featured() {
	return (
		<article className={styles.container}>
			{featuredList.map((item) => {
				return (
					<Card
						key={item.name}
						name={item.name}
						image={item.image}
						icon={item.icon}
					/>
				);
			})}
		</article>
	);
}
