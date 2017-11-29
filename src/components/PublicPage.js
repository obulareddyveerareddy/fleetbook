import React      from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import HeaderLink           from './common/HeaderLink'

import HomePage   from './public/home/HomePage';
import AboutPage  from './public/about/AboutPage';
import LoginLink  from './auth/LoginLink';
import FleetBookRouter from './fleetbook/FleetBookRouter';

class PublicPage extends React.Component{

  constructor(props, context){
    super(props);
  }

  render(){
    return(
      <div className="fullwidthheight">
      <HeaderLink />
      <main style={{position: 'relative', top:'3.8rem'}}>
        <Switch>
          <Route path="/"       exact  component={HomePage} />
          <Route path="/about"    component={AboutPage} />
          <Route path="/login"    component={LoginLink} />
          <Route path="/fleetbook/**"   component={FleetBookRouter}/>
        </Switch>
      </main>
      </div>
    );
  }
}

export default PublicPage;
