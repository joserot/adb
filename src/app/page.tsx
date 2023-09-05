import styles from "./page.module.css";
import Header from "<src>/components/common/Header/Header";
import HeroHome from "<src>/components/home/Hero/Hero";
import Footer from "<src>/components/common/Footer/Footer";
import Featured from "<src>/components/home/Featured/Featured";

export default function Home() {
	return (
		<>
			<Header />
			<HeroHome />
			<Featured />
			<Footer />
		</>
	);
}
