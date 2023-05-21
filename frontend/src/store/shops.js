import csrfFetch from "./csrf.js";

const ADD_SHOP = 'shops/addShop';
const LIST_SHOPS = 'shops/listShops';
const ADD_PRODUCT = 'products/addProduct';


const addShop = (payload) => ({
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

export const fetchShops = (options = {}) => async dispatch => {
  let response;
  let url = '/api/shops?'

  if(options.title){
    url = url + `title=${options.title}&`;
  }

  if(options.num){
    url = url + `num=${options.num}`;
  }

  response = await csrfFetch(url);
  const data = await response.json();
  dispatch(listShops(data.shops));
}

export const likeShop = (id) => async dispatch => {
  const response = await csrfFetch(`/api/shops/${id}`, {method: 'PATCH'});
  const shop = await response.json();
  dispatch(addShop(shop));
}

const initialState = JSON.parse(sessionStorage.getItem("shops")) || {}
  
  const shopsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SHOP:
        return {...state, [action.payload.shop.id] : action.payload.shop}

      case ADD_PRODUCT:
        return {...state, [action.payload.shop.id] : action.payload.shop}

      case LIST_SHOPS:
        return {...state, ...action.shops}
  
      default:
        return state;
    }
  };

  export default shopsReducer;