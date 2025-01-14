import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext'

const Cart = () => {
  const  { food_list, cartitem , removeCart, getAmount} = useContext(FoodContext)

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Food</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {food_list.map((food) => {
        if(cartitem[food._id]) {
          return (
            <div>
            <div className="cartitems-format cartitems-format-main">
              <img
                src={food.image}
                alt=""
                className="carticon-product-icon"
              />
              <p>{food.name}</p>
              <p>${food.price}</p>
              <button className="cartitems-quantity">
                {cartitem[food._id]}
              </button>
              <p>${food.price * cartitem[food._id]}</p>
              <img
                src="./cart_cross_icon.png"
                alt=""
                class="cartitems-remove-icon"
                onClick={() => removeCart(food._id)}
              />
            </div>
            <hr />
          </div>
          )
        }
       })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart