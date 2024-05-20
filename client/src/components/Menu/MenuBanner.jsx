import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
import Container from "../common/Container/Container";
import chefService from "../../assets/home/chef-service.jpg";

const MenuBanner = ({ heading, description }) => {
  return (
    <Parallax
      blur={5}
      bgImage={chefService}
      strength={200}
      bgImageAlt="Chef Service"
      className="bg-cover bg-center bg-no-repeat"
    >
      <Container className="md:py-[119px] py-[60px]">
        <div className="bg-[#15151599] py-[10px] md:py-[96px] px-[4px] md:px-[112px] text-center text-white space-y-4">
          <h1 className="text-xl md:text-[45px] font-bold">{heading}</h1>
          <p className="text-xs md:text-base">{description}</p>
        </div>
      </Container>
    </Parallax>
  );
};

MenuBanner.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MenuBanner;
