/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import { addMemory } from '../../stores/MemoryStore';
import { addCategory, getAllCategories, checkForExistingCategory } from '../../stores/CategoryStore';
import TypeSelector from '../TypeSelector';
import PersonForm from '../PersonForm';
import PlaceForm from '../PlaceForm';
import DynamicForm from '../DynamicForm';
import AddField from '../AddField';
import './CreatePage.scss';
const $ = require('jquery');

class CreatePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = { type: '', properties: {}, categories: null};
    this.catMap = {};
  }

  componentDidMount() {
    let cb = function(data){
      this.mapCategories(data);
      this.setState({ categories: data });
    };
    getAllCategories.call(this, cb);
  }

  mapCategories(categories) {
    categories.forEach( cat => {
      this.catMap[cat.type] = cat.properties;
    });

    console.log(this.catMap);
  }

  handleTypeChange(type) {
    this.setState({ type: type });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addCategory();
    addMemory(this.state);
  }

  addCategory() {
    if (!checkForExistingCategory(this.state.type, this.state.categories)) {
      addCategory.call(this, { type: this.state.type, properties: Object.keys(this.state.properties) });
    } else {
      console.log('category already exists');
    }
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
      let newState = { properties: this.state.properties };
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
        <TypeSelector onTypeChange={this.handleTypeChange.bind(this)} categories={this.state.categories}/>
        <label>Title</label>
        <input type="text" placeholder="Add Title Here" name="title" onChange={this.handleAddedInput.bind(this)}/>
        <DynamicForm className="create-page__input" onInputChange={this.handleInputChange.bind(this)} typeProperties={this.catMap[this.state.type]} />
        <AddField onInputChange={this.handleAddedInput.bind(this)} />
        <button type="submit"> Add New Memory </button>
      </form>
    );
  }
}

export default CreatePage;
