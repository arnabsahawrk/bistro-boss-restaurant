import PropTypes from "prop-types";
import useFirebase from "../../../hooks/useFirebase";
import { useLocation, useNavigate } from "react-router-dom";
import { usePostCart } from "../../../hooks/TanStackQuery/usePost";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";

const CartButton = ({ menu, text }) => {
  const { cartAsync, cartPending } = usePostCart();

  const { user } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const handleCart = async (menu) => {
    if (!user) {
      navigate("/signIn", { state: location.pathname });
    } else {
      const addedTime = new Date().toLocaleString();
      const userName = user?.displayName;
      const userEmail = user?.email;
      const { _id, ...rest } = menu;
      const cartMenu = {
        menuId: _id,
        ...rest,
        addedTime,
        userName,
        userEmail,
      };

      try {
        await cartAsync(cartMenu);
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
          onClick={() => handleCart(menu)}
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
  menu: PropTypes.object.isRequired,
};

export default CartButton;
