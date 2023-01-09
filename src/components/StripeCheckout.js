import { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, Elements, useElements} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCartContext } from "../Contexts/context/cart_context";
import { useUserContext } from "../Contexts/context/user_context";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/helper";

const promise = loadStripe(process.env.REACT_APP_STRIPE_DOMAIN_KEY);

const CheckoutForm = () => {
      const { cart, totalAmount, shippingFees, clearCart } = useCartContext();
      const { myUser } = useUserContext();
      const navigate = useNavigate();
      const [succeeded, setSucceeded] = useState(false);
      const [error, setError] = useState(null);
      const [processing, setProcessing] = useState('');
      const [disabled, setDisabled] = useState(true);
      const [clientSecret, setClientSecret] = useState('');
      const stripe = useStripe();
      const elements = useElements();

      const cardStyle = {
            style: {
              base: {
                color: '#32325d',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                  color: '#32325d',
                },
              },
              invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
              },
            },
          };

      const createPaymentIntent = async () => {
            try {
                  const { data } = await axios.post(
                        '/.netlify/functions/create-payment-intent',
                        JSON.stringify({ cart, shippingFees, totalAmount })
                  )
                  setClientSecret(data.clientSecret)
            } catch (error) {
                  console.log(error)
            }
      }  
      
      useEffect(() => {
            createPaymentIntent();
      // eslint-disable-next-line 
      }, []);

      const handleChange = async (event) => {
            setDisabled(event.empty);
            setError(event.error ? event.error.message : '');
      }
      const handleSubmit = async (event) => {
            event.preventDefault();
            setProcessing(true);
            const payload = await stripe.confirmCardPayment(clientSecret, {
              payment_method: {
                card: elements.getElement(CardElement),
              },
            });
            if (payload.error) {
              setError(`Payment failed ${payload.error.message}`);
              setProcessing(false);
            } else {
              setError(null);
              setProcessing(false);
              setSucceeded(true);
              setTimeout(() => {
                clearCart();
                navigate('/');
              }, 10000);
            }

      }

      return (
            <div>
            {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <p className='result-message'>Your payment was successful!</p>
          <p className='result-message'>Redirecting to home page shortly</p>
        </article>
      ) : (
        <article>
          <h4 >Hello, {myUser && myUser.name}</h4>
          <p className='result-message'>Your total is <span>{formatPrice(totalAmount)}</span></p>
          <p className='result-message'>Test Card Number: <span>4242 4242 4242 4242</span></p>
        </article>
      )}
            <form id='payment-form' onSubmit={handleSubmit}>
                  <CardElement id='card-element' options={cardStyle} onChange={handleChange} />
                  <button disabled={processing || disabled || succeeded} id='submit'>
                        <span id="button-text">
                              {processing ? (
                                    <div className='spinner' id='spinner'></div>  
                              ): 'Pay'}
                        </span>
                  </button>
                  {error && (
                        <div className="card-error" role='alert'>
                              {error}
                        </div>
                  )}
                  <p className={succeeded ? 'result-message' : 'result-message hidden'}>Payment succeeded, see the result in your &nbsp;
                  <a href={`https://dashboard.stripe.com/text/payments`}>
                        Stripe dashboard.&nbsp;
                  </a>
                  Refresh the page to pay again.</p>
            </form>
            </div>
            )
}

const StripeCheckout = () => {
  return (
      <section className="checkout--stripe">
      <Elements stripe={promise}>
            <CheckoutForm />
      </Elements>
      </section>
  )
}

export default StripeCheckout;

