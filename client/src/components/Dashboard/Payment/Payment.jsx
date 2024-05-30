import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

//TODO: add publish key
const stripePromise = loadStripe(import.meta.env.VITE_paymentGatewayPK);
const Payment = () => {
  return (
    <div className="py-5 flex flex-col justify-center items-center gap-5 min-h-screen">
      <h2 className="text-[#151515] font-semibold text-2xl md:text-3xl lg:text-4xl">
        PAYMENT
      </h2>
      {/* payment system  */}
      <div className="w-full p-2">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
