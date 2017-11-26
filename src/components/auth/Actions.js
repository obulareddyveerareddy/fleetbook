import * as types from './ActionTypes';

export function validateUserLoginDetails(user){
  sessionStorage.setItem('jwtToken', user);
  return {type:types.VALIDATE_USER_LOGIN_DETAILS, user};
};
