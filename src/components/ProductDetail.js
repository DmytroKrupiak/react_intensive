import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProduct,
  removeSelectedProduct,
  addItem,
  delItem,
  decrementProduct,
  incrementProduct,
} from '../redux/productActions';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const [cartBtn, setCartBtn] = useState(() => {
    return cart.some((el) => String(el.id) === productId)
      ? 'Remove from cart'
      : 'Add to Cart';
  });
  const { img, title, price, description } = product;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, productId]);

  const handleCart = (product) => {
    if (cartBtn === 'Add to Cart' && product.inStock > 0) {
      setCartBtn('Remove from cart');
      dispatch(addItem(product));
      dispatch(decrementProduct(product));
    } else {
      setCartBtn('Add to Cart');
      dispatch(delItem(product));
      dispatch(incrementProduct(product));
    }
  };
  return (
    <div className='ui grid container'>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className='ui placeholder segment'>
          <div className='ui two column stackable center aligned grid'>
            <div className='ui vertical divider'>Try it</div>
            <div className='middle aligned row'>
              <div className='column lp'>
                <img className='ui fluid image' src={img} alt={title} />
              </div>
              <div className='column rp'>
                <h1>{title}</h1>
                <h2 className='ui teal tag label'>${price}</h2>
                <p>{description}</p>
                {product.inStock > 0 && (
                  <div
                    onClick={() => handleCart(product)}
                    className='ui button'
                    tabIndex='0'
                  >
                    <div className='visible content'>{cartBtn}</div>
                  </div>
                )}
                {product.inStock <= 0 && (
                  <div className='ui button' tabIndex='0'>
                    <div className='visible content'>
                      Product is not available
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
