import styles from "./NavBar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface Link {
	href: string;
	label: string;
}

interface Props {
	links: Link[];
	handleMenuClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
	isMenuOpen: boolean;
}

export default function NavBar({ links, handleMenuClick, isMenuOpen }: Props) {
	return (
		<nav className={styles.navBar}>
			<button onClick={handleMenuClick} className={styles.burgerMenu}>
				<FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
			</button>
			<section className={styles.links}>
				{links.map(({ href, label }) => {
					return (
						<Link key={label} href={href}>
							{label}
						</Link>
					);
				})}
				<div className={styles.contactBtn}>
					<Link href={"/contact-us"}>Contacto</Link>
				</div>
			</section>
		</nav>
	);
}
