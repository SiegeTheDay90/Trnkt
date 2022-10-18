import csrfFetch from "./csrf.js";

const SET_CURRENT_USER = 'session/setCurrentUser';


export const fetchProduct = (id) => async dispatch => {
    const response = await csrfFetch(`/api/products/${id}`);
    const product = await response.json();
    dispatch(addProduct(product));
}

const initialState = { 
    products: JSON.parse(sessionStorage.getItem("products"))
};
  
const cartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {...state, [action.product.id]: action.product}
      
        case ADD_SHOP:
            return action.shop.products
  
        default:
            return state;
    }
};

export default cartsReducer;