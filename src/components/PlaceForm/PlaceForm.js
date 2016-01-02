/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './PlaceForm.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class PlaceForm extends Component {

  handleInputChange(e) {
    this.props.onInputChange(e);
  }

  render() {

    if (this.props.inputsCleared) {

      return (
        <section className="PlaceForm">
          <label>Name</label>
          <input type="text" placeholder="Add Name Here" name="name" value='' onChange={this.handleInputChange.bind(this)}/>
          <label>Coordinates</label>
          <input type="text" placeholder="Add Coordinates Here" name="coordinates" value='' onChange={this.handleInputChange.bind(this)}/>
        </section>
      );

    } else {

      return (
        <section className="PlaceForm">
          <label>Name</label>
          <input type="text" placeholder="Add Name Here" name="name" onChange={this.handleInputChange.bind(this)}/>
          <label>Coordinates</label>
          <input type="text" placeholder="Add Coordinates Here" name="coordinates" onChange={this.handleInputChange.bind(this)}/>
        </section>
      );

    }
  }

}

export default PlaceForm;
