import Card from "../Card/Card";
import styles from "./Catalogue.module.css";

interface Props {
	productsList: Product[];
}

export default function Catalogue({ productsList }: Props) {
	return (
		<section className={styles.container}>
			{productsList.map((product) => {
				return (
					<Card
						key={product.name}
						name={product.name}
						image={product.image}
						url={product.url}
					/>
				);
			})}
		</section>
	);
}
