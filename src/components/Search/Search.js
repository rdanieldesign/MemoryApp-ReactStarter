/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import SearchField from '../SearchField';
import './Search.scss';
const $ = require('jquery');

class Search extends Component {

  constructor() {
    super();
    this.state = { searchType: 'person'};
    this.searchTypes = {
      person: {
        type: 'person',
        placeholder: 'Search for the name of a person',
        name: 'personSearch'
      },
      place: {
        type: 'place',
        placeholder: 'Search for a place',
        name: 'placeSearch'
      }
    };
    this.options = [];
    this.loadOptions();
  }

  componentDidMount() {
  }

  loadOptions() {
    for(var i in this.searchTypes){
      this.options.push(
        <option key={i} value={i}>{this.searchTypes[i].type}</option>
      )
    }
  }

  handleTypeChange(e) {
    this.setState({ searchType: e.target.value});
  }

  handleSearchChange(e) {
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
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
      return (
        <form className="search" onSubmit={this.handleSubmit.bind(this)}>
          <SearchField
            type={this.searchTypes[this.state.searchType].type}
            placeholder={this.searchTypes[this.state.searchType].placeholder}
            name={this.searchTypes[this.state.searchType].name}
            onInputChange={this.handleSearchChange.bind(this)} />
          <select onChange={this.handleTypeChange.bind(this)}>
            { this.options }
          </select>
          <button type="submit">Submit</button>
      </form>
      );
  }

}

export default Search;
