/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import SearchField from '../SearchField';
import { addCategory, getAllCategories, checkForExistingCategory } from '../../stores/CategoryStore';
const $ = require('jquery');
import './AddField.scss';

class AddField extends Component {

  constructor() {
    super();
    this.state = { newFields: [], currentType: 'none', newCategory: false, categoryOptions: [] };
    this.addedFields = [];
    this.categories = [];
  }

  componentDidMount() {
    getAllCategories.call(this, this.loadOptions);
  }

  loadOptions(categories) {
    categories.forEach( (cat) => {
      this.categories.push(cat.type);
    });
    let options = this.categories.map( function(category){
      return (<option key={category} value={category}>{category}</option>);
    });
    this.setState({ categoryOptions: options });
  }

  handleCategorySelectChange(e) {
    this.setState({ currentType: e.target.value, newCategory: false });
    $('[name="newCategory"]').val('');
  }

  handleCategoryInputChange(e) {
    this.setState({ currentType: e.target.value, newCategory: true });
    $('[name="selectCategory"]').val('none');
  }

  handleInputChange(e){
    this.props.onInputChange(e)
  }

  addField(){
    let name = $('[name="newTitle"]').val();
    if (this.state.currentType !== 'none') {
      this.addedFields.push(<SearchField key={name} type={this.state.currentType} placeholder={name} name={name} onInputChange={this.handleInputChange.bind(this)} />)
    } else {
      this.addedFields.push(<input type="text" placeholder={name} name={name} onChange={this.handleInputChange.bind(this)} />);
    }
    this.setState( {newFields: this.addedFields} );
    this.toggleModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newCategory) {
      if (!checkForExistingCategory(this.state.currentType, this.categories)) {
        addCategory.call(this, { type: this.state.currentType }, this.addField);
      } else {
        console.log('category already exists');
      }
    } else {
      this.addField(e);
    }
  }

  revealNewField(e) {
    e.preventDefault();
    $('input', '.add-field').show();
  }

  toggleModal(e) {
    if (e) { e.preventDefault(); }
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
            <select defaultValue='none' name='selectCategory' onChange={this.handleCategorySelectChange.bind(this)}>
              <option key='none' value='none'>None</option>
              { this.state.categoryOptions }
            </select>
            <label>or Create a new category</label>
            <input className="add-category__input" type="text" placeholder="New Category" name="newCategory" onChange={this.handleCategoryInputChange.bind(this)} />
            <button className="add-field__button" onClick={this.handleSubmit.bind(this)}> Add Field </button>
          </div>
        </section>
      );
  }

}

export default AddField;
