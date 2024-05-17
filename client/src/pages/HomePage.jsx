import HomeBanner from "../components/Banner/HomeBanner";
import DynamicTitle from "../components/common/Helmet/DynamicTitle";

const HomePage = () => {
  return (
    <>
      <DynamicTitle Title="Bistro Boss | Home" />
      <section>
        <HomeBanner />
      </section>
    </>
  );
};

export default HomePage;
