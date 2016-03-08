/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import SearchField from '../SearchField';
import Util from '../../stores/utility';
const util = new Util();
const $ = require('jquery');

class PersonForm extends Component {

  handleInputChange(e) {
    let input = util.inputFormatter(e);
    this.props.onInputChange(input);
  }

  render() {

    if (this.props.inputsCleared) {

      return (
        <section className="personForm">
          <label>Age</label>
          <input type="text" placeholder="Add Copy Here" name="age" value='' onChange={this.handleInputChange.bind(this)}/>
          <label>Father</label>
          <SearchField type='person' placeholder="Father's Name" name="father" onInputChange={this.handleInputChange.bind(this)} />
          <label>Home Town</label>
          <SearchField type='place' placeholder="Home Town" name="homeTown" onInputChange={this.handleInputChange.bind(this)} />
        </section>
      );

    } else {

      return (
        <section className="personForm">
          <label>Age</label>
          <input type="text" placeholder="Add Copy Here" name="age" onChange={this.handleInputChange.bind(this)}/>
          <label>Father</label>
          <SearchField type='person' placeholder="Father's Name" name="father" onInputChange={this.handleInputChange.bind(this)} />
          <label>Home Town</label>
          <SearchField type='place' placeholder="Home Town" name="homeTown" onInputChange={this.handleInputChange.bind(this)} />
        </section>
      );

    }
  }

}

export default PersonForm;
