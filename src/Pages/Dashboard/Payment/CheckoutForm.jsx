import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transitionId, setTransitionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
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
      console.log("confirm error");
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transition Id:", paymentIntent.id);
        setTransitionId(paymentIntent.id);

        // save the payment item in the db
        const payment = {
          email: user.email,
          price: totalPrice,
          transitionId: paymentIntent.id,
          //   todo: utc date convert, using moment js
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemsIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          navigate("dashboard/paymentHistory");
          Swal.fire({
            title: "Good job!",
            text: "Payment Successful!",
            icon: "success",
          });
        }
        console.log(res.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#ffffff",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className='btn btn-primary my-6'
        type='submit'
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className='text-red-600'>{error}</p>
      {transitionId && (
        <p className='text-green-600'>Your Transition id is:{transitionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
