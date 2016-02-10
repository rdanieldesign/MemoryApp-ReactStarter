/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import SearchField from '../SearchField';
const $ = require('jquery');
import './AddField.scss';

class AddField extends Component {

  constructor() {
    super();
    this.state = { newFields: [], currentType: 'none' };
    this.addedFields = [];
    this.categoryOptions = ['person', 'place', 'none'];

    this.loadOptions();
  }

  loadOptions() {
    this.categoryOptions = this.categoryOptions.map( function(category){
      return (<option key={category} value={category}>{category}</option>);
    });
  }

  handleCategoryChange(e) {
    this.setState({ currentType: e.target.value });
  }

  handleInputChange(e){
    this.props.onInputChange(e)
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = $('[name="newTitle"]').val();
    if (this.state.currentType !== 'none') {
      this.addedFields.push(<SearchField key={name} type={this.state.currentType} placeholder={name} name={name} onInputChange={this.handleInputChange.bind(this)} />)
    } else {
      this.addedFields.push(<input type="text" placeholder={name} name={name} onChange={this.handleInputChange.bind(this)} />);
    }
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
            <label>Enter the property title</label>
            <input className="add-field__input" type="text" placeholder="New Property Title" name="newTitle"/>
            <label>Select a category</label>
            <select defaultValue='none' onChange={this.handleCategoryChange.bind(this)}>
              { this.categoryOptions }
            </select>
            <button className="add-field__button" onClick={this.handleSubmit.bind(this)}> Add Field </button>
          </div>
        </section>
      );
  }

}

export default AddField;
