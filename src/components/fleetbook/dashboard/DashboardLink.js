import { connect }      from 'react-redux'
import * as authActions from './Actions'
import DashboardPage    from './DashboardPage'
import fetch            from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  let setBreadCrumbModal = function(){
    return [
      {lbl:'Dashboard', path:'/fleetbook/dashboard', isActive:true}
    ]
  }
  return {
    user: state.user,
    dashboard:state.dashboard,
    breadCrumbModal: setBreadCrumbModal()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSignInBtnClick: (user) => {

    }
  }
}

const DashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)

export default DashboardLink
