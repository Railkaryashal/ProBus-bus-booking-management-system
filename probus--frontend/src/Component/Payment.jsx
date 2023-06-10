import React from 'react';

const Payment = ({ transaction }) => {
  const handlePayment = () => {
    console.log('Payment process initiated');
    alert('Payment successful! Enjoy the ride!');
    window.location = '/user';
  };

  const handleCancel = () => {
    window.location = '/user';
  };

  const renderDiscountMessage = () => {
    if (transaction.discount === null) {
      return <p>Book with us & get more discounts!</p>;
    } else {
      return (
        <p className="text-success">
          <strong>You got {transaction.discount} Discount!</strong>
        </p>
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Payment Details</h2>
      <div className="card">
        <div className="card-body text-center">
          <div className="card-text">
            <p>
              <strong>Transaction ID:</strong> {transaction.transactionId}
            </p>
            <p>
              <strong>No. of Passengers:</strong> {transaction.noOfPassenger}
            </p>
            <p>
              <strong>Bus Name & Number Plate:</strong> {transaction.busName} & {transaction.numberPlate}
            </p>
            <p>
              <strong>Total Price:</strong> {transaction.totalPrice}
            </p>
            {renderDiscountMessage()}
          </div>
          <div className="buttons mt-4">
            <button className="btn btn-primary " onClick={handlePayment}>
              Pay
            </button>
            <br></br>
            <button className="btn btn-secondary mt-3" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
