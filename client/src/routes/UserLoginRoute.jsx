import PropTypes from "prop-types";
import useFirebase from "../hooks/useFirebase";
import Loader from "../components/common/Loader/Loader";
import { useNavigate } from "react-router-dom";

const UserLoginRoute = ({ children }) => {
  const { user, authLoading } = useFirebase();
  const navigate = useNavigate();
  if (authLoading) return <Loader />;
  else if (!user) return navigate(-1);

  return children;
};

UserLoginRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLoginRoute;
