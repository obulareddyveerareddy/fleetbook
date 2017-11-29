import React          from 'react';
import { NavLink }    from 'react-router-dom';
import $              from 'jquery';

class BreadCrumb extends React.Component{

  constructor(props, context){
    super(props);
    this.hideSideMenu = this.hideSideMenu.bind(this);
    this.getBreadCrumbLink = this.getBreadCrumbLink.bind(this);
  }

  hideSideMenu(event){
    event.preventDefault();
    $('.sidemenu').toggle();
  }

  getBreadCrumbLink(item, index){
    if(item.isActive){
      return <li className="breadcrumb-item active" aria-current="page" key={index}>{item.lbl}</li>;
    }else{
      return <li className="breadcrumb-item" key={index}><a href={'#'+item.path}>{item.lbl}</a></li>;
    }
  }

  render(){
    let {breadCrumbModal} = this.props;
    return (
    <nav aria-label="breadcrumb" role="navigation">
      <ol className="breadcrumb">
        {breadCrumbModal.map((item, index) => (
          this.getBreadCrumbLink(item, index)
        ))}
      </ol>
    </nav>
    );
  }
}

export default BreadCrumb;
