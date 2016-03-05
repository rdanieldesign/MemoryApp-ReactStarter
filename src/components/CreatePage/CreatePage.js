/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import { addMemory } from '../../stores/MemoryStore';
import TypeSelector from '../TypeSelector';
import PersonForm from '../PersonForm';
import PlaceForm from '../PlaceForm';
import AddField from '../AddField';
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
    this.state = {};
    this.setState({ type: e.target.value, properties: {} });
  }

  handleSubmit(e) {
    e.preventDefault();
    addMemory(this.state);
    this.setState({inputsCleared: true});
  }

  handleAddedInput(e) {
    let input = {
      fieldName: e.target.name,
      fieldValue: e.target.value,
      type: $(e.target).attr('data-type') || null,
      id: $(e.target).attr('data-id') || null
    }
    this.handleInputChange(input);
  }

  handleInputChange(input) {
    // {fieldName: 'title', fieldValue: 'Taylor', type: 'person', id: '432423423423'}
    if (input.fieldValue) {
      let newState = {inputsCleared: false, properties: this.state.properties};
      if (input.fieldName === 'title') {
        newState.title = input.fieldValue;
      } else {
        let prop = {
          type: input.type || null,
          title: input.fieldValue,
          id: input.id || null
        }
        newState.properties[input.fieldName] = prop;
      }
      this.setState(newState);
    }
  }

  render() {
    const title = 'Create Page';
    this.context.onSetTitle(title);

    return (
      <form className="create-page" onSubmit={this.handleSubmit.bind(this)}>
        <TypeSelector onTypeChange={this.handleTypeChange.bind(this)} />
        <label>Title</label>
        <input type="text" placeholder="Add Title Here" name="title" onChange={this.handleAddedInput.bind(this)}/>
        { this.form[this.state.type] }
        <AddField onInputChange={this.handleAddedInput.bind(this)} />
        <button type="submit"> Add New Memory </button>
      </form>
    );
  }
}

export default CreatePage;
