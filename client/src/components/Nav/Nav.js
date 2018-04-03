import React, { Component } from 'react';
import Auth from '../../utils/Auth';

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Bet Social!</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {this.state.authenticated ? (
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
              return(
  <nav className="navbar navbar-inverse navbar-top">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a href="/" className="navbar-brand">
                      Bet Social!
        </a>
                    <a href="/login" className="navbar-brand">
                      Login
        </a>
                    <a href="/register" className="navbar-brand">
                      Register
        </a>
                    <a href="/logout" className="navbar-brand dropdown-menu-right">
                      Logout
        </a>
                  </div>
                </div>
              </nav>
        </ul>
      </div>
      ) : (
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <span>
          <a className="nav-link" href="/login">Login</a>
        </span>
        <span>
          <a className="nav-link" href="/signup">Sign up</a>
        </span>
      </div>
      )}
    </nav>
    );
  }
}

export default Nav;
