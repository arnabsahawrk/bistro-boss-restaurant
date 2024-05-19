import Container from "../Container/Container";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white text-center font-medium text-sm md:text-base">
      <section className="flex flex-col md:flex-row">
        <div className="bg-[#1F2937] w-full py-10">
          <Container>
            <h4 className="text-2xl md:text-3xl mb-4">CONTACT US</h4>
            <ul className="space-y-2">
              <li>123 ABS Street, Uni 21, Bangladesh +88 01517824769</li>
              <li>Mon - Fri: 08:00 - 22:00</li>
              <li>Sat - Sun: 10:00 - 23:00</li>
            </ul>
          </Container>
        </div>
        <div className="bg-[#111827] w-full py-10">
          <Container>
            <h4 className="text-2xl md:text-3xl mb-4">Follow US</h4>
            <p className="my-2">Join us on social media</p>
            <p className="flex justify-center items-center gap-3 text-xl">
              <FaFacebookF /> <FaInstagram /> <FaLinkedinIn />
            </p>
          </Container>
        </div>
      </section>
      <section className="bg-[#151515] py-4">
        <Container>
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
