const ADD_TO_CART = 'ADD_TO_CART';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });
export const incrementCountAction = payload => ({ type: INCREMENT_COUNT, payload });
export const decrementCountAction = payload => ({ type: DECREMENT_COUNT, payload });
export const deleteFromCartAction = payload => ({ type: DELETE_FROM_CART, payload });
export const clearCartAction = () => ({ type: CLEAR_CART });

const checkProduct = (state, payload) => {
  const productInState = state.find(el => el.id === payload.id);
  if(!productInState){
    return [...state, {...payload, count: 1}]
  } else {
    productInState.count++;
    return [...state]
  }
}

export const cartReducer = (state=[], action) => {
  if(action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else if(action.type === INCREMENT_COUNT) {
    state.find(el => el.id === action.payload).count++
    return [...state]
  } else if (action.type === DECREMENT_COUNT){
    const target = state.find(el => el.id === action.payload);
    if(target.count === 1){
      state = state.filter(el => el.id !== action.payload)
    } else {
      target.count--
    }
    return [...state]
  } else if(action.type === DELETE_FROM_CART) {
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === CLEAR_CART) {
    return []
  } else {
    return state
  }
}
