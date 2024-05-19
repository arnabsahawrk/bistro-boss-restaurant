import Container from "../common/Container/Container";
import CommonHeading from "../common/Heading/CommonHeading";
import ChefRecommendsCards from "./ChefRecommendsCards";

const ChefRecommendsSection = () => {
  return (
    <section className="py-10">
      <Container>
        <CommonHeading subHeading="Should Try" heading="CHEF RECOMMENDS" />
        <ChefRecommendsCards />
      </Container>
    </section>
  );
};

export default ChefRecommendsSection;
