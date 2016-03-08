/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import SearchField from '../SearchField';
import { getAllCategories } from '../../stores/CategoryStore';
import Util from '../../stores/utility';
const util = new Util();
import './Search.scss';
const $ = require('jquery');

class Search extends Component {

  constructor() {
    super();
    this.state = { searchType: 'person', categories: []};
    // this.searchTypes = {
    //   person: {
    //     type: 'person',
    //     placeholder: 'Search for the name of a person',
    //     name: 'personSearch'
    //   },
    //   place: {
    //     type: 'place',
    //     placeholder: 'Search for a place',
    //     name: 'placeSearch'
    //   }
    // };
    this.options = [];
  }

  componentDidMount() {
    getAllCategories.call(this, this.loadOptions);
  }

  loadOptions(categories) {
    for(var i in categories){
      this.options.push(
        <option key={i} value={i}>{categories[i].type}</option>
      )
    }
    this.setState( { categories: this.options } );
  }

  handleTypeChange(e) {
    this.setState({ searchType: e.target.value});
  }

  handleSearchChange(e) {
    let input = util.inputFormatter(e);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
      return (
        <form className="search" onSubmit={this.handleSubmit.bind(this)}>
          <SearchField
            type={this.state.searchType}
            placeholder='placeholder'
            name={this.state.searchType}
            onInputChange={this.handleSearchChange.bind(this)} />
          <select onChange={this.handleTypeChange.bind(this)}>
            { this.state.categories }
          </select>
          <button type="submit">Submit</button>
      </form>
      );
  }

}

export default Search;
