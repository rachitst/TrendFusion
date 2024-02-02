import React from "react";

const OrderPlaced = ({ orderDetails }) => {
  return (
    <div>
      <h2>Order Placed!</h2>
      <p>Order ID: {orderDetails.orderId}</p>
      {/* Display other order details */}
      <p>First Name: {orderDetails.userInputs.firstName}</p>
      <p>Last Name: {orderDetails.userInputs.lastName}</p>
      {/* Add other relevant details */}
    </div>
  );
};

export default OrderPlaced;
