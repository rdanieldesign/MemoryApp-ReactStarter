/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import MemoryList from '../MemoryList';
import Search from '../Search';
import './HomePage.scss';
const $ = require('jquery');

class HomePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Home Page';
    this.context.onSetTitle(title);
    return (
      <div className="HomePage">
        <div className="HomePage-container">
          <Search />
          <MemoryList />
        </div>
      </div>
    );
  }

}

export default HomePage;
