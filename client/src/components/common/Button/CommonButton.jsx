import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CommonButton = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(link || -1)}
      className="rounded-lg border-b-[3px] border-[#1F2937] py-5 px-[30px] text-[#1F2937] bg-white hover:text-white hover:bg-[#1F2937] font-bold"
    >
      {text}
    </button>
  );
};

CommonButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default CommonButton;
