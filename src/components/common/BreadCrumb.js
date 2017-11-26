import React          from 'react';
import { NavLink }    from 'react-router-dom';
import ArrowRight     from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import './BreadCrumb.scss';

const BreadCrumb = ({breadCrumbModal}) =>{
  return (
  <div className="breadcrumb">
    {breadCrumbModal.map((item, index) => (
      <div style={{display: 'flex'}} key={index}>
        {(item.isActive) ? <div className="lbl">{item.lbl}</div> : <div className="lbl"><NavLink exact  activeClassName="active" to="/">{item.lbl}</NavLink></div>}
        {((index+1) < breadCrumbModal.length) ? <ArrowRight  /> : ''}
      </div>
    ))}
  </div>
  );
}

export default BreadCrumb;
