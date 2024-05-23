import { Outlet } from "react-router-dom";
import AdminBar from "../components/common/Nav/AdminBar";

const AdminLayout = () => {
  return (
    <div className="relative min-h-screen lg:flex">
      {/* Sidebar */}
      <AdminBar />

      {/* Outlet --> Dynamic content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
