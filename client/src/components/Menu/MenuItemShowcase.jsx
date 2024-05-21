import PropTypes from "prop-types";
import Item from "../common/Card/Item";
import CommonButton from "../common/Button/CommonButton";
import Container from "../common/Container/Container";

const MenuItemShowcase = ({ menu }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menu?.map((item) => (
          <Item key={item?._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-4">
        <CommonButton
          text="ORDER YOUR FAVORITE FOOD"
          link={`/shop/${menu[0]?.category}`}
        />
      </div>
    </Container>
  );
};

MenuItemShowcase.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default MenuItemShowcase;
