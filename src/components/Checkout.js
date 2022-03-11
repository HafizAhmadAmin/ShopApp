import React from "react";

function Checkout(props) {
  const {checkoutMode} = props;

  return (
    <div className="checkout">
      <div className="payment-header">
        <div className="check">
          <i className="fa fa-check" aria-hidden="true"></i>
        </div>
      </div>
      <h1 className="mt-2">Payment Success !</h1>
      <button className="btn btn-primary" style={{margin:"30px"}} onClick={checkoutMode}>OK</button>
    </div>
  );
}

export default Checkout;
