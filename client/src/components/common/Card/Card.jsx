import PropTypes from "prop-types";
import CartButton from "../Button/CartButton";

const Card = ({ cardItem }) => {
  const { name, recipe, image } = cardItem;
  return (
    <div>
      <img
        className="w-full object-cover h-[200px] rounded-t-md"
        src={image}
        alt={name}
      />
      <div className="bg-[#F3F3F3] text-center space-y-3 py-3 px-2 rounded-b-md">
        <h2 className="text-[#151515] text-xl font-semibold">{name}</h2>
        <p className="text-[#151515] text-sm">{recipe}</p>
        <CartButton text="add to cart" />
      </div>
    </div>
  );
};

Card.propTypes = {
  cardItem: PropTypes.object.isRequired,
};

export default Card;
