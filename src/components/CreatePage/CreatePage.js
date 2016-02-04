/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import { addMemory } from '../../stores/MemoryStore';
import TypeSelector from '../TypeSelector';
import PersonForm from '../PersonForm';
import PlaceForm from '../PlaceForm';
import './CreatePage.scss';

class CreatePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = { memory: { type: 'person' } };
    this.form = {
      person: <PersonForm className="create-page__input" inputsCleared={this.state.inputsCleared} onInputChange={this.handleInputChange.bind(this)} />,
      place: <PlaceForm className="create-page__input" inputsCleared={this.state.inputsCleared} onInputChange={this.handleInputChange.bind(this)} />
    }
  }

  handleTypeChange(e) {
    this.state = {};
    this.setState({ memory: { type: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    addMemory(this.state.memory);
    this.setState({inputsCleared: true});
  }

  handleInputChange(e) {
    let newState = {inputsCleared: false, memory: this.state.memory};
    newState.memory[e.target.name.toString()] = e.target.value;
    this.setState(newState);
  }

  render() {
    const title = 'Create Page';
    this.context.onSetTitle(title);

    return (
      <form className="create-page" onSubmit={this.handleSubmit.bind(this)}>
        <TypeSelector onTypeChange={this.handleTypeChange.bind(this)} />
        { this.form[this.state.memory.type] }
        <button type="submit"> Add New Memory </button>
      </form>
    );
  }
}

export default CreatePage;
