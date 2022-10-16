import csrfFetch from "./csrf.js";

const ADD_SHOP = 'shops/addShop'

const addShop = (shop) => ({
    type: ADD_SHOP,
    shop
})

export const getShop = (id) => async dispatch => {
    const response = await csrfFetch(`/api/shops/${id}`);
    const shop = await response.json();
    dispatch(addShop(shop));
}

const initialState = { 
    shops: JSON.parse(sessionStorage.getItem("shops"))
};
  
  const shopsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SHOP:
        return {...state, [action.shop.id] : action.shop}
  
      default:
        return state;
    }
  };

  export default shopsReducer;