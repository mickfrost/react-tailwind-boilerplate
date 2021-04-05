import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51ITwDOC25CJyrMBNsB2JFKSJCTdK2Yzt1oHJoojoGiMsXbVx3k5kZNdLSm9o0K2Q3XkU2V1LIqLMF3slQaPaMkYS00KynVvQwk";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
