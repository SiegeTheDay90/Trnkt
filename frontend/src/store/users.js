import csrfFetch from "./csrf.js";
import { storeErrors } from "./errors.js";


const ADD_USER = 'users/add'
const LIST_USERS = 'users/list'
const ADD_SHOP = 'shops/addShop'


const addUser = (user) => ({
    type: ADD_USER,
    user
})

const listUsers = (users) => ({
    type: LIST_USERS,
    users
})

export const fetchUser = (id) => async dispatch => {
    await csrfFetch(`/api/users/${id}`
    ).then( async response => {
        const user = await response.json();
        dispatch(addUser(user));
    }).catch(async response => { 
        const errors = await response.json();
        dispatch(storeErrors(errors))
    })
}

export const fetchUsers = () => async dispatch => {
    const response = await csrfFetch(`/api/users`);
    const users = await response.json();
    dispatch(listUsers(users));
}

const initialState = { 
    users: JSON.parse(sessionStorage.getItem("users"))
};
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, [action.user.id] : action.user}

        case LIST_USERS:
            return action.users
        
        case ADD_SHOP:
            return {...state, [action.shop.seller.id] : action.shop.seller}
  
        default:
            return state;
    }
  };

  export default usersReducer;