const express = require('express')
const router = express.Router()
const {v4 : uuidv4} = require('uuid')
const stripe = require('stripe')(
  'sk_test_51JNUNxSCJAV8kN4hY3GqlemYHZvlrea3MBMMj7YYLEfLNtHoI9PlXlzbYsinuVM6plkpXJMzd9ClN12cAAb9NoNw00sDDgp8gF'
)

const Order = require('../models/orderModel')


router.post('/placeorder', async (req, res) => {
  const {token,subtotal,currentUser,cartItems} = req.body
  try {
   const customer = await stripe.customers.create({
    email:token.email,
    source:token.id
   })
   const payment = await stripe.charges.create({
    amount:500000,
    currency:'inr',
    customer:customer.id,
    receipt_email:token.email
   },{
    idempotencyKey:uuidv4()
   })
   if(payment){
    
    const neworder = new Order({
      name: currentUser.name,
      email: currentUser.email,
      userid: currentUser.userid,
      orderItems: cartItems,
      orderAmount: subtotal,
      shippingAddress: {
        street: token.card.address_line1,
        city: token.card.address_city,
        country: token.card.address_country,
        pincode: token.card.address_zip,
      },
      transactionId: payment.source.id,
    })
    neworder.save();

    res.send('order placed successfully')
   }
   else{
    res.send('payment failed')
   }
  } catch (error) {
    return res.status(400).json({ message: error })
  }
})

module.exports = router