/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './PersonForm.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class PersonForm extends Component {

  handleInputChange(e) {
    this.props.onInputChange(e);
  }

  render() {
    return (
      <section className="personForm">
        <label>Name</label>
        <input type="text" placeholder="Add Title Here" name="name" onChange={this.handleInputChange.bind(this)}/>
        <label>Age</label>
        <input type="text" placeholder="Add Copy Here" name="age" onChange={this.handleInputChange.bind(this)}/>
      </section>
    );
  }

}

export default PersonForm;
