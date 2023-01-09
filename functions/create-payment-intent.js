// domain/.netlify/functions/create-payment-intent

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_CLIENT_KEY);

exports.handler = async function (event, context) {
  if (event.body) {

    const { cart, shippingFees, totalAmount } = JSON.parse(event.body)
    
    const calculateOrderAmount = () => {
      // Replace this constant with a calculation of the order's amount
      // Calculate the order total on the server to prevent
      // people from directly manipulating the amount on the client-
      return shippingFees + totalAmount;
    }
    try {
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      })
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      }
    }
  }
    return {
      statusCode: 200,
      body: 'Create Payment Intent',
    }
  }