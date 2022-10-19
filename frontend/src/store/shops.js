import csrfFetch from "./csrf.js";

const ADD_SHOP = 'shops/addShop';
const LIST_SHOPS = 'shops/listShops';
const ADD_PRODUCT = 'products/addProduct';


const addShop = (payload) => ({
  type: ADD_SHOP,
  payload
});

const likeShop = (payload) => ({
  type: ADD_SHOP,
  payload
});

const listShops = (shops) => ({
  type: LIST_SHOPS,
  shops
});

export const fetchShop = (id) => async dispatch => {
    const response = await csrfFetch(`/api/shops/${id}`);
    const data = await response.json();
    dispatch(addShop(data));
}

export const fetchShops = () => async dispatch => {
  const response = await csrfFetch(`/api/shops`);
  const shops = await response.json();
  dispatch(listShops(shops));
}

export const sendLike = (id) => async dispatch => {
  const response = await csrfFetch(`/api/shops/${id}`, {method: 'PATCH'});
  const shops = await response.json();
  dispatch(likeShop(shops));
}

const initialState = JSON.parse(sessionStorage.getItem("shops")) || {}
  
  const shopsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SHOP:
        return {...state, [action.payload.shop.id] : action.payload.shop}

      case ADD_PRODUCT:
        return {...state, [action.payload.shop.id] : action.payload.shop}

      case LIST_SHOPS:
        return action.shops
  
      default:
        return state;
    }
  };

  export default shopsReducer;