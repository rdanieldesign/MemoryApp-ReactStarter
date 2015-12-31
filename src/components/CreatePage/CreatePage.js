/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './CreatePage.css';
import withStyles from '../../decorators/withStyles';
import Memories, { addMemory } from '../../stores/MemoryStore';
import TypeSelector from '../TypeSelector';
import PersonForm from '../PersonForm';

@withStyles(styles)
class CreatePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {type: 'person'};
  }

  handleTypeChange(e) {
    this.state = {};
    this.setState({ type: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    addMemory(this.state);
    this.setState({inputsCleared: true});
  }

  handleInputChange(e) {
    let newState = {inputsCleared: false};
    newState[e.target.name] = e.target.value
    this.setState(newState);
  }

  render() {
    const title = 'Create Page';
    this.context.onSetTitle(title);

    if (this.state.type == 'person') {
      return (
        <div className="CreatePage">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TypeSelector onTypeChange={this.handleTypeChange.bind(this)} />
            <PersonForm inputsCleared={this.state.inputsCleared} onInputChange={this.handleInputChange.bind(this)} />
            <input type="submit" value="Add New Memory" />
          </form>
        </div>
      );

    } else {

      return (
        <div className="CreatePage">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TypeSelector onTypeChange={this.handleTypeChange.bind(this)} />
            <div> Hello </div>
            <input type="submit" value="Add New Memory" />
          </form>
        </div>
      );
    }
  }
}

export default CreatePage;
