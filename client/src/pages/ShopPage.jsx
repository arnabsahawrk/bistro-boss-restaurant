import Shop from "../components/Shop/Shop";
import DynamicTitle from "../components/common/Helmet/DynamicTitle";

const ShopPage = () => {
  return (
    <>
      <DynamicTitle Title="Bistro Boss | Shop" />
      <section>
        <Shop />
      </section>
    </>
  );
};

export default ShopPage;
