/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { getOrderData } from '../api/Checkoutapi';
import { useNavigate, useParams } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();
  const publishableKey = 'pk_test_51OG3DaSAU3dTbUsck3ggFNJx6a17fB7gENUFNF5XULkrGRQMKJv8ge2xh92q9YS7FQmFx5NcnCHHxHpZmTkDuKOw00qU1FFkmq'; // Replace with your actual Stripe publishable key
  const { orderID } = useParams();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const data = await getOrderData(orderID);
        setOrderData(data);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, [orderID]);


  const handlePaymentSuccess = (token) => {
    // Send the payment token to your backend for processing
    alert('Payment successful:', token);
    navigate('/thankyou');
    
  };

  const handlePaymentError = (error) => {
    alert('Payment error:', error);
  };

  return (
    <div>
      <h2>Payment Form</h2>
      {orderData ? (
        <StripeCheckout
          token={handlePaymentSuccess}
          stripeKey={publishableKey}
          amount={orderData.productkaData.price * 100} // Convert price to cents
          currency="INR"
          name="Your Company Name"
          description={orderData.productkaData.description}
          billingAddress={false}
        >
          <button>Pay Now</button>
        </StripeCheckout>
      ) : (
        <p>Loading order data...</p>
      )}
    </div>
  );
};

export default PaymentForm;
