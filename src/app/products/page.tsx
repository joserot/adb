import Header from "<src>/components/common/Header/Header";
import Hero from "<src>/components/products/Hero/Hero";
import Footer from "<src>/components/common/Footer/Footer";
import Catalogue from "<src>/components/products/Catalogue/Catalogue";

const productsList = [
  {
    name: "Wierner Lab",
    image: "/img/products-new/3.jpeg",
    url: "https://drive.google.com/file/d/1HJ9VLJqARGVy7j98ZlJ0j7Ypsasx2WNj/view?usp=sharing",
  },
  {
    name: "Britania Lab",
    image: "/img/products-new/5.jpeg",
    url: "https://drive.google.com/file/d/1vECn5MfZDt248mCQuWmyKTGFqJVStwW1/view?usp=sharing",
  },
  {
    name: "Tubos Britania",
    image: "/img/products-new/2.jpeg",
    url: "https://drive.google.com/file/d/1EZ9BPU1Gz-lKzlJQFSKh1TNEyvDZ4nc8/view?usp=sharing",
  },
  {
    name: "Biopack",
    image: "/img/products-new/4.jpeg",
    url: "https://drive.google.com/file/d/165tO95h8fyOYwBLhEJCtil1SVxqSIS9G/view?usp=sharing",
  },
  {
    name: "Test rápidos",
    image: "/img/products-new/1.jpeg",
    url: "https://drive.google.com/file/d/13CWhaz8oRUXnk7WYnjet766cW14S4zex/view?usp=sharing",
  },
  {
    name: "Everglass",
    image: "/img/products-new/7.jpeg",
    url: "https://drive.google.com/file/d/1LpUWtcind9OKOv7OIp4k9rzribcloUw7/view?usp=sharing",
  },
  {
    name: "Paralwall",
    image: "/img/products-new/8.jpeg",
    url: "https://drive.google.com/file/d/1nxf2fIsKWii8Hf2FgA35FRExA_y3bxv5/view?usp=sharing",
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
