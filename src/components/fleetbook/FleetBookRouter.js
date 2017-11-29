import React      from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LeftNav          from './../common/LeftNav';

import DashboardLink    from './dashboard/DashboardLink';
import OperationsLink   from './operations/OperationsLink';
import WorkordersPage   from './workorders/WorkordersPage';
import './FleetBookRouter.scss';

class FleetBookPage extends React.Component{
  constructor(props){
    super(props);
    console.log(sessionStorage.getItem('jwtToken'));
    if(!sessionStorage.getItem('jwtToken')){
      this.props.history.push("/");
    }
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="container--flex">
          <LeftNav />
          <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <Switch>
            <Route path="/fleetbook/dashboard"   component={DashboardLink}/>
            <Route path="/fleetbook/operations"  component={OperationsLink}/>
            <Route path="/fleetbook/workorders"  component={WorkordersPage}/>
          </Switch>
          </main>
        </div>
      </div>
    );
  }

}

export default FleetBookPage;
