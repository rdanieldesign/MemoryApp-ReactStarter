/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import SearchField from '../SearchField';
import Util from '../../stores/utility';
const util = new Util();
const $ = require('jquery');

class DynamicForm extends Component {

  handleInputChange(e) {
    let input = util.inputFormatter(e);
    this.props.onInputChange(input);
  }

  buildInputs(props) {
    this.inputList = [];
    if (this.props.typeProperties) {
      props.forEach( prop => {
        this.inputList.push(<label key={prop}>{prop}<input type="text" placeholder="Add Copy Here" name={prop} onChange={this.handleInputChange.bind(this)}/></label>
        )
      });
    }
  }

  render() {
    this.buildInputs(this.props.typeProperties);

    return (
      <section className="personForm">
        { this.inputList }
      </section>
    );
  }
}

// <label>Age</label>
// <input type="text" placeholder="Add Copy Here" name="age" value='' onChange={this.handleInputChange.bind(this)}/>
// <label>Father</label>
// <SearchField type='person' placeholder="Father's Name" name="father" onInputChange={this.handleInputChange.bind(this)} />
// <label>Home Town</label>
// <SearchField type='place' placeholder="Home Town" name="homeTown" onInputChange={this.handleInputChange.bind(this)} />

export default DynamicForm;
