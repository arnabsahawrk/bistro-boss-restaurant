import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import useFirebase from "../hooks/useFirebase";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useFirebase();
  const location = useLocation();

  if (authLoading) return <Loader />;
  else if (user) return children;

  return <Navigate to="/signIn" state={location.pathname} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
