import CommonBanner from "../Banner/CommonBanner";
import bannerPic from "../../assets/menu/banner3.jpg";

const Menu = () => {
  const obj = {
    bannerPic,
    heading: "OUR MENU",
    subHeading: "Would you like to try a dish?",
  };
  return (
    <>
      <CommonBanner obj={obj} />
    </>
  );
};

export default Menu;
