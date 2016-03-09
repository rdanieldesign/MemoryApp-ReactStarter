/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import { getAllCategories } from '../../stores/CategoryStore';
const $ = require('jquery');

class TypeSelector extends Component {

  loadOptions() {
    if (this.props.categories) {
      let catOptions = [];
      this.props.categories.forEach( (cat, index) => {
        catOptions.push(<option value={cat.type} key={index}> {cat.type} </option>);
      });
      return catOptions;
    } else {
      return [];
    }
  }

  handleSelectChange(e) {
    $('[name="typeInput"]').val('');
    this.props.onTypeChange(e.target.value);
  }

  handleInputChange(e) {
    $('[name="typeSelector"]').val('none');
    this.props.onTypeChange(e.target.value);
  }

  render() {
    return (
      <section>
        <select className="typeSelector" name="typeSelector" onChange={this.handleSelectChange.bind(this)}>
          <option value="none"> None </option>
          { this.loadOptions() }
        </select>
        <p>or enter a new category:</p>
        <input type="text" name="typeInput" placeholder="Enter new category" onChange={this.handleInputChange.bind(this)}/>
      </section>
    );
  }

}

export default TypeSelector;
