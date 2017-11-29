import React          from 'react';
import { NavLink }    from 'react-router-dom';
import  AppBar        from 'material-ui/AppBar';

import MoreVertIcon   from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import * as bootstrap from 'bootstrap';
import './Header.scss';

const Publicview = () => (
  <div>
  <a href="#/login" className="btn btn-primary navbar-btn">Sign in</a>
  </div>
);

const Privateview = ({onSignOutClick}) =>{
  return(
    <div className="icon--group">
      <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onClick={(event)=> onSignOutClick()} />
      </IconMenu>
    </div>
  );
}

class Header extends React.Component{

  constructor(props, context){
    super(props);
  }

  render(){
    let {user} = this.props;
    console.log('------------------ >>> Header <<< ------------------');
    console.log(user);
    return(
      <header>
        <nav className="navbar navbar-light bg-light fixed-top  justify-content-between">
        <a href="#/" className="navbar-brand icon--group">
          <div><i className="fa fa-bus fa-2x" /></div>
          <div>FleetBook</div>
        </a>
        <div className="nav navbar-nav navbar-right">
          {(user) ? <Privateview onSignOutClick={this.props.onSignOutClick} /> : <Publicview/>}
        </div>
        </nav>
      </header>
    );
  }
}

export default Header;
