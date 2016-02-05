/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import { addMemory } from '../../stores/MemoryStore';
import TypeSelector from '../TypeSelector';
import PersonForm from '../PersonForm';
import PlaceForm from '../PlaceForm';
import './CreatePage.scss';
const $ = require('jquery');

class CreatePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = { type: 'person', properties: {}};
    this.form = {
      person: <PersonForm className="create-page__input" inputsCleared={this.state.inputsCleared} onInputChange={this.handleInputChange.bind(this)} />,
      place: <PlaceForm className="create-page__input" inputsCleared={this.state.inputsCleared} onInputChange={this.handleInputChange.bind(this)} />
    }
  }

  handleTypeChange(e) {
    console.log(e.target.value);
    this.state = {};
    this.setState({ type: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    addMemory(this.state);
    this.setState({inputsCleared: true});
  }

  handleInputChange(e) {
    let type = $(e.target).attr('data-type');
    let id = $(e.target).attr('data-id');
    console.log(type);
    console.log(id);
    let newState = {inputsCleared: false, properties: this.state.properties};
    if (e.target.name.toString() === 'title') {
      newState.title = e.target.value;
    } else {
      let prop = {
        type: type || null,
        title: e.target.value,
        id: id || null
      }
      newState.properties[e.target.name.toString()] = prop;
    }
    this.setState(newState);
  }

  render() {
    const title = 'Create Page';
    this.context.onSetTitle(title);

    return (
      <form className="create-page" onSubmit={this.handleSubmit.bind(this)}>
        <TypeSelector onTypeChange={this.handleTypeChange.bind(this)} />
        { this.form[this.state.type] }
        <button type="submit"> Add New Memory </button>
      </form>
    );
  }
}

export default CreatePage;
