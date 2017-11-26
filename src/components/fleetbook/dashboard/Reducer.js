import * as types from './ActionTypes';

export default function user(state = {}, action){
    console.log('-------------------- .>> dashboard Reducer <<. --------------------');
    console.log(action);
    switch(action.type){
        case types.LOAD_DASHBOARD_INIT_DATA:
            return Object.assign({}, action.dashboard);
        default:
            return state;
    }
}
