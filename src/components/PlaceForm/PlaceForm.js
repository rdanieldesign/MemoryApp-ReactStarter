/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import Util from '../../stores/utility';
const util = new Util();
const $ = require('jquery');

class PlaceForm extends Component {

  handleInputChange(e) {
    let input = util.inputFormatter(e);
    this.props.onInputChange(input);
  }

  render() {

    if (this.props.inputsCleared) {

      return (
        <section className="PlaceForm">
          <label>Name</label>
          <input type="text" placeholder="Add Name Here" name="title" value='' onChange={this.handleInputChange.bind(this)}/>
          <label>Coordinates</label>
          <input type="text" placeholder="Add Coordinates Here" name="coordinates" value='' onChange={this.handleInputChange.bind(this)}/>
        </section>
      );

    } else {

      return (
        <section className="PlaceForm">
          <label>Name</label>
          <input type="text" placeholder="Add Name Here" name="title" onChange={this.handleInputChange.bind(this)}/>
          <label>Coordinates</label>
          <input type="text" placeholder="Add Coordinates Here" name="coordinates" onChange={this.handleInputChange.bind(this)}/>
        </section>
      );

    }
  }

}

export default PlaceForm;
