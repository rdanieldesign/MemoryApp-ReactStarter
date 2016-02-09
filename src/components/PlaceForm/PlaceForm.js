/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
const $ = require('jquery');

class PlaceForm extends Component {

  handleInputChange(e) {
    // {fieldName: 'title', fieldValue: 'Taylor', type: 'person', id: '432423423423'}
    let input;
    if (e.target) {
      input = {
        fieldName: e.target.name,
        fieldValue: e.target.value,
        type: $(e.target).attr('data-type') || null,
        id: $(e.target).attr('data-id') || null
      }
    } else {
      input = {
        fieldName: e.fieldName,
        fieldValue: e.fieldValue,
        type: e.type || null,
        id: e.id || null
      }
    }
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
