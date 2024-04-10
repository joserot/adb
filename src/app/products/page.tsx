import Header from "<src>/components/common/Header/Header";
import Hero from "<src>/components/products/Hero/Hero";
import Footer from "<src>/components/common/Footer/Footer";
import Catalogue from "<src>/components/products/Catalogue/Catalogue";

const productsList = [
  {
    name: "Wierner Lab",
    image: "/img/products-new/3.jpeg",
    url: "https://drive.google.com/file/d/1AJCiGVwpZRb1t7YgMwy0WMBTR1Pybfhj/view?usp=drive_link",
  },
  {
    name: "Britania Lab",
    image: "/img/products-new/5.jpeg",
    url: "https://drive.google.com/file/d/1wsEaHhcL_EydQ00TH9o6dG3xErZ3UDjp/view?usp=drive_link",
  },
  {
    name: "Tubos Britania",
    image: "/img/products-new/2.jpeg",
    url: "https://drive.google.com/file/d/1CS9hzMOKZlv6njMeGj6rZpOYED719Ddj/view?usp=drive_link",
  },
  {
    name: "Biopack",
    image: "/img/products-new/4.jpeg",
    url: "https://drive.google.com/file/d/1-H4-zvyixwX6AJPs8wgLyHzHdSH98KqU/view?usp=drive_link",
  },
  {
    name: "Test rápidos",
    image: "/img/products-new/1.jpeg",
    url: "https://drive.google.com/file/d/10umOiDcesbm8JvheAIKn0nBQ4tItMa-I/view?usp=drive_link",
  },
  {
    name: "Everglass",
    image: "/img/products-new/7.jpeg",
    url: "https://drive.google.com/file/d/13oXYsA704GaBcapRUDXSElRe94cCTsnE/view?usp=drive_link",
  },
  {
    name: "Paralwall",
    image: "/img/products-new/8.jpeg",
    url: "https://drive.google.com/file/d/1hYdu9q8z6ZbGP1Fi7cyLDjzmMgn2lMua/view?usp=drive_link",
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
