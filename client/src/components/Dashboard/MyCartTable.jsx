// import { useEffect } from "react";
import { useGetCart } from "../../hooks/TanStackQuery/useGet";
// import useFirebase from "../../hooks/useFirebase";
import toast from "react-hot-toast";
import { Spinner } from "@material-tailwind/react";
import CartTable from "./CartTable";
import Loader from "../common/Loader/Loader";
import { useCartDelete } from "../../hooks/TanStackQuery/useDelete";

const MyCartTable = () => {
  // const { user } = useFirebase();
  const { userCartData, userCartLoading } = useGetCart();
  const { cartDeleteAsync, cartDeletePending } = useCartDelete();

  // useEffect(() => {
  //   const getCartData = async () => {
  //     try {
  //       if (user) {
  //         await cartGetAsync(user?.email);
  //       }
  //     } catch (err) {
  //       toast.error(`${err}`);
  //     }
  //   };

  //   getCartData();
  // }, [cartGetAsync, user]);

  // Handle Delete Cart
  const handleDeleteCart = async (id) => {
    try {
      await cartDeleteAsync(id);
      toast.success("Cart Deleted");
    } catch (err) {
      toast.error(`${err}`);
    }
  };
  return (
    <div className="p-10 bg-white rounded space-y-6">
      {/* Total Calculation  */}
      <div className="flex justify-between items-center">
        <p className="text-lg lg:text-[32px] text-[#151515] font-bold flex gap-2 items-center">
          Total orders: {userCartLoading ? <Spinner /> : userCartData?.length}
        </p>
        <p className="text-lg lg:text-[32px] text-[#151515] font-bold flex gap-2 items-center">
          total price:{" "}
          {userCartLoading ? (
            <Spinner />
          ) : (
            `$${userCartData?.reduce((total, cart) => total + cart?.price, 0)}`
          )}
        </p>
        <button className="p-2 text-white rounded-lg bg-[#D1A054]">Pay</button>
      </div>
      {/* Cart Data Table  */}
      {userCartLoading ? (
        <Loader />
      ) : (
        <CartTable
          cart={userCartData}
          handleDeleteCart={handleDeleteCart}
          cartDeletePending={cartDeletePending}
        />
      )}
    </div>
  );
};

export default MyCartTable;
