import Menu from "../components/Menu/Menu";
import DynamicTitle from "../components/common/Helmet/DynamicTitle";

const MenuPage = () => {
  return (
    <>
      <DynamicTitle Title="Bistro Boss | Menu" />
      <section>
        <Menu />
      </section>
    </>
  );
};

export default MenuPage;
