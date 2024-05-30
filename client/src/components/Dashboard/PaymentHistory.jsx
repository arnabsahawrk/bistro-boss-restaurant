import CommonHeading from "../common/Heading/CommonHeading";
import PaymentHistoryTable from "./PaymentHistoryTable";

const History = () => {
  return (
    <div className="py-10">
      <CommonHeading subHeading="At a Glance!" heading="PAYMENT HISTORY" />
      <PaymentHistoryTable />
    </div>
  );
};

export default History;
