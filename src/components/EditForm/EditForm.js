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
    this.state = { newProps: {}, inputList: [] }
    this.originalProps = [];
  };

  componentDidMount(){
    this.createInputs(this.props.properties);
    this.originalProps = this.props.properties;
  };

  createInputs(props){
    let inputList = [];
    console.log(props);
    for(var i in props){
      let prop = props[i];
      if (prop.type) {
        let preselected = { title: prop.title, id: prop.id };
        inputList.push(<div key={i}>
            <SearchField type={prop.type} placeholder={i} name={i} preselect={preselected} onInputChange={this.handleOriginalInputChange.bind(this)} />
            <button name={i} onClick={this.deleteProperty.bind(this)}>X</button>
          </div>)
      } else {
        inputList.push(<div key={i}>
            <input key={i} type="text" placeholder={i} name={i} value={prop.title} onChange={this.handleOriginalInputChange.bind(this)}/>
            <button name={i} onClick={this.deleteProperty.bind(this)}>X</button>
          </div>)
      }
    }
    this.setState({ inputList: inputList });
  }

  handleSubmit(e) {
    e.preventDefault();
    let allProps = util.extend(this.originalProps, this.state.newProps);
    updateMemory({
      title: this.props.title,
      type: this.props.type,
      _id: this.props._id,
      properties: allProps
    });
  };

  handleOriginalInputChange(e) {
    let input = util.inputFormatter(e);
    let prop = {
      type: input.type || null,
      title: input.fieldValue,
      id: input.id || null
    }
    this.originalProps[input.fieldName] = prop;
    this.createInputs(this.originalProps);
  }

  handleNewInputChange(e) {
    let input = util.inputFormatter(e);
    let newProps = this.state.newProps;
    let prop = {
      type: input.type || null,
      title: input.fieldValue,
      id: input.id || null
    }
    newProps[input.fieldName] = prop;
    this.setState({ newProps: newProps });
  }

  deleteProperty(e) {
    e.preventDefault();
    delete this.originalProps[e.target.name];
    this.createInputs(this.originalProps);
  }

  render() {
    return (
      <form className="editForm" onSubmit={this.handleSubmit.bind(this)}>
        <h1>{this.props.title}</h1>
        { this.state.inputList }
        <AddField onInputChange={this.handleNewInputChange.bind(this)} />
        <button type='submit'>Submit Changes</button>
      </form>
    );
  }
}

export default EditForm;
