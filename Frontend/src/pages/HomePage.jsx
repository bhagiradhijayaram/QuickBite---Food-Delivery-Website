import Categories from "../components/Categories";
import Hero from "../components/Hero";
import PopularDishes from "../components/PopularDishes";
import Features from "../components/Features";
import AppPromo from "../components/AppPromo";
import Carousel from "../components/Carousel";
import Newsletter from "../components/Newsletter";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Categories />
      <PopularDishes />
      <AppPromo />
      <Carousel />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
