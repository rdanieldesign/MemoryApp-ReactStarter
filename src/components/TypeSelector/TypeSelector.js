/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import { getAllCategories } from '../../stores/CategoryStore';

class TypeSelector extends Component {

  constructor() {
    super();
    this.state = { categories: [] };
  }

  componentDidMount() {
    getAllCategories.call(this, this.loadOptions);
  }

  loadOptions(categories) {
    let catOptions = [];
    categories.forEach( (cat, index) => {
      catOptions.push(<option value={cat.type} key={index}> {cat.type} </option>);
    });
    this.setState({ categories: catOptions });
  }

  handleSelectChange(e) {
    this.props.onTypeChange(e);
  }

  render() {
    return (
      <select className="typeSelector" onChange={this.handleSelectChange.bind(this)}>
        <option value="person"> Person </option>
        <option value="date"> Date </option>
        <option value="place"> Place </option>
        <option value="info"> Information </option>
        { this.state.categories }
      </select>
    );
  }

}

export default TypeSelector;
