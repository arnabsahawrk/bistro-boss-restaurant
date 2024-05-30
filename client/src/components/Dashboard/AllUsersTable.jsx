import { Spinner } from "@material-tailwind/react";
import { useGetAllUsers } from "../../hooks/TanStackQuery/useGet";
import Loader from "../common/Loader/Loader";
import UsersTable from "./UsersTable";

const AllUsersTable = () => {
  const { allUsers, isAllUsersLoading } = useGetAllUsers();

  //handle delete user
  const handleDeleteUser = async (id) => {
    console.log(id);
  };

  return (
    <div className="p-10 bg-white rounded space-y-6">
      {/* Total Calculation  */}
      <p className="text-lg lg:text-[32px] text-[#151515] font-bold flex gap-2 items-center">
        Total users: {isAllUsersLoading ? <Spinner /> : allUsers?.length}
      </p>
      {/* Cart Data Table  */}
      {isAllUsersLoading ? (
        <Loader />
      ) : (
        <UsersTable
          users={allUsers}
          loading={isAllUsersLoading}
          handleDeleteUser={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default AllUsersTable;
