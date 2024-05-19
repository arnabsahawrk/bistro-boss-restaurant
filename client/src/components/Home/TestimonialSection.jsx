import Container from "../common/Container/Container";
import CommonHeading from "../common/Heading/CommonHeading";
import Reviews from "./Reviews";

const TestimonialSection = () => {
  return (
    <section className="py-10">
      <Container>
        <CommonHeading
          subHeading="What Our Clients Say"
          heading="TESTIMONIALS"
        />
        <Reviews />
      </Container>
    </section>
  );
};

export default TestimonialSection;
