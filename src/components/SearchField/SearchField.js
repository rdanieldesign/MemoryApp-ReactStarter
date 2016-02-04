/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import { getAllByType, getByInput } from '../../stores/SearchType';
const $ = require('jquery');
import './SearchField.scss';

class SearchField extends Component {

  constructor() {
    super();
    this.state = { results: [] };
    this.results = []
  }

  componentDidMount() {
    getAllByType.call(this, this.props.type, this.getResults);
  }

  getResults(results) {
    this.results = results;
  }

  populateResults(results) {
    let formatted = results.map( function(item, index){
      return (<li key={index} properties={item.properties} _id={item._id}> {item.properties.title} </li>);
    })
    this.setState( { results: formatted })
  }

  clearResults(){
    this.setState( { results: [] });
  }

  handleInputChange(e){
    if (e.target.value === '') {
      this.clearResults();
    } else {
      let updatedResults = getByInput(e.target.value, this.results);
      this.populateResults(updatedResults);
    }
  }

  render() {
      return (
        <section className="search-field">
            <input className="search-field__input" type="text" placeholder="Search" data-type={this.props.type} name="search" onChange={this.handleInputChange.bind(this)} />
            <ul>
              { this.state.results }
            </ul>
        </section>
      );
  }

}

export default SearchField;
