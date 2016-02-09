/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import AddField from '../AddField';
import SearchField from '../SearchField';
import { updateMemory } from '../../stores/MemoryStore';
const $ = require('jquery');

class EditForm extends Component {

  constructor(){
    super();

    this.state = {
      updatedProps: {
        title: '',
        _id: '',
        type: '',
        properties: {}
      }
    }
  };

  componentDidMount(){
    this.setState({
      updatedProps: {
        title: this.props.title,
        _id: this.props._id,
        type: this.props.type,
        properties: {}
      }
    });

    for(var i in this.props.properties){
      this.state.updatedProps[i] = this.props.properties[i];
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    updateMemory(this.state.updatedProps);
    // {fieldName: 'title', fieldValue: 'Taylor', type: 'person', id: '432423423423'}
  };

  handleInputChange(e) {
    let newProps = this.state.updatedProps;
    newProps[e.target.name] = e.target.value;
    this.setState({ updatedProps: newProps });
  }

  render() {
    return (
      <form className="editForm" onSubmit={this.handleSubmit.bind(this)}>
        <label>Name</label>
        <input type="text" placeholder="Add Title Here" name="title" value={this.state.updatedProps.title} onChange={this.handleInputChange.bind(this)}/>
        <button type='submit'>Submit Changes</button>
      </form>
    );
  }

}

export default EditForm;
