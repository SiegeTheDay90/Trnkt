import csrfFetch from "./csrf.js";

const ADD_SHOP = 'shops/addShop'
const ADD_PRODUCT = 'products/addProduct'

const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload
})

export const fetchProduct = (id) => async dispatch => {
    const response = await csrfFetch(`/api/products/${id}`);
    const data = await response.json();
    dispatch(addProduct(data));
}

const initialState = JSON.parse(sessionStorage.getItem("products"))  || {}
  
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, [action.payload.product.id]: action.payload.product}
      
        case ADD_SHOP:
            return action.payload.products
  
        default:
            return state;
    }
};

export default productsReducer;