import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/productActions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className='ui container mtop80' key={cartItem.id}>
        <div className='ui center aligned container close'>
          <div className='ui right aligned container'>
            <i
              onClick={() => handleClose(cartItem)}
              className='large close icon'
            ></i>
          </div>
          <div>
            <div>
              <img
                src={cartItem.img}
                alt={cartItem.title}
                height='200px'
                width='180px'
              />
            </div>
            <div>
              <h3>{cartItem.title}</h3>
              <p>${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className='ui center aligned container empty-cart'>
        <p>Your Cart is Empty</p>
      </div>
    );
  };

  return (
    <>
      {cart.length === 0 && emptyCart()}
      {cart.length !== 0 && cart.map(cartItems)}
    </>
  );
};

export default Cart;
