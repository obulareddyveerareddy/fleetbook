import React, { Component } from 'react';
import { render }           from 'react-dom';
import $                    from 'jquery';
import PublicPage           from './components/PublicPage';
import './App.scss';
import { HashRouter , Router }    from 'react-router-dom';
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider';
import {Provider}                 from 'react-redux';
import configureStore             from './AppStore';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
const store = configureStore();

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
      <MuiThemeProvider>
      <HashRouter>
        <PublicPage  />
      </HashRouter>
      </MuiThemeProvider>
      </Provider>
    );
  }
}

render(
  <Main />,
  document.getElementById('app')
);
