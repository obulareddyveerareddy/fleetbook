import * as types from './ActionTypes';


export default function user(state = [], action){
    switch(action.type){
        case types.GET_FLEET_OPERATIONS_DATA:
            return action.fleetOperations;
        default:
            return state;
    }
}
