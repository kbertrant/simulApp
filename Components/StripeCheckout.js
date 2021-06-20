import React from 'react'
import StripeCheckout from 'react-native-stripe-checkout-webview';

const STRIPE_PUBLIC_KEY ='pk_test_51IrEAdDWcWS1gt4p412hmaQLZLjXh4oIG16Mk6CmD5uJjRWREhSogfvEtk7soSz1s0lyF6UKl7cCfYCwn6XKPRBF00MijJ9oqL'
const CHECKOUT_SESSION_ID = '2460'

const MyStripeCheckout = ({ STRIPE_PUBLIC_KEY, CHECKOUT_SESSION_ID }) => (
  <StripeCheckout
    stripePublicKey={'pk_test_51IrEAdDWcWS1gt4p412hmaQLZLjXh4oIG16Mk6CmD5uJjRWREhSogfvEtk7soSz1s0lyF6UKl7cCfYCwn6XKPRBF00MijJ9oqL'}
    checkoutSessionInput={{
      sessionId: CHECKOUT_SESSION_ID,
    }}
    onSuccess={({ checkoutSessionId }) => {
      console.log(`Stripe checkout session succeeded. session id: ${checkoutSessionId}.`);
    }}
    onCancel={() => {
      console.log(`Stripe checkout session cancelled.`);
    }}
  />
);

export default MyStripeCheckout;