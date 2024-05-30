import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useGetCart } from "../../../hooks/TanStackQuery/useGet";
import useAxiosSecure from "../../../hooks/Axios/useAxiosSecure";
import toast from "react-hot-toast";
import useFirebase from "../../../hooks/useFirebase";
import { useNavigate } from "react-router-dom";
import { ImSpinner } from "react-icons/im";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { userCartData, cartRefetch } = useGetCart();
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useFirebase();
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate("");

  const totalSell = userCartData?.reduce(
    (total, cart) => total + cart?.price,
    0
  );

  useEffect(() => {
    const paymentIntentAPIhit = async () => {
      try {
        if (totalSell > 0) {
          const { data } = await axiosSecure.post("/create-payment-intent", {
            price: totalSell,
          });

          setClientSecret(data.clientSecret);
        }
      } catch (err) {
        toast.error(`${err}`);
      }
    };

    paymentIntentAPIhit();
  }, [totalSell, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error:", error);
      setError(error?.message);
      setProcessing(false);
      return;
    } else {
      console.log("paymentMethod:", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirmError:", confirmError);
      toast.error(`${confirmError.message}`);
      setProcessing(false);
      return;
    } else {
      console.log("paymentIntent:", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          userName: user?.displayName || "Anonymous",
          userEmail: user?.email || "Anonymous",
          price: totalSell,
          transactionId: paymentIntent.id,
          date: new Date().toLocaleString(),
          cartIds: userCartData?.map((cart) => cart._id),
          menuItemIds: userCartData?.map((cart) => cart.menuId),
          status: "pending",
        };

        try {
          const { data: paymentResult } = await axiosSecure.post(
            "/payments",
            paymentInfo
          );
          console.log(paymentResult);

          toast.success("You're done");
          cartRefetch();
          setProcessing(false);
          navigate("/dashboard/paymentHistory");
        } catch (err) {
          toast.error(`${err}`);
          setProcessing(false);
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80vw] md:w-[30vw] md:min-w-[400px] self-center rounded-md mx-auto"
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        className="p-4 border border-gray-400 rounded-md"
      />
      <p className="text-red-600">{error}</p>
      <button
        type="submit"
        disabled={!stripe || !clientSecret || processing}
        className={`mt-4 w-full max-w-32 h-8 rounded-md bg-[#570DF8] text-white text-lg font-bold ${
          !stripe || !clientSecret ? "hidden" : ""
        }`}
      >
        {processing ? <ImSpinner className="animate-spin m-auto" /> : "Pay"}
      </button>
    </form>
  );
};

export default CheckoutForm;
