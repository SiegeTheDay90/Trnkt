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

export const fetchProducts = (options = [{}]) => async dispatch => {
    let products = {};
    
    await options.forEach(async (option) => {
        let url = '/api/products?'
        if(option.title){
            url = url + `title=${option.title}&`;
        }
        
        if(option.num){
            url = url + `num=${option.num}`;
        }
        
        const response = await csrfFetch(url);
        const data = await response.json();
        products = await {...products, ...data};
        debugger;
        dispatch(addProducts(products));
    })
}

export const likeProduct = (id) => async dispatch => {
    const response = await csrfFetch(`/api/products/${id}`, {method: 'PATCH'});
    const product = await response.json();
    dispatch(addProduct(product));
}

const initialState = JSON.parse(sessionStorage.getItem("products"))  || {}
  
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, [action.payload.product.id]: action.payload.product}
      
        case ADD_SHOP:
            return {...state, ...action.payload.products}
        
        case ADD_PRODUCTS:
            return {...state, ...action.payload}
  
        default:
            return state;
    }
};

export default productsReducer;