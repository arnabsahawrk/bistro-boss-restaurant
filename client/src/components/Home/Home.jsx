import HomeBanner from "../Banner/HomeBanner";
import ChefRecommendsSection from "./ChefRecommendsSection";
import ContactSection from "./ContactSection";
import FeaturedSection from "./FeaturedSection";
import OrderOnlineSection from "./OrderOnlineSection";
import OurMenuSection from "./OurMenuSection";
import ParallaxSection from "./ParallaxSection";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <OrderOnlineSection />
      <ParallaxSection />
      <OurMenuSection />
      <ContactSection />
      <ChefRecommendsSection />
      <FeaturedSection />
    </>
  );
};

export default Home;
