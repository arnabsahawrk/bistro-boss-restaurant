import { Card, Spinner, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdGroups } from "react-icons/md";

const TABLE_HEAD = ["", "NAME", "EMAIL", "STATUS", "ROLE", "ACTION"];

const UsersTable = ({ users, loading, handleDeleteUser }) => {
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
                    head === "ROLE" && "text-center"
                  } ${head === "ACTION" && "text-center"}`}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, email, status, _id }, index) => {
            const isLast = index === users.length - 1;
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
                    {`$${email}`}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-[#737373] font-cinzel"
                  >
                    {`$${status}`}
                  </Typography>
                </td>
                <td className={`${classes} text-center`}>
                  {loading ? (
                    <div className="flex justify-center">
                      <Spinner color="red" className="h-10 w-10" />
                    </div>
                  ) : (
                    <button
                      //   onClick={() => handleDeleteCart(_id)}
                      className="bg-[#D1A054] p-3 rounded-md text-white text-2xl"
                    >
                      <MdGroups />
                    </button>
                  )}
                </td>
                <td className={`${classes} text-center`}>
                  {loading ? (
                    <div className="flex justify-center">
                      <Spinner color="red" className="h-10 w-10" />
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDeleteUser(_id)}
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

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};

export default UsersTable;
