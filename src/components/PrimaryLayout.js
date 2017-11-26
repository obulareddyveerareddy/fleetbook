import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import PublicPage     from './public/PublicPage';
import FleetBookPage  from './fleetbook/FleetBookPage';
class PrimaryLayout extends React.Component{
  constructor(props, context){
    super(props);
    this.state={
      loggedIn:false
    }
  }
  render(){
    return(
      <div className="fullwidthheight">
        <Switch>
          <Route path="/" render={() => (
                                  this.state.loggedIn ? (
                                    <FleetBookPage />
                                  ) : (
                                    <PublicPage />
                                  )
                                )} />
        </Switch>
      </div>
    )
  }
}

export default PrimaryLayout;
