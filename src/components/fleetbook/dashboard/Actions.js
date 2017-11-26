import * as types from './ActionTypes';

export function loadDashboardInitData(dashboard){
  console.log('---------------------- .>> types.LOAD_DASHBOARD_INIT_DATA <<. ----------------------');
  console.log(sessionStorage.getItem('jwtToken'));
  return {type:types.LOAD_DASHBOARD_INIT_DATA, dashboard};
};
