import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className='ui fixed menu'>
      <div className='ui container'>
        <h2>Snowboard's paradise</h2>
        <div className='ui center aligned container'>
          <p>
            В корзине {cart.length} товаров на сумму{' '}
            {cart.map((el) => +el.price).reduce((a, c) => a + c, 0)}$
          </p>
        </div>
        <div className='ui three item menu'>
          <Link to='/cart'>
            <i className='large shopping cart icon'></i>
          </Link>
          <Link to='/' className='item'>
            Home
          </Link>
          <Link to='/about' className='item'>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
