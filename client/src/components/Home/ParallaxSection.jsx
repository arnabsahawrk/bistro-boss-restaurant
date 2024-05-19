import Container from "../common/Container/Container";
import chefService from "../../assets/home/chef-service.jpg";
import { Parallax } from "react-parallax";

const ParallaxSection = () => {
  return (
    <Parallax
      blur={10}
      bgImage={chefService}
      strength={200}
      bgImageAlt="Chef Service"
      className="bg-cover bg-center bg-no-repeat"
    >
      <Container className="md:py-[119px] py-[60px]">
        <div className="bg-white py-[10px] md:py-[96px] px-[4px] md:px-[112px] text-center text-[#151515] space-y-2">
          <h1 className="text-xl md:text-[45px] font-bold">Bistro Boss</h1>
          <p className="text-xs md:text-base">
            Continually evisculate impactful intellectual capital with
            interdependent solutions. Conveniently recaptiualize sustainable
            meta-services rather than technically sound channels. Monotonectally
            unleash alternative e-business vis-a-vis market-driven niche
            markets. Assertively foster competitive value after.
          </p>
        </div>
      </Container>
    </Parallax>
  );
};

export default ParallaxSection;
