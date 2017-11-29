import * as types from './ActionTypes';

export function getFleetOperationsData(fleetOperations){
  console.log('---------------------- .>> types.GET_FLEET_OPERATIONS_DATA <<. ----------------------');
  return {type:types.GET_FLEET_OPERATIONS_DATA, fleetOperations};
};
