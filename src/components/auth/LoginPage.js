import React          from 'react';
import PropTypes      from 'prop-types'
import TextField      from 'material-ui/TextField';
import RaisedButton   from 'material-ui/RaisedButton';
import './LoginPage.scss';

const LoginPage = ({user, onSignInBtnClick}) => {
  let onValueChange = function(event){
    user[event.target.name] = event.target.value;
  }
  return(
    <div className="container--fluid">
      <div className="container--card">
      <form className="container--row">
        <div className="input--field">
          <TextField id="text-field-default"
            name="userName"
            floatingLabelText="Email"
            hintText="Enter Username or Email"
            defaultValue={user.userName}
            fullWidth={true}
            onChange={(event) => onValueChange(event)} />
        </div>
        <div className="input--field">
        <TextField id="text-field-default"
          name="userPassword"
          type="password"
          floatingLabelText="Password"
          hintText="Enter Password"
          defaultValue={user.userPassword}
          fullWidth={true}
          onChange={(event) => onValueChange(event)}  />
        </div>
        <div className="btn--group">
          <RaisedButton label="Submit" primary={true} onClick={(event) => onSignInBtnClick(user)} />
        </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
