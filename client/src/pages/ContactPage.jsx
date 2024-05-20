import Contact from "../components/Contact/Contact";
import DynamicTitle from "../components/common/Helmet/DynamicTitle";

const ContactPage = () => {
  return (
    <>
      <DynamicTitle Title="Bistro Boss | Contact" />
      <section>
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;
