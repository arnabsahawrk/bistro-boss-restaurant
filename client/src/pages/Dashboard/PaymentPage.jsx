import Payment from "../../components/Dashboard/Payment/Payment";
import DynamicTitle from "../../components/common/Helmet/DynamicTitle";

const PaymentPage = () => {
  return (
    <>
      <DynamicTitle Title="Bistro Boss | Payment" />
      <section>
        <Payment />
      </section>
    </>
  );
};

export default PaymentPage;
