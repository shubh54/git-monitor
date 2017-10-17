import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="/login" name="login" component={Login}></Route>
      <Route path="/home" name="home" component={Home}></Route>
    </Route>
  </Router>,
app);
