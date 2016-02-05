/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import { getAllByType, getByInput } from '../../stores/SearchType';
import SearchOption from '../SearchOption';
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
      return ( <SearchOption key={index} properties={item.properties} _id={item._id} /> );
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
    this.props.onInputChange(e);
  }

  render() {
      return (
        <section className="search-field">
            <input className="search-field__input" type="text" placeholder={this.props.placeholder} data-type={this.props.type} data-id='2' name={this.props.name} onChange={this.handleInputChange.bind(this)} />
            <ul>
              { this.state.results }
            </ul>
        </section>
      );
  }

}

export default SearchField;
