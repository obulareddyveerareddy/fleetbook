import React          from 'react';
import { NavLink }    from 'react-router-dom';
import  AppBar        from 'material-ui/AppBar';
import FleetBookLogo  from 'material-ui/svg-icons/maps/directions-bus';
import MoreVertIcon   from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/navigation/more-vert';
import './Header.scss';

const BeforeLogged = (props) => (
  <div id="navbar">
  <ul>
  <li><NavLink exact  activeClassName="active" to="/">Home</NavLink></li>
  <li><NavLink exact activeClassName="active" to="/aboutus">About Us</NavLink></li>
  <li><NavLink exact activeClassName="active" to="/login">Login</NavLink></li>
  </ul>
  </div>
);

const AfterLogged = ({onSignOutClick}) => {
  return(
    <IconMenu
    iconButtonElement={
      <FloatingActionButton mini={true} style={{marginTop: 10}}>
        <ContentAdd />
      </FloatingActionButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top', color:'#ccc !important'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top', color:'#ccc !important'}} >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" onClick={(event)=> onSignOutClick()} />
    </IconMenu>
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
        <AppBar
          title="FleetBook"
          iconElementLeft = {<FleetBookLogo style={{color:'#ccc', fontSize:'38px'}} />}
          style={{backgroundColor:'#2b2b2b', position:'fixed', left:0, top:0}}
          iconElementRight={(user) ? <AfterLogged onSignOutClick={this.props.onSignOutClick} /> : <BeforeLogged />}
          iconStyleRight={{margin:'0px'}}
        />
      </header>
    );
  }

}

export default Header;
