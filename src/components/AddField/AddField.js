/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
const $ = require('jquery');
import './AddField.scss';

class AddField extends Component {

  constructor() {
    super();
    this.state = { newFields: [] };
    this.addedFields = [];
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = $('[name="new"]').val();
    this.addedFields.push(<input type="text" placeholder={name} name={name}/>);
    this.setState( {newFields: this.addedFields} );
    this.toggleModal(e);
  }

  revealNewField(e) {
    e.preventDefault();
    $('input', '.add-field').show();
  }

  toggleModal(e) {
    e.preventDefault();
    $('.add-field__modal').toggleClass('hidden');
  }

  render() {

      return (
        <section className="add-field">
          { this.state.newFields }
          <button className="add-field__button" onClick={this.toggleModal.bind(this)}> + </button>

          <div className='add-field__modal hidden'>
            <input className="add-field__input" type="text" placeholder="New Field" name="new"/>
            <button className="add-field__button" onClick={this.handleSubmit.bind(this)}> Add Field </button>
          </div>
        </section>
      );
  }

}

export default AddField;
