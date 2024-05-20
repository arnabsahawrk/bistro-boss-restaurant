import bannerPic from "../../assets/contact/banner.jpg";
import CommonBanner from "../Banner/CommonBanner";
import Container from "../common/Container/Container";
import CommonHeading from "../common/Heading/CommonHeading";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import ContactInf from "./ContactInf";
import ContactForm from "./ContactForm";

const Contact = () => {
  const obj = {
    bannerPic,
    heading: "CONTACT US",
    subHeading: "Would you like to try a dish?",
  };

  const infos = [
    {
      icon: <PiPhoneCallFill />,
      title: "PHONE",
      details: "+88 01517824769",
    },
    {
      icon: <ImLocation />,
      title: "LOCATION",
      details: "Dhaka, Bangladesh",
    },
    {
      icon: <IoMdTime />,
      title: "WORKING HOURS",
      details: "Mon - Fri: 08:00 - 22:00",
    },
  ];
  return (
    <>
      <CommonBanner obj={obj} />
      <Container className="py-10 space-y-10">
        <CommonHeading subHeading="Visit Us" heading="OUR LOCATION" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-16 py-8">
          {infos.map((info) => (
            <ContactInf key={info.title} info={info} />
          ))}
        </div>
        <CommonHeading subHeading="Send Us a Message" heading="CONTACT FORM" />
        <ContactForm />
      </Container>
    </>
  );
};

export default Contact;
