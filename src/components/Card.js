import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Header from "./Header";
import Footer from "./Footer";

const stripePromise = loadStripe("pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA");

const Card = () => {
  return (
    <>
      <Header />
      <div className="payment-page">
        <p className="payment-heading">Checkout</p>
        <p className="payment-subheading">Review your order and pay securely</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
      <Footer />
    </>
  );
};

export default Card;