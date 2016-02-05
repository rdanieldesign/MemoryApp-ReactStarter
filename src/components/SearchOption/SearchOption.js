/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import './SearchOption.scss';

class SearchOption extends Component {

  constructor() {
    super();
  }

  optionClick(){
    this.props.handleOptionClick(this.props._id, this.props.children);
  }

  render() {
      return (
        <li onClick={this.optionClick.bind(this)} > {this.props.children} </li>
      );
  }

}

export default SearchOption;
