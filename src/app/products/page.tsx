import Header from "<src>/components/common/Header/Header";
import Hero from "<src>/components/products/Hero/Hero";
import Footer from "<src>/components/common/Footer/Footer";
import Catalogue from "<src>/components/products/Catalogue/Catalogue";

const productsList = [
	{
		name: "product 1",
		image: "/img/products/hero-products.avif",
		url: "https://drive.google.com/file/d/1hYdu9q8z6ZbGP1Fi7cyLDjzmMgn2lMua/view?usp=sharing",
	},
	{
		name: "product 2",
		image: "/img/products/hero-products.avif",
		url: "https://drive.google.com/file/d/1hYdu9q8z6ZbGP1Fi7cyLDjzmMgn2lMua/view?usp=sharing",
	},
	{
		name: "product 3",
		image: "/img/products/hero-products.avif",
		url: "https://drive.google.com/file/d/1hYdu9q8z6ZbGP1Fi7cyLDjzmMgn2lMua/view?usp=sharing",
	},
	{
		name: "product 4",
		image: "/img/products/hero-products.avif",
		url: "https://drive.google.com/file/d/1hYdu9q8z6ZbGP1Fi7cyLDjzmMgn2lMua/view?usp=sharing",
	},
	{
		name: "product 5",
		image: "/img/products/hero-products.avif",
		url: "https://drive.google.com/file/d/1hYdu9q8z6ZbGP1Fi7cyLDjzmMgn2lMua/view?usp=sharing",
	},
	{
		name: "product 6",
		image: "/img/products/hero-products.avif",
		url: "https://drive.google.com/file/d/1hYdu9q8z6ZbGP1Fi7cyLDjzmMgn2lMua/view?usp=sharing",
	},
	{
		name: "product 7",
		image: "/img/products/hero-products.avif",
		url: "https://drive.google.com/file/d/1hYdu9q8z6ZbGP1Fi7cyLDjzmMgn2lMua/view?usp=sharing",
	},
];

export default function Products() {
	return (
		<>
			<Header />
			<Hero />
			<Catalogue productsList={productsList} />
			<Footer />
		</>
	);
}
