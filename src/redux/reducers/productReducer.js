import { ActionTypes } from '../action-types';

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const addItemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_ITEM:
      return [...state, payload];

    case ActionTypes.DEL_ITEM:
      return (state = state.filter((x) => {
        return x.id !== payload.id;
      }));

    default:
      return state;
  }
};
