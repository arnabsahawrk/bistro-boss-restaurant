import PropTypes from "prop-types";

const CartButton = ({ text }) => {
  return (
    <button className="rounded-lg border-b-[3px] border-[#BB8506] py-5 px-[30px] text-[#BB8506] bg-[#E8E8E8] hover:border-[#1F2937] hover:bg-[#1F2937] font-bold">
      {text}
    </button>
  );
};

CartButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CartButton;
