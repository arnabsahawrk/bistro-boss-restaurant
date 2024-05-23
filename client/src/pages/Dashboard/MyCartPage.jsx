import MyCart from "../../components/Dashboard/MyCart";
import DynamicTitle from "../../components/common/Helmet/DynamicTitle";

const MyCartPage = () => {
  return (
    <>
      <DynamicTitle Title="Dashboard | My Cart" />
      <section>
        <MyCart />
      </section>
    </>
  );
};

export default MyCartPage;
