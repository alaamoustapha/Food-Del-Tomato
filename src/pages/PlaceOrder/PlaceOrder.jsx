import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext);
  const navigate= useNavigate();

  return (
    <>
    <form className='place-order-form'>
      <div className="place-order-left">
  <p className='title'> Delivrey Information</p>
  <div className="multi-fields">
    <input type='text' placeholder='first name' />
    <input type='text' placeholder='last name' />
  </div>
  <input type='email' placeholder='Email' />
  <input type='text' placeholder='Street' />
  <div className="multi-fields">
    <input type='text' placeholder='City' />
    <input type='text' placeholder='State' />
  </div>
  <div className="multi-fields">
    <input type='text' placeholder='Zip Code' />
    <input type='text' placeholder='Country' />
  </div>
  <input type='text' placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
    <h2>
      Cart Total
    </h2>
    <div>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>{getTotalCartAmount()}</p>
      </div>
      <hr/>
      <div className="cart-total-details">
        <p>Delivey Fee</p>
        <p>${getTotalCartAmount()===0?0 : 2}</p>
      </div>
      <hr/>
      <div className="cart-total-details">
        <b> Total</b>
        <b>{getTotalCartAmount()+(getTotalCartAmount()===0?0 : 2)}</b>
      </div>
      <button className='btn-check'  onClick={()=>{navigate("/order")}}>Proceed 
        to Payment
      </button>
      </div>
      </div>

      </div>

    </form>
    </>
  )
}

export default PlaceOrder