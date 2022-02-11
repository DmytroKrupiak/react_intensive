import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productActions';
import ProductComponent from './ProductComponent';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default Home;
