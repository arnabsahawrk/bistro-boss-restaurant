import CommonBanner from "../Banner/CommonBanner";
import bannerPic from "../../assets/menu/banner3.jpg";
import CommonHeading from "../common/Heading/CommonHeading";
import { useGetMenu } from "../../hooks/TanStackQuery/useGet";
import MenuItemShowcase from "./MenuItemShowcase";
import Loader from "../common/Loader/Loader";
import MenuBanner from "./MenuBanner";

const Menu = () => {
  const { menu, menuLoading } = useGetMenu();
  const offered = menu?.filter((item) => item.category === "offered");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const obj = {
    bannerPic,
    heading: "OUR MENU",
    subHeading: "Would you like to try a dish?",
  };
  return (
    <>
      <CommonBanner obj={obj} />
      <section className="py-10 space-y-10">
        <CommonHeading subHeading="Don't miss" heading="TODAY'S OFFER" />
        {menuLoading ? <Loader /> : <MenuItemShowcase menu={offered} />}
        <MenuBanner
          heading="DESSERTS"
          description="Holisticly redefine covalent content after B2C methodologies. Conveniently facilitate backend infomediaries after cross functional."
        />
        {menuLoading ? <Loader /> : <MenuItemShowcase menu={dessert} />}
        <MenuBanner
          heading="PIZZA"
          description="Conveniently leverage existing quality processes and diverse products. Objectively brand sticky collaboration and idea-sharing for functional communities. Efficiently."
        />
        {menuLoading ? <Loader /> : <MenuItemShowcase menu={pizza} />}
        <MenuBanner
          heading="SALADS"
          description="Professionally leverage other's corporate content with alternative e-commerce. Proactively unleash holistic materials for distinctive applications. Assertively."
        />
        {menuLoading ? <Loader /> : <MenuItemShowcase menu={salad} />}
        <MenuBanner
          heading="SOUPS"
          description="Interactively repurpose best-of-breed platforms with robust materials. Conveniently generate market-driven web services before alternative markets. Dramatically deploy one-to-one experiences before visionary interfaces."
        />
        {menuLoading ? <Loader /> : <MenuItemShowcase menu={soup} />}
      </section>
    </>
  );
};

export default Menu;
