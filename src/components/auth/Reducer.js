import * as types from './ActionTypes';

export default function user(state = {userName:'veerareddy.obula@gmail.com', userPassword:'fleetbook'}, action){
    switch(action.type){
        case types.VALIDATE_USER_LOGIN_DETAILS:
            return Object.assign({}, action.user);
        default:
            return state;
    }
}
