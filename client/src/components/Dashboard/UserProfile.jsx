import { Spinner } from "@material-tailwind/react";
import { useGetCart } from "../../hooks/TanStackQuery/useGet";
import useFirebase from "../../hooks/useFirebase";
import { FaCartShopping } from "react-icons/fa6";

const UserProfile = () => {
  const { user } = useFirebase();
  const { userCartData, userCartLoading } = useGetCart();
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Profile  */}
      <div className="bg-[#FFEDD5] border-b-[3px] lg:border-r-[3px] lg:border-b-0 border-[#D1A054] p-10 lg:flex-1 flex justify-center items-center flex-col gap-4 h-[469px]">
        <img
          referrerPolicy="no-referrer"
          className="size-[198px] rounded-full object-cover border-[3px] border-[#D1A054]"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <h2 className="text-[#151515] font-semibold text-2xl md:text-3xl lg:text-4xl">
          {user?.displayName}
        </h2>
      </div>
      {/* Activities  */}
      <div className="bg-[#FEF9C3] p-10 lg:flex-1 flex justify-center flex-col gap-4 h-[469px]">
        <h2 className="text-[#151515] font-semibold text-2xl md:text-3xl lg:text-4xl">
          Your Activities
        </h2>
        <div>
          <p className="text-xl text-[#0088FE] font-semibold flex gap-2 items-center">
            <FaCartShopping /> Orders:{" "}
            {userCartLoading ? <Spinner color="blue" /> : userCartData?.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
