import PropTypes from "prop-types";
import { Card, Spinner, Typography } from "@material-tailwind/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const TABLE_HEAD = ["", "ITEM IMAGE", "ITEM NAME", "ADDED", "PRICE", "ACTION"];

const CartTable = ({ cart, handleDeleteCart, cartDeletePending }) => {
  return (
    <Card className="h-full w-full overflow-auto shadow-none">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="bg-[#D1A054] p-4">
                <Typography
                  variant="paragraph"
                  className={`font-semibold leading-none text-white font-cinzel ${
                    head === "PRICE" && "text-center"
                  } ${head === "ACTION" && "text-center"}`}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.map(({ image, name, price, addedTime, _id }, index) => {
            const isLast = index === cart.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-[#E8E8E8]";

            return (
              <tr key={index + 1}>
                <td className={classes}>
                  <Typography
                    variant="paragraph"
                    className="font-bold text-[#151515] font-cinzel"
                  >
                    {index + 1}
                  </Typography>
                </td>
                <td className={classes}>
                  <img
                    className="object-cover size-[75px]"
                    src={image}
                    alt={name}
                  />
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-[#737373] font-cinzel"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-[#737373] font-cinzel"
                  >
                    {addedTime}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-[#737373] font-cinzel text-center"
                  >
                    {`$${price}`}
                  </Typography>
                </td>
                <td className={`${classes} text-center`}>
                  {cartDeletePending ? (
                    <div className="flex justify-center">
                      <Spinner color="red" className="h-10 w-10" />
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDeleteCart(_id)}
                      className="bg-[#B91C1C] p-3 rounded-md text-white text-2xl"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

CartTable.propTypes = {
  cart: PropTypes.array.isRequired,
  handleDeleteCart: PropTypes.func.isRequired,
  cartDeletePending: PropTypes.bool.isRequired,
};

export default CartTable;
