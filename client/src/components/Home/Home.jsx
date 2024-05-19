import HomeBanner from "../Banner/HomeBanner";
import ContactSection from "./ContactSection";
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
    </>
  );
};

export default Home;
