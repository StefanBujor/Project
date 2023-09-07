import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';
import { allProductsReducer } from './reducers/allProductsReducer';

const rootReducer = combineReducers({
  allcategories: categoriesReducer,
  productsByCategory: productsByCategoryReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  allProducts: allProductsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
