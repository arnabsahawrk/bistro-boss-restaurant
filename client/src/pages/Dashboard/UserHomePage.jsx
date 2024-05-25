import UserHome from "../../components/Dashboard/UserHome";
import DynamicTitle from "../../components/common/Helmet/DynamicTitle";

const UserHomePage = () => {
  return (
    <>
      <DynamicTitle Title="Dashboard | User Home" />
      <section>
        <UserHome />
      </section>
    </>
  );
};

export default UserHomePage;
