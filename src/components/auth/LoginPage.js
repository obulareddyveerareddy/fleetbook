import React          from 'react';
import PropTypes      from 'prop-types'
import './LoginPage.scss';

const LoginPage = ({user, onSignInBtnClick}) => {
  let onValueChange = function(event){
    user[event.target.name] = event.target.value;
  }
  return(
    <div className="container">
      <div className="row mt-5">
        <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="userName">Email address</label>
                  <input type="email"
                        className="form-control"
                        id="userName" name="userName"
                        placeholder="email@example.com"
                        value={user.userName}
                        onChange={(event) => onValueChange(event)} />
                </div>
                <div className="form-group">
                  <label htmlFor="userPassword">Password</label>
                  <input type="password"
                        className="form-control"
                        id="userPassword" name="userPassword"
                        placeholder="Password"
                        value={user.userPassword}
                        onChange={(event) => onValueChange(event)} />
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="item--group">
                    <div style={{display: 'flex'}}>
                    <a className="dropdown-item" href="#">New around here? Sign up</a>
                    <a className="dropdown-item" href="#">Forgot password?</a>
                    </div>
                    <div>
                    <a href="#" className="btn btn-primary" onClick={(event) => onSignInBtnClick(user)}>Sign in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
