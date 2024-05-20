import PropTypes from "prop-types";
import Container from "../common/Container/Container";

const CommonBanner = ({ obj }) => {
  const { bannerPic, heading, subHeading } = obj;
  return (
    <section
      style={{
        backgroundImage: `url(${bannerPic})`,
      }}
      className="bg-cover bg-center bg-no-repeat h-[80vh]"
    >
      <Container className="flex flex-col justify-center items-center h-full">
        <div className="bg-[#15151599] px-20 md:px-40 py-10 md:py-20 text-center text-white space-y-3">
          <h1 className="font-bold text-3xl md:text-4xl">{heading}</h1>
          <p className="font-semibold text-sm md:text-xl">{subHeading}</p>
        </div>
      </Container>
    </section>
  );
};

CommonBanner.propTypes = {
  obj: PropTypes.object.isRequired,
};

export default CommonBanner;
