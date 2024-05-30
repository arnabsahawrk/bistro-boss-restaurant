import PropTypes from "prop-types";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["", "EMAIL", "TRANSACTION ID", "DATE", "PRICE", "STATUS"];
const HistoryTable = ({ history }) => {
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
                  } ${head === "STATUS" && "text-center"}`}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {history?.map(
            ({ userEmail, transactionId, price, date, status }, index) => {
              const isLast = index === history.length - 1;
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
                      {userEmail}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-[#737373] font-cinzel"
                    >
                      {transactionId}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-[#737373] font-cinzel"
                    >
                      {date}
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
                    <Typography
                      variant="small"
                      className="font-normal text-[#737373] font-cinzel text-center"
                    >
                      {status}
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
};

HistoryTable.propTypes = {
  history: PropTypes.array.isRequired,
};

export default HistoryTable;
