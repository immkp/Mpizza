import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {addToCart} from '../actions/cartActions'
function Pizza({ pizza }) {
 const [quantity,setQuantity]= useState(1)
 const [varient, setvarient] = useState("small")

 const [show, setShow] = useState(false)

 const handleClose = () => setShow(false)
 const handleShow = () => setShow(true)

 const dispatch = useDispatch();
 const addtocart =()=>{
     dispatch(addToCart(pizza,quantity,varient))
 }

  return (
    <div
      className='shadow-lg p-3 mb-5 bg-white rounded'
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          alt=''
          className='img-fluid'
          style={{ height: '200px', width: '200px' }}
        />
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>varients</p>
          <select
            className='form-control'
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value)
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>
            })}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select
            className='form-control'
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value)
            }}
          >
            {[...Array(10).keys()].map((num, index) => {
              return (
                <option value={num + 1} key={index}>
                  {num + 1}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <h1 className='mt-1'>
            Price : {pizza['prices'][0][varient] * quantity} Rs.
          </h1>
        </div>
        <div className='w-100 m-1'>
          <button className='btn' onClick={addtocart}>Add To Cart</button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            alt=''
            className="img-fluid"
            style={{ height: '400px !important' }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Pizza
