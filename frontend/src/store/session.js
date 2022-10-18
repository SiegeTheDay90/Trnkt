import csrfFetch from "./csrf.js";
import { storeCSRF } from "./csrf.js";
import { storeErrors } from "./errors.js";


const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';
const SET_CART_ITEM = 'session/setCartItem';


const addToCart = (payload) => ({
  type: SET_CART_ITEM,
  payload
});

const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});


const storeCurrentUser = user => {
  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
}

export const sendCartItem = (productId, quantity) => async dispatch => {
  await csrfFetch("/api/session", {
    method: "PATCH",
    body: JSON.stringify({productId, quantity})
  }).then(async response => {
    const data = await response.json();
    dispatch(addToCart(data))
  })
}

export const login = ({ credential, password }) => async dispatch => {
  await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ credential, password })
  
  }).then(async response => {
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data));
  }).catch(async error => {
    const data = await error.json();
    dispatch(storeErrors(data));
  });

};

export const restoreSession = () => async dispatch => {
  const response = await csrfFetch("/api/session");
  storeCSRF(response);
  const data = await response.json();
  storeCurrentUser(data);
  dispatch(setCurrentUser(data));
};

export const signup = (user) => async (dispatch) => {
  const { firstName, email, password } = user;
  await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      firstName,
      email,
      password
    })

  }).then(async response => {
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data))

  }).catch(async error => {
    const data = await error.json();
    dispatch(storeErrors(data));
  });

};

export const logout = () => async (dispatch) => {
  await csrfFetch("/api/session", {
    method: "DELETE"
  });
  storeCurrentUser(null);
  dispatch(removeCurrentUser());
};

const initialState = { 
  user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { user: action.payload.user, cart: action.payload.cartItems };

    case REMOVE_CURRENT_USER:
      return { user: null, cart: null};

    case SET_CART_ITEM:
      return { user: action.payload.user, cart: action.payload.cartItems }

    default:
      return state;
  }
};

export default sessionReducer;
