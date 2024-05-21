import PropTypes from "prop-types";
import useFirebase from "../hooks/useFirebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GuestOnlyRoute = ({ children }) => {
  const { user } = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user, navigate]);

  if (user) return null;

  return children;
};

GuestOnlyRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestOnlyRoute;
