import React      from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LeftNav    from './../../common/LeftNav';
import BreadCrumb from './../../common/BreadCrumb';
import WorkordersPage   from './../workorders/WorkordersPage';

class DashboardPage extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log('------------------- >>> DashboardPage <<< -------------------');
    let {user, dashboard, breadCrumbModal} = this.props;
    console.log(user);
    console.log(dashboard);
    console.log(breadCrumbModal);
    return(
      <div>
        <BreadCrumb breadCrumbModal={breadCrumbModal} />
      </div>
    );
  }
}

export default DashboardPage;
