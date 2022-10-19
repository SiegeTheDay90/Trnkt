import csrfFetch from "./csrf.js";

const ADD_SHOP = 'shops/addShop'
const ADD_PRODUCT = 'products/addProduct'
const ADD_PRODUCTS = 'products/addProducts'

const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload
})

const addProducts = (payload) => ({
    type: ADD_PRODUCTS,
    payload
})

export const fetchProduct = (id) => async dispatch => {
    const response = await csrfFetch(`/api/products/${id}`);
    const data = await response.json();
    dispatch(addProduct(data));
}

export const fetchProducts = (num) => async dispatch => {
    const response = await csrfFetch(`/api/products?num=${num}`);
    const data = await response.json();
    dispatch(addProducts(data));
}

const initialState = JSON.parse(sessionStorage.getItem("products"))  || {}
  
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, [action.payload.product.id]: action.payload.product}
      
        case ADD_SHOP:
            return action.payload.products
        
        case ADD_PRODUCTS:
            return action.payload
  
        default:
            return state;
    }
};

export default productsReducer;