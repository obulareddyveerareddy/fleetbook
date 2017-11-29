import { connect }                from 'react-redux'
import * as fleetOperationActions from './Actions'
import OperationsPage             from './OperationsPage'
import fetch                      from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  let setBreadCrumbModal = function(){
    return [
      {lbl:'Dashboard', path:'/fleetbook/dashboard', isActive:false},
      {lbl:'Fleet Operations', path:'/fleetbook/operations', isActive:true}
    ]
  }
  let getOperationsMeta = function(){
    return {
      base:{
        defaultView:{value: 1}
      }
    }
  }
  let setFleetOperationsDataSource = function(dataSource){
    console.log('~~~~~~~~~~~~~~~ setFleetOperationsDataSource ~~~~~~~~~~~~~~~');
    console.log(dataSource);
    return dataSource;
  }
  return {
    user: state.user,
    dashboard:state.dashboard,
    breadCrumbModal: setBreadCrumbModal(),
    operations:getOperationsMeta(),
    fleetOperations:setFleetOperationsDataSource(state.fleetOperations)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleViewChange: (event) =>{
      console.log('----------------------->>>> DropDownMenu handleChange <<<<-----------------------');
      console.log(event);
    },
    fetchOrgFleetOperations:() =>{
      console.log('----------------------->>>> fetchOrgFleetOperations() Init AJAX Request <<<<-----------------------');
      fetch('/api/org/fleetoperations').then(function(response) {
        console.log('---------------- /api/org/fleetoperations :( ----------------');
        console.log(response);
        return response.json();
      })
      .then(function(responseAsJson) {
        // Do stuff with the JSON
        console.log(responseAsJson);
        dispatch(fleetOperationActions.getFleetOperationsData(responseAsJson));
      })
      .catch(function(err) {
        console.log('---------------- Error :( ----------------');
      });
    }
  }
}

const OperationsLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationsPage)

export default OperationsLink
