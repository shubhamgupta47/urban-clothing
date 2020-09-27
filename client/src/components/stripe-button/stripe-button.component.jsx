import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gvj2rHSZyu4X1ZgJ0c5bNUk2Qjs6nHGuLNsd7TXLXNoDyTN2NEIOu6sC8j5UHv4ni91oB3eSH4pmX8vAZ6l2eMR00uys7q0ql";

  const onToken = (token) => {
    axios({
      url: "http://localhost:5000/payment/",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
        description: "Test charge",
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error:", error);
        alert("Payment Failed");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Urban Styles"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
