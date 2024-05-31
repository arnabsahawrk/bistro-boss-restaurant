import { CiWallet, CiDeliveryTruck } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { LuChefHat } from "react-icons/lu";
import { useGetAdminStats } from "../../hooks/TanStackQuery/useGet";
import { Spinner } from "@material-tailwind/react";
import OrderStats from "./OrderStats";

const AdminHome = () => {
  const { adminStats, isLoadingAdminStats } = useGetAdminStats();
  return (
    <div className="py-5 space-y-5">
      <h2 className="text-[#151515] font-semibold text-2xl md:text-3xl lg:text-4xl">
        Hi, Welcome Back!
      </h2>
      {/* admin-stats  */}
      <div className="flex justify-center items-center flex-wrap gap-4 text-center">
        {/* revenue  */}
        <div className="min-w-[250px] min-h-[150px] rounded-lg bg-[#BB34F5] flex justify-center items-center gap-2 text-white font-bold">
          <p className="text-4xl">
            <CiWallet />
          </p>
          <div>
            <p className="text-3xl leading-none">
              {isLoadingAdminStats ? (
                <Spinner color="white" className="mx-auto" />
              ) : (
                `$${adminStats?.revenue}`
              )}
            </p>
            <p className="font-normal italic">Revenue</p>
          </div>
        </div>
        {/* customers  */}
        <div className="min-w-[250px] min-h-[150px] rounded-lg bg-[#D3A256] flex justify-center items-center gap-2 text-white font-bold">
          <p className="text-4xl">
            <GrGroup />
          </p>
          <div>
            <p className="text-3xl leading-none">
              {isLoadingAdminStats ? (
                <Spinner color="white" className="mx-auto" />
              ) : (
                `$${adminStats?.customers}`
              )}
            </p>
            <p className="font-normal italic">Customers</p>
          </div>
        </div>
        {/* products  */}
        <div className="min-w-[250px] min-h-[150px] rounded-lg bg-[#FE4880] flex justify-center items-center gap-2 text-white font-bold">
          <p className="text-4xl">
            <LuChefHat />
          </p>
          <div>
            <p className="text-3xl leading-none">
              {isLoadingAdminStats ? (
                <Spinner color="white" className="mx-auto" />
              ) : (
                `$${adminStats?.products}`
              )}
            </p>
            <p className="font-normal italic">Products</p>
          </div>
        </div>
        {/* orders  */}
        <div className="min-w-[250px] min-h-[150px] rounded-lg bg-[#6AAEFF] flex justify-center items-center gap-2 text-white font-bold">
          <p className="text-4xl">
            <CiDeliveryTruck />
          </p>
          <div>
            <p className="text-3xl leading-none">
              {isLoadingAdminStats ? (
                <Spinner color="white" className="mx-auto" />
              ) : (
                `$${adminStats?.orders}`
              )}
            </p>
            <p className="font-normal italic">Orders</p>
          </div>
        </div>
      </div>
      {/* order-stats  */}
      <OrderStats />
    </div>
  );
};

export default AdminHome;
