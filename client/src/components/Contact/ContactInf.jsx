import PropTypes from "prop-types";

const ContactInf = ({ info }) => {
  const { icon, title, details } = info;
  return (
    <div className="px-4 relative">
      <div className="bg-[#F3F3F3] py-8 text-center text-[#151515]">
        <h3 className="font-bold text-xl md:text-base lg:text-xl">{title}</h3>
        <p className="md:text-xs lg:text-base">{details}</p>
      </div>
      <div className="absolute -top-10 inset-x-0 bg-[#D1A054] py-4 text-2xl flex justify-center text-white">
        {icon}
      </div>
    </div>
  );
};

ContactInf.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ContactInf;
