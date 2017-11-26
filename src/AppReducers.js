import {combineReducers}    from 'redux';
import user                 from './components/auth/Reducer';
import dashboard            from './components/fleetbook/dashboard/Reducer';

const rootReducer = combineReducers({
user, dashboard
});

export default rootReducer;
