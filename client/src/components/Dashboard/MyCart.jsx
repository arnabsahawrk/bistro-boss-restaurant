import CommonHeading from "../common/Heading/CommonHeading";
import MyCartTable from "./MyCartTable";

const MyCart = () => {
  return (
    <div className="py-10">
      <CommonHeading subHeading="My Cart" heading="WANNA ADD MORE?" />
      <MyCartTable />
    </div>
  );
};

export default MyCart;
