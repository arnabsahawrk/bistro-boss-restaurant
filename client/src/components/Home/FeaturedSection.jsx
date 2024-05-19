import { Parallax } from "react-parallax";
import Container from "../common/Container/Container";
import featured from "../../assets/home/featured.jpg";
import CommonHeading from "../common/Heading/CommonHeading";

const FeaturedSection = () => {
  return (
    <Parallax
      blur={5}
      bgImage={featured}
      strength={200}
      bgImageAlt="Featured"
      className="bg-cover bg-center bg-no-repeat"
    >
      <Container className="md:py-[119px] py-[60px]">
        <CommonHeading subHeading="Check it out" heading="FROM OUR MENU" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <img
            className="object-cover md:w-1/2 rounded-md"
            src={featured}
            alt="Featured"
          />
          <article className="md:w-1/2 space-y-2 text-white">
            <p className="font-bold text-lg">May 20, 2024</p>
            <h3 className="font-bold text-xl">Where Can I Get Some</h3>
            <p className="text-sm">
              Progressively scale inexpensive strategic theme areas for
              bricks-and-clicks partnerships. Compellingly procrastinate
              high-quality architectures rather than B2C bandwidth. Holisticly
              initiate 2.0 e-services with.
            </p>
            <button className="rounded-lg border-b-[3px] border-white py-5 px-[30px] text-white bg-transparent hover:text-white hover:bg-[#1F2937] font-bold">
              Read More
            </button>
          </article>
        </div>
      </Container>
    </Parallax>
  );
};

export default FeaturedSection;
