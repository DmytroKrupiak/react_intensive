import api from '../api/api';
import { ActionTypes } from './action-types';

export const fetchProducts = () => async (dispatch) => {
  const response = await api.get('/items');
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await api.get(`/items/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const incrementProduct = (product) => async (dispatch) => {
  await api.put(`/items/${product.id}`, {
    ...product,
    inStock: product.inStock + 1,
  });
  fetchProduct(product.id);
};

export const decrementProduct = (product) => async (dispatch) => {
  await api.put(`/items/${product.id}`, {
    ...product,
    inStock: product.inStock - 1,
  });
  fetchProduct(product.id);
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addItem = (product) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: ActionTypes.DEL_ITEM,
    payload: product,
  };
};
