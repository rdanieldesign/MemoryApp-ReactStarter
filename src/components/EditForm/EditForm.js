/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import AddField from '../AddField';
import SearchField from '../SearchField';
import { updateMemory } from '../../stores/MemoryStore';
import Util from '../../stores/utility';
const util = new Util();
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
        this.inputList.push(<div key={i}>
            <SearchField type={prop.type} placeholder={i} name={i} preselect={preselected} onInputChange={this.handleInputChange.bind(this)} />
            <button name={i} onClick={this.deleteProperty.bind(this)}>X</button>
          </div>)
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
    let input = util.inputFormatter(e);
    let newProps = this.state.updatedProps;
    let prop = {
      type: input.type || null,
      title: input.fieldValue,
      id: input.id || null
    }
    newProps[input.fieldName] = prop;
    this.setState({ updatedProps: newProps });
  }

  deleteProperty(e) {
    e.preventDefault();
    let newProps = this.state.updatedProps;
    delete newProps[e.target.name];
    this.setState({ updatedProps: newProps });
  }

  render() {
    this.createInputs();
    return (
      <form className="editForm" onSubmit={this.handleSubmit.bind(this)}>
        <h1>{this.props.title}</h1>
        { this.inputList }
        <AddField onInputChange={this.handleInputChange.bind(this)} />
        <button type='submit'>Submit Changes</button>
      </form>
    );
  }

}

export default EditForm;
