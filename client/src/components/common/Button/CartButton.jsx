import PropTypes from "prop-types";
import useFirebase from "../../../hooks/useFirebase";
import { useLocation, useNavigate } from "react-router-dom";
import { usePostCart } from "../../../hooks/TanStackQuery/usePost";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";

const CartButton = ({ id, text }) => {
  const { cartAsync, cartPending } = usePostCart();

  const { user } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const handleCart = async (id) => {
    if (!user) {
      navigate("/signIn", { state: location.pathname });
    } else {
      const addedTime = new Date().toLocaleString();
      const userName = user?.name;
      const userEmail = user?.email;
      const menuId = id;

      const userCartInfo = { addedTime, userName, userEmail, menuId };
      try {
        await cartAsync(userCartInfo);
        toast.success("Cart Added");
      } catch (err) {
        toast.error(`${err}`);
      }
    }
  };
  return (
    <>
      {cartPending ? (
        <div className="flex justify-center items-center w-full">
          <Spinner />
        </div>
      ) : (
        <button
          onClick={() => handleCart(id)}
          className="rounded-lg border-b-[3px] border-[#BB8506] py-5 px-[30px] text-[#BB8506] bg-[#E8E8E8] hover:border-[#1F2937] hover:bg-[#1F2937] font-bold"
        >
          {text}
        </button>
      )}
    </>
  );
};

CartButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartButton;
