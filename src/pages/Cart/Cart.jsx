import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);
  const navigate= useNavigate();

  return (
    <>
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
      </div>
    </div>
  


    {food_list.map((item, index) => {
  const quantity = cartItems[item._id];

  if (quantity > 0) {
    return (
      <div key={index} className="cart-item">
        <div className="cart-items-title cart-items-item">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>{quantity}</p>
          <p>${item.price * quantity}</p>
          <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
         
        </div>
        <hr />
      </div>
    );
  }

  return null; // Ensure no empty items are rendered
})}


<div className="cart-bottom">
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
        to Checkout
      </button>
      </div>
      </div>
    <div className="cart-promocode">
      <div>
        <p> If you have a promo code ,Enter it  here</p>
        <div className='cart-promocode-input'>
          <input type='text' placeholder='promo code' />
          <button>Submit</button>

        </div>
       
      </div>
      </div>
  

</div>


    </>
  )
}

export default Cart