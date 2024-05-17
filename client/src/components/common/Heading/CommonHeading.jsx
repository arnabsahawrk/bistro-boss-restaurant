import PropTypes from "prop-types";

const CommonHeading = ({ subHeading, heading }) => {
  return (
    <div className="text-center">
      <p className="text-lg md:text-xl text-[#D99904] italic before:content-['---'] after:content-['---']">
        {subHeading}
      </p>
      <hr className="max-w-[424px] h-1 my-5 bg-[#E8E8E8] rounded mx-auto" />
      <h1 className="text-2xl md:text-4xl text-[#151515]">{heading}</h1>
      <hr className="max-w-[424px] h-1 my-5 bg-[#E8E8E8] rounded mx-auto" />
    </div>
  );
};

CommonHeading.propTypes = {
  subHeading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default CommonHeading;
