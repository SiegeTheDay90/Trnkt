import csrfFetch from "./csrf.js";

const ADD_SHOP = 'shops/addShop'
const ADD_PRODUCT = 'products/addProduct'

const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product
})

export const fetchProduct = (id) => async dispatch => {
    const response = await csrfFetch(`/api/products/${id}`);
    const product = await response.json();
    dispatch(addProduct(product));
}

const initialState = { 
    products: JSON.parse(sessionStorage.getItem("products"))
};
  
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, [action.product.id]: action.product}
      
        case ADD_SHOP:
            return action.shop.products
  
        default:
            return state;
    }
};

export default productsReducer;