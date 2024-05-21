import PropTypes from "prop-types";
import AuthContextProvider from "../../contexts/AuthContextProvider";

const CustomProviders = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

CustomProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomProviders;
