import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Features.jsx";
import Content from "../components/Content/Content.jsx";
import { heroOne, heroTwo, heroThree } from "../data/HeroData.js"
import Carousel from "../components/Carousel/Carousel.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};

export default Home;
