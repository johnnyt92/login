import React, { Component } from 'react';
import Auth from '../../utils/Auth';
import "./Nav.css";

class Nav extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }
  render() {

    return (
      <nav className="navbar navbar-inverse navbar-top ">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">
              Bet Social!
        </a>
            <a href="/login" className="navbar-brand">
              Login
        </a>
            <a href="/SignUp" className="navbar-brand">
              Register
        </a>
            <a href="/logout" className="navbar-brand dropdown-menu-right">
              Logout
        </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
