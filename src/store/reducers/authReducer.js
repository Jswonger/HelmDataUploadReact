const initState = {
  uid: null,
  authError: null,
  isAdmin: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error', action.err.message);
      return {
        ...state,
        authError: action.err.message,
        uid: action.err.uid,
        isAdmin: action.err.isAdmin
      }
    case 'LOGIN_SUCCESS':
      console.log('login success', state);
      return {
        ...state,
        ...action.userInfo,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success', state);
      return {
        ...state,
        isAdmin: null,
        uid: null
      }
    default:
      return state
  }
};

export default authReducer;