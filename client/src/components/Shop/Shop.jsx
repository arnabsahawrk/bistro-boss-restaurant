import CommonBanner from "../Banner/CommonBanner";
import bannerPic from "../../assets/shop/banner2.jpg";
import OurShopItemShowcase from "./OurShopItemShowcase";

const Shop = () => {
  const obj = {
    bannerPic,
    heading: "OUR SHOP",
    subHeading: "Would you like to try a dish?",
  };
  return (
    <>
      <CommonBanner obj={obj} />
      <OurShopItemShowcase />
    </>
  );
};

export default Shop;
