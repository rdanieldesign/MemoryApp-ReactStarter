/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './TypeSelector.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class TypeSelector extends Component {

  handleSelectChange(e) {
    this.props.onTypeChange(e);
  }

  render() {
    return (
      <select className="typeSelector" onChange={this.handleSelectChange.bind(this)}>
        <option value="person"> Person </option>
        <option value="date"> Date </option>
        <option value="place"> Place </option>
        <option value="info"> Information </option>
      </select>
    );
  }

}

export default TypeSelector;
