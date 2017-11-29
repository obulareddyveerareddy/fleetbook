import {combineReducers}    from 'redux';
import user                 from './components/auth/Reducer';
import dashboard            from './components/fleetbook/dashboard/Reducer';
import fleetOperations      from './components/fleetbook/operations/Reducer';

const rootReducer = combineReducers({
user, dashboard, fleetOperations
});

export default rootReducer;
