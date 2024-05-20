import ReCAPTCHA from "react-google-recaptcha";
import { IoIosSend } from "react-icons/io";
const ContactForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-[#E8E8E8] p-10 lg:p-14 xl:p-20 rounded-md">
      <div className="flex flex-col gap-2">
        <label className="text-lg text-[#444444]">
          Name<sup>*</sup>
        </label>
        <input
          required
          type="text"
          className="p-4 appearance-none bg-white rounded-md placeholder:text-[#A1A1A1]"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg text-[#444444]">
          Email<sup>*</sup>
        </label>
        <input
          required
          type="email"
          className="p-4 appearance-none bg-white rounded-md placeholder:text-[#A1A1A1]"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-lg text-[#444444]">
          Phone<sup>*</sup>
        </label>
        <input
          required
          type="number"
          className="p-4 appearance-none bg-white rounded-md placeholder:text-[#A1A1A1]"
          placeholder="Enter your number"
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-lg text-[#444444]">
          Message<sup>*</sup>
        </label>
        <textarea
          rows={5}
          required
          placeholder="Write your message here"
          className="p-4 appearance-none bg-white rounded-md placeholder:text-[#A1A1A1]"
        ></textarea>
      </div>
      <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
      <div className="md:col-span-2">
        <button className="text-white flex justify-center items-center gap-2 px-4 py-2 font-bold bg-gradient-to-r from-[#835D23] to-[#B58130] mx-auto">
          Send Message <IoIosSend />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
