import { connect }      from 'react-redux'
import Header           from './Header'

const mapStateToProps = (state, ownProps) => {
  return {
    user: sessionStorage.getItem('jwtToken')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('--------------->>> HeaderLink mapDispatchToProps <<<---------------');
  console.log(ownProps);
  return {
    onSignOutClick: () => {
      console.log('--------------->>> HeaderLink onSignOutClick() <<<---------------');
      console.log(ownProps);
      sessionStorage.removeItem('jwtToken');
      console.log(window.location.href);
      let baseLocation = window.location.href;
      console.log(window.location.href.substr(0, baseLocation.indexOf('#/')));
      window.location.href = window.location.href.substr(0, baseLocation.indexOf('#/'));
    }
  }
}

const HeaderLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderLink
