/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core components
import Admin from 'layouts/Admin.js';
import Login from 'layouts/Login';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import 'assets/css/material-dashboard-react.css?v=1.9.0';

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path="/create" component={CreateForm} />
      <Route path="/edit/:id" component={EditForm} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
