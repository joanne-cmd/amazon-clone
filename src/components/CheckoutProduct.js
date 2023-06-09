import React from 'react'
import "./checkoutproduct.css"
import { useStateValue }from './StateProvider'
function CheckoutProduct({id, image, title, price, rating}) {
  const[{basket}, dispatch]= useStateValue()

  const removeFromBasket = ()=>{
    // remove the  item from basket
      dispatch({
        type:"REMOVE_FROM_BASKET",
        id: id,

      })
  }
  return (
    <div className='checkoutProduct'>
        <img  className='checkoutProduct__image' src={image} alt='pic'/>

        <div className='checkoutProduct__info' >
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_, i)=>(<p>⭐</p>))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>

    </div>
  )
}

export default CheckoutProduct