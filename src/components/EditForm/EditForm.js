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
      updatedProps: {}
    }
  };

  componentDidMount(){
    this.setState(function(previousState, currentProps){
      return { updatedProps: currentProps.properties }
    });
  };

  createInputs(){
    this.inputList = [];

    for(var i in this.state.updatedProps){
      let prop = this.state.updatedProps[i];
      if (prop.type) {
        let preselected = { title: prop.title, id: prop.id };
        this.inputList.push(<SearchField key={i} type={prop.type} placeholder={i} name={i} preselect={preselected} onInputChange={this.handleInputChange.bind(this)} />)
      } else {
        this.inputList.push(<input key={i} type="text" placeholder={i} name={i} value={prop.title} onChange={this.handleInputChange.bind(this)}/>)
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    updateMemory({
      title: this.props.title,
      type: this.props.type,
      _id: this.props._id,
      properties: this.state.updatedProps
    });
  };

  handleInputChange(e) {
    let input;
    if (e.target) {
      input = {
        fieldName: e.target.name,
        fieldValue: e.target.value,
        type: $(e.target).attr('data-type') || null,
        id: $(e.target).attr('data-id') || null
      }
    } else {
      input = {
        fieldName: e.fieldName,
        fieldValue: e.fieldValue,
        type: e.type || null,
        id: e.id || null
      }
    }

    let newProps = this.state.updatedProps;
    let prop = {
      type: input.type || null,
      title: input.fieldValue,
      id: input.id || null
    }
    newProps[input.fieldName] = prop;

    this.setState({ updatedProps: newProps });
  }

  render() {
    this.createInputs();
    return (
      <form className="editForm" onSubmit={this.handleSubmit.bind(this)}>
        <h1>{this.props.title}</h1>
        { this.inputList }
        <button type='submit'>Submit Changes</button>
      </form>
    );
  }

}

export default EditForm;
