const SET_ERRORS = 'errors/setErrors'

const setErrors = (errors) => ({
    type: SET_ERRORS,
    errors
})

export const storeErrors = (errors) => dispatch => {
    dispatch(setErrors(errors));
}

const initialState = JSON.parse(sessionStorage.getItem("errors"))  || {}
  
  const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ERRORS:
        return action.errors.errors;
  
      default:
        return state;
    }
  };

  export default errorsReducer;