import Container from "../common/Container/Container";
import CommonHeading from "../common/Heading/CommonHeading";
import OrderOnlineCarousel from "./OrderOnlineCarousel";

const OrderOnlineSection = () => {
  return (
    <section className="pb-10">
      <Container>
        <CommonHeading
          subHeading="From 11:00am to 10:00pm"
          heading="ORDER ONLINE"
        />
        <OrderOnlineCarousel />
      </Container>
    </section>
  );
};

export default OrderOnlineSection;
