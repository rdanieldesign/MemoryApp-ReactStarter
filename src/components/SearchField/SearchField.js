/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import { getAllByType, getByInput } from '../../stores/SearchType';
import SearchOption from '../SearchOption';
import './SearchField.scss';
const $ = require('jquery');

class SearchField extends Component {

  constructor() {
    super();
    this.state = { options: [], locked: false, inputVal: '' };
    this.results = [];
  }

  componentDidMount() {
    getAllByType.call(this, this.props.type, this.getResults);
  }

  getResults(results) {
    this.results = results;
  }

  populateResults(results) {
    let formatted = results.map( (item, index) => {
      return ( <SearchOption key={index} _id={item._id} handleOptionClick={this.handleOptionClick.bind(this)} >{item.title}</SearchOption> );
    })
    this.setState( { options: formatted })
  }

  clearResults(){
    this.setState( { options: [] });
  }

  handleInputChange(e){
    if (!this.state.locked) {
      this.setState({ inputVal: e.target.value });
      if (e.target.value === '') {
        this.clearResults();
      } else {
        let updatedResults = getByInput(e.target.value, this.results);
        this.populateResults(updatedResults);
      }
      this.props.onInputChange(e);
    }
  }

  handleOptionClick(id, title){
    // {fieldName: 'title', fieldValue: 'Taylor', type: 'person', id: '432423423423'}
    let input = {
      fieldName: this.props.name,
      fieldValue: title,
      type: this.props.type,
      id: id
    }
    this.setState({ selectedOption: id, inputVal: title, locked: true });
    this.props.onInputChange(input);
    this.clearResults();
  }

  clearSelectedOption(){
    let input = {
      fieldName: this.props.name,
      fieldValue: '',
      type: this.props.type,
      id: null
    };
    this.props.onInputChange(input);
    this.setState({ selectedOption: null, inputVal: '', locked: false });
  }

  render() {
      return (
        <section className="search-field">
            <input className="search-field__input" type="text" placeholder={this.props.placeholder} data-type={this.props.type} data-id={this.state.selectedOption} name={this.props.name} onChange={this.handleInputChange.bind(this)} value={this.state.inputVal} />
            { this.state.locked ? <button className="search-field__clearBtn" onClick={this.clearSelectedOption.bind(this)}>x</button> : null }
            <ul>
              { this.state.options }
            </ul>
        </section>
      );
  }

}

export default SearchField;
