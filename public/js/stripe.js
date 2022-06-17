/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51LB91FBJSCrZ3gDcYmBN5MS0UcaOKQ6CtrdCHyfxYoegXojdetjFK0ZPKFKeGszAQwOVxmfeakJNLvRebQS8WFKL004Wm60aEs'
);

export const bookTour = async tourId => {
  try {
    //1) getting checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    //2) creating checkout form + charging credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
