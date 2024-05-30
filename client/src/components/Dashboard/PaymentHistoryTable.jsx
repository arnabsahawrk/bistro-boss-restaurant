import { Spinner } from "@material-tailwind/react";
import { useGetPaymentHistory } from "../../hooks/TanStackQuery/useGet";
import Loader from "../common/Loader/Loader";
import HistoryTable from "./HistoryTable";

const PaymentHistoryTable = () => {
  const { paymentHistory, paymentHistoryLoading } = useGetPaymentHistory();
  // const { date, transactionId, price, userEmail, status } = paymentHistory;

  return (
    <div className="p-10 bg-white rounded space-y-6">
      <p className="text-lg lg:text-[32px] text-[#151515] font-bold flex gap-2 items-center">
        Total Payments:{" "}
        {paymentHistoryLoading ? <Spinner /> : paymentHistory?.length}
      </p>
      {/* Cart Data Table  */}
      {paymentHistoryLoading ? (
        <Loader />
      ) : (
        <HistoryTable history={paymentHistory} />
      )}
    </div>
  );
};

export default PaymentHistoryTable;
