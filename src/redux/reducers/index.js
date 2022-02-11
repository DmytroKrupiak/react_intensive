import { combineReducers } from 'redux';
import {
  productReducer,
  selectedProductReducer,
  addItemsReducer,
} from './productReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: addItemsReducer,
});

export default reducers;
