import Container from "../common/Container/Container";
import CommonHeading from "../common/Heading/CommonHeading";
import OurMenuItem from "./OurMenuItem";

const OurMenuSection = () => {
  return (
    <section className="py-10">
      <Container>
        <CommonHeading subHeading="Check it out" heading="FROM OUR MENU" />
        <OurMenuItem />
      </Container>
    </section>
  );
};

export default OurMenuSection;
