import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
// import Pay from "./pay";

const Stripe = ({ amount, desc, border }) => {
  const handleToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51N3ZJPSIrRWTN6qRl2GyjZZR0Ycop9w02iSOgFbzLlF6zyflnFK1qMfThiDkmlXjiStTpa1kYmsiMwAR5urHIlPj00SIroa46E"
      token={handleToken}
      name="Warriors Gym"
      amount={amount * 100}
      description={desc}
      testMode="true"
    >
      <button className={`border-2 p-2 text-lime-500 rounded-md ${border} `}>
        Pay Now
      </button>
    </StripeCheckout>
  );
};

export default Stripe;
