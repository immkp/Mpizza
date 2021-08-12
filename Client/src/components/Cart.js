import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import Checkout from './Checkout'

function Cart() {
 const cartstate = useSelector(state=>state.cartReducer)
 const cartItems = cartstate.cartItems 
 let subtotal = cartItems.reduce((x,item)=>x+item.price,0)
 const dispatch = useDispatch()

 return (
  <div>
   <div className="row justify-content-center">
    <div className="col-md-6">
    <h2 style={{fontSize:"40px"}}>My Cart</h2>

    {cartItems.map(item =>{
     return (
       <div className='flex-container'>
         <div className='text-left m-1 w-100 '>
           <h1>
             {item.name} [{item.varient}]
           </h1>
           <h1>
             Price: {item.quantity} * {item.prices[0][item.varient]} ={' '}
             {item.price}
           </h1>
           <h1 style={{ display: 'inline' }}>Quantity : </h1>
           <i className='fa fa-plus' aria-hidden='true' 
           onClick={()=>{
              dispatch(addToCart(item,item.quantity+1,item.varient))
           }}></i>
           <b>{item.quantity}</b>
           <i className='fa fa-minus' aria-hidden='true' onClick={()=>{
   dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
           <hr />
         </div>
         <div className='m-1 w-100'>
           <img
             src={item.image}
             alt=''
             style={{ height: '80px', width: '80px' }}
           />
         </div>
         <div className='m-1 w-100 mt-4'>
           <i className='fa fa-trash' aria-hidden='true' onClick={()=>{dispatch(deleteFromCart(item))}}></i>
         </div>
       </div>
     )
    })}
    </div>
    <div className="col-md-4 text-right ">
     <h2 style={{fontSize:"45px"}}> SubTotal : {subtotal} /-</h2>
     <Checkout subtotal={subtotal}/>
    </div>
   </div>
  </div>
 )
}

export default Cart
