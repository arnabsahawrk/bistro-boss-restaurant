import AdminHome from "../../components/Dashboard/AdminHome";
import DynamicTitle from "../../components/common/Helmet/DynamicTitle";

const AdminHomePage = () => {
  return (
    <>
      <DynamicTitle Title="Dashboard | Admin Home" />
      <section>
        <AdminHome />
      </section>
    </>
  );
};

export default AdminHomePage;
