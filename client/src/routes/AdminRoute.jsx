import PropTypes from "prop-types";
import { useGetAdmin } from "../hooks/TanStackQuery/useGet";
import Loader from "../components/common/Loader/Loader";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { isAdmin, isAdminLoading } = useGetAdmin();

  if (isAdminLoading) return <Loader />;
  else if (isAdmin) return children;

  return <Navigate to="/" />;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
