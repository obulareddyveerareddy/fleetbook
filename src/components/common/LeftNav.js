import React    from 'react';
import ReactDOM from 'react-dom';
import { NavLink }    from 'react-router-dom';
import $        from 'jquery';
import './LeftNav.scss';
import NavigationClose from 'material-ui/svg-icons/action/view-headline';

class LeftNav extends React.Component{

    constructor(props, context){
      super(props);
      this.hideSideMenu = this.hideSideMenu.bind(this);
    }

    hideSideMenu(event){
      event.preventDefault();
      $(this.refs.sideMenu).toggle();
    }

    render(){
      return(
          <div id="leftNav" className="sidemenu sidemenu-show">
            <div style={{display:'flex', minWidth:'100%', height:'100%'}}>
              <div className="menuButton">
                <div style={{margin:'0.6rem', position:'fixed'}}>
                  <a href="#"  onClick={this.hideSideMenu}>
                  <NavigationClose style={{color:'#ccc'}} />
                  </a>
                </div>
              </div>
              <div className="menu sidemenu-show" ref="sideMenu">
                <ul>
                  <li><NavLink exact activeClassName="active" to="/fleetbook/dashboard">Dashbaord</NavLink></li>
                  <li><NavLink exact to="/fleetbook/workorders">Work Orders</NavLink></li>
                  <li><NavLink exact to="/aboutus">Inspections</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
      );
    }
};

export default LeftNav;
