import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const SimpleCardForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [processing, setProcessing] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null);
      console.log(error);
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null);
      handlePayment(paymentMethod.id)
      setProcessing(false);
      console.log('[PaymentMethod]', paymentMethod);
    }
  };
  if (paymentSuccess) {
    Swal.fire(
      'Great!',
      'Your order has been saved!',
      'success'
    )
    history.push('/ownOrderedList')
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="col-md-6">
          <CardElement id="card-element" />
        </div>

        <hr class="my-4" />

        <button class="w-100 btn btn-primary btn-lg" type="submit"><span>{processing ? "Processing..." : "Continue to Checkout"}</span></button>
      </form >
      {
        paymentError && <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'red' }}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'green' }}>Your Payment is successful</p>
      }
    </div>
  );
};
export default SimpleCardForm;