/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import './SearchOption.scss';

class SearchOption extends Component {

  constructor() {
    super();
  }

  render() {
      return (
        <li> {this.props.properties.title} </li>
      );
  }

}

export default SearchOption;
