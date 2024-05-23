import PropTypes from "prop-types";
import CartButton from "../Button/CartButton";

const Card = ({ cardItem }) => {
  const { name, recipe, image, price } = cardItem;

  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <img
          className="w-full object-cover h-[200px] rounded-t-md group-hover:scale-110 
          transition duration-700"
          src={image}
          alt={name}
        />
        <span className="absolute top-3 bg-[#111827] text-white text-lg px-2 py-1 right-3">
          ${price}
        </span>
      </div>
      <div className="bg-[#F3F3F3] text-center space-y-3 py-3 px-2 rounded-b-md">
        <h2 className="text-[#151515] text-xl font-semibold">{name}</h2>
        <p className="text-[#151515] text-sm">{recipe}</p>
        <CartButton text="add to cart" menu={cardItem} />
      </div>
    </div>
  );
};

Card.propTypes = {
  cardItem: PropTypes.object.isRequired,
};

export default Card;
