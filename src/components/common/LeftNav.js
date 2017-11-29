import React    from 'react';
import ReactDOM from 'react-dom';
import { NavLink }    from 'react-router-dom';

const LeftNav = () => {
  return(
      <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink className="nav-link" exact activeClassName="active" to="/fleetbook/dashboard">Dashbaord</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/fleetbook/operations">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/fleetbook/workorders">Work Orders</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/aboutus">Inspections</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Export</a>
            </li>
          </ul>
      </nav>
  );
}
export default LeftNav;
