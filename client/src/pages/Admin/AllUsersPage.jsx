import AllUsers from "../../components/Dashboard/AllUsers";
import DynamicTitle from "../../components/common/Helmet/DynamicTitle";

const AllUsersPage = () => {
  return (
    <>
      <DynamicTitle Title="Dashboard | All Users" />
      <section>
        <AllUsers />
      </section>
    </>
  );
};

export default AllUsersPage;
