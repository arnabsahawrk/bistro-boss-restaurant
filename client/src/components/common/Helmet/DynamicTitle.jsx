import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const DynamicTitle = ({ Title }) => {
  return (
    <Helmet>
      <title>{Title}</title>
    </Helmet>
  );
};

DynamicTitle.propTypes = {
  Title: PropTypes.string.isRequired,
};

export default DynamicTitle;
