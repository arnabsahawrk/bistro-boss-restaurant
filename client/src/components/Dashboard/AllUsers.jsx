import CommonHeading from "../common/Heading/CommonHeading";
import AllUsersTable from "./AllUsersTable";

const AllUsers = () => {
  return (
    <div className="py-10">
      <CommonHeading subHeading="How many??" heading="MANAGE ALL USERS" />
      <AllUsersTable />
    </div>
  );
};

export default AllUsers;
