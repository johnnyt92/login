import PrivateRoute from "./components/PrivateRoute";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bets from "./pages/Bets";
import Detail from "./pages/Detail";
import SignUp from "./pages/SignUp";
import Friends from "./pages/Friends"
import Users from "./pages/Users";
const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Bets} />
        <Route exact path="/bets/:id" component={Detail} />
        <Route exact path="/Friends" component={Friends} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Users} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
);


export default App;
