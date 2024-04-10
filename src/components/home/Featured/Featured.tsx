import styles from "./Featured.module.css";
import { faStar, faBolt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card/Card";

const featuredList = [
  {
    name: "Innovación Tecnológica",
    image: "/img/home/1.webp",
    icon: faStar,
  },
  {
    name: "Eficiencia",
    image: "/img/home/2.webp",
    icon: faBolt,
  },
  {
    name: "Atención Digital",
    image: "/img/home/3.webp",
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
