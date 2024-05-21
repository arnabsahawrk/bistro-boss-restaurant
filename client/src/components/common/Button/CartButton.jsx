import PropTypes from "prop-types";
import useFirebase from "../../../hooks/useFirebase";
import { useLocation, useNavigate } from "react-router-dom";

const CartButton = ({ id, text }) => {
  const { user } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const handleCart = (id) => {
    if (!user) {
      navigate("/signIn", { state: location.pathname });
    }
    console.log(id);
  };
  return (
    <button
      onClick={() => handleCart(id)}
      className="rounded-lg border-b-[3px] border-[#BB8506] py-5 px-[30px] text-[#BB8506] bg-[#E8E8E8] hover:border-[#1F2937] hover:bg-[#1F2937] font-bold"
    >
      {text}
    </button>
  );
};

CartButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartButton;
