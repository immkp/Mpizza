import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch} from 'react-redux'
 import {placeOrder} from '../actions/orderActions'
function Checkout(subtotal) {
 const dispatch = useDispatch()
 const tokenHandler=(token)=>{
   console.log(token)
   dispatch(placeOrder(token, subtotal))

 }
  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        currency='INR'
        stripeKey='pk_test_51JNUNxSCJAV8kN4hXySDcVJGHomNiZoBjavU8DIRLOSgX4eaxpnHg9NZQLUiAvwyHSbLbUTerAqAO8gtNMEldZz200JVOh3SL6'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
    </div>
  )
}

export default Checkout
