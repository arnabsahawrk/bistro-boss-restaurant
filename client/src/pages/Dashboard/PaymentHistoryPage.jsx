import PaymentHistory from "../../components/Dashboard/PaymentHistory";
import DynamicTitle from "../../components/common/Helmet/DynamicTitle";

const PaymentHistoryPage = () => {
  return (
    <>
      <DynamicTitle Title="Bistro Boss | Payment History" />
      <section>
        <PaymentHistory />
      </section>
    </>
  );
};

export default PaymentHistoryPage;
