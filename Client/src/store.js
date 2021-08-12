import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {getAllPizzasReducer} from './reducers/pizzaReducers'
import {cartReducer} from './reducers/cartReducers'
import { registerUserReducer, loginUserReducer } from './reducers/userReducers'
import {placeOrderReducer} from './reducers/orderReducers'

const finalReducer = combineReducers({
  getAllPizzasReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,
  placeOrderReducer,
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse
(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null


const initialState = {
 cartReducer :{
  cartItems, 
 },
 loginUserReducer:{
   currentUser,
 }
}
const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;