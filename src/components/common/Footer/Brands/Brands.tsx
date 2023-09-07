"use client";

import styles from "./Brands.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const brandsList = [
	"/img/marcas/1.png",
	"/img/marcas/2.png",
	"/img/marcas/3.jpeg",
	"/img/marcas/4.png",
	"/img/marcas/5.png",
	"/img/marcas/6.png",
	"/img/marcas/7.jpeg",
	"/img/marcas/8.png",
	"/img/marcas/9.jpeg",
	"/img/marcas/10.jpeg",
	"/img/marcas/11.png",
	"/img/marcas/12.jpeg",
];

const splideOptions = {
	breakpoints: {
		1024: {
			perPage: 4,
		},
		700: {
			perPage: 2,
			perMove: 1,
		},
	},
	type: "loop",
	perPage: 6,
	perMove: 2,
	padding: "20px 0",
	autoplay: true,
	interval: 5000,
	pauseOnHover: false,
	pauseOnFocus: false,
	resetProgress: true,
	arrows: false,
	pagination: false,
	paginationKeyboard: false,
	width: "100%",
	lazyLoad: true,
	height: 150,
};

export default function Brands() {
	return (
		<article className={styles.brands}>
			<Splide options={splideOptions} aria-label="Marcas">
				{brandsList.map((brand, index) => {
					return (
						<SplideSlide key={index}>
							<Image src={brand} alt="Marca" width={100} height={100} />
						</SplideSlide>
					);
				})}
			</Splide>
		</article>
	);
}
