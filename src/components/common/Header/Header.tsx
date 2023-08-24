import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/products",
		label: "Productos",
	},
	{
		href: "/about",
		label: "Nosotros",
	},
];

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Link className={styles.logo} href="/">
					<Image
						src={"/img/logo.png"}
						width={70}
						height={70}
						alt="Almacen del Bioquimico"
					/>
				</Link>
				<nav className={styles.navbar}>
					{links.map(({ href, label }) => {
						return (
							<Link key={label} href={href}>
								{label}
							</Link>
						);
					})}
				</nav>
				<div className={styles.contactBtn}>
					<Link href={"/contact-us"}>Contactanos</Link>
				</div>
				<button className={styles.burgerMenu}>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
		</header>
	);
}
