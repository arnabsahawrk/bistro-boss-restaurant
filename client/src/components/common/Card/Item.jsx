import PropTypes from "prop-types";

const Item = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <img
        className="rounded-tl-[0px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] object-cover w-[118px] h-[104px]"
        src={image}
        alt={name}
      />
      <div>
        <h1 className="text-[#151515] text-lg md:text-xl after:content-['------------------']">
          {name}
        </h1>
        <p className="text-[#737373] max-w-[443px]">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-lg md:text-xl">${price}</p>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
