const initialState = {
  authenticated: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN': 
      return {
        ...state,
        authenticated: true,
        error: null,
        uid: action.uid,
        name: action.name
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
        error: null
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        error: action.error.message
      };
    default:
      return state;
  }
};