import Home from "../components/Home/Home";
import DynamicTitle from "../components/common/Helmet/DynamicTitle";

const HomePage = () => {
  return (
    <>
      <DynamicTitle Title="Bistro Boss | Home" />
      <section>
        <Home />
      </section>
    </>
  );
};

export default HomePage;
