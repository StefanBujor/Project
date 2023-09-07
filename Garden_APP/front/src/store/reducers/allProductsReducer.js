const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const FILTER_PRODUCTS_BY_PRICE = 'FILTER_PRODUCTS_BY_PRICE';
const GET_DISCOUNT_PRODUCTS = 'GET_DISCOUNT_PRODUCTS';

export const loadAllProductsAction = payload => ({ type: LOAD_ALL_PRODUCTS, payload });
// export const addProductAction = payload => ({ type: ADD_PRODUCT, payload });
export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload });
export const filterProductsByPriceAction = payload => ({ type: FILTER_PRODUCTS_BY_PRICE, payload });
export const getDiscountProductsAction = payload => ({ type: GET_DISCOUNT_PRODUCTS, payload });

export const allProductsReducer = (state = [], action) => {
  if(action.type === LOAD_ALL_PRODUCTS){
    return action.payload.map(el => ({...el, visible: true }))
  } else if(action.type === SORT_PRODUCTS) {
    if (action.payload === 'title'){
      state.sort((a, b) => a.title.localeCompare(b.title))
    } else if (action.payload === 'price_asc'){
      state.sort((a, b) => a.price - b.price)
    } else if (action.payload === 'price_desc'){
      state.sort((a, b) => b.price - a.price)
    } else if (action.payload === 'default'){
      state.sort((a, b) => a.id - b.id)
    }
    return [...state]
  } else if(action.type === FILTER_PRODUCTS_BY_PRICE) {
    const { min_value, max_value } = action.payload;
    return state.map(el => {
      if(el.price >= min_value && el.price <= max_value){
        el.visible = true
      } else {
        el.visible = false
      }
      return el
    })
  } else if(action.type === GET_DISCOUNT_PRODUCTS) {
    if(action.payload){
      return state.map(el => {
        if(el.discont_price !== null){
          el.visible = true
        } else {
          el.visible = false
        }
        return el
      })
    } else {
      return state.map(el => {
        el.visible = true
        return el
      })
    }
    
  } else {
    return state
  }
}
