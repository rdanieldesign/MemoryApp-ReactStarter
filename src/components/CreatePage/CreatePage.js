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
    this.state = { type: '', title: '', copy: ''};
  }

  componentWillUnmount() {}

  handleTypeChange(e) {
    this.setState({ type: e.target.value });
    console.log(e, 'type changed');
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title.trim();
    let copy = this.state.copy.trim();
    console.log(title, copy);
    addMemory({title: title, copy: copy, _id: Memories.length + 1});
    this.setState({title: '', copy: ''});
  }

  handleInputChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value
    this.setState(newState);
    console.log(this.state);
  }

  render() {
    const title = 'Create Page';
    this.context.onSetTitle(title);

    if (this.state.type == 'person') {
      return (
        <div className="CreatePage">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TypeSelector onTypeChange={this.handleTypeChange.bind(this)} />
            <PersonForm onInputChange={this.handleInputChange.bind(this)} />
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
