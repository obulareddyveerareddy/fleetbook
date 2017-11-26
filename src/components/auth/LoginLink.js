import { connect }      from 'react-redux'
import * as authActions from './Actions'
import LoginPage        from './LoginPage'
import fetch            from 'cross-fetch';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSignInBtnClick: (user) => {
      fetch('/api/user/validate', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
      }).then(function(response) {
        response.json().then(function(data) {
          dispatch(authActions.validateUserLoginDetails(data));
          ownProps.history.push('/fleetbook/dashboard');
        });
      }).catch(function(err) {
        console.log('---------------- Error :( ----------------');
      });
    }
  }
}

const LoginLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginLink
