import React      from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LeftNav          from './../common/LeftNav';

import DashboardLink    from './dashboard/DashboardLink';
import WorkordersPage   from './workorders/WorkordersPage';

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
      <div className="container--fluid">
        <div className="container--flex">
          <LeftNav />
          <div className="contentspace">
          <Switch>
            <Route path="/fleetbook/dashboard"   component={DashboardLink}/>
            <Route path="/fleetbook/workorders"  component={WorkordersPage}/>
          </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default FleetBookPage;
