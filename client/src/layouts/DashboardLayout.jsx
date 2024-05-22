import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Nav/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen lg:flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Outlet --> Dynamic content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
