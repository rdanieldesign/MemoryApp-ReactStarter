/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import Link from '../Link';
import Navigation from '../Navigation';
// require('./Header.scss');

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/home" onClick={Link.handleClick}>Home</a>
          <Navigation className="Header-nav" />
        </div>
      </div>
    );
  }

}

export default Header;
