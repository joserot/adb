"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";

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
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();

		setIsMenuOpen(!isMenuOpen);
	};

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
					<Link href={"/contact-us"}>
						Contactanos
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
				<button onClick={handleMenuClick} className={styles.burgerMenu}>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
			{isMenuOpen && (
				<NavBar
					links={links}
					handleMenuClick={handleMenuClick}
					isMenuOpen={isMenuOpen}
				/>
			)}
		</header>
	);
}
