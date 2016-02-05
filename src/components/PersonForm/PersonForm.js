/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import AddField from '../AddField';
import SearchField from '../SearchField';

class PersonForm extends Component {

  handleInputChange(e) {
    this.props.onInputChange(e);
  }

  render() {

    if (this.props.inputsCleared) {

      return (
        <section className="personForm">
          <label>Name</label>
          <input type="text" placeholder="Add Title Here" name="title" value='' onChange={this.handleInputChange.bind(this)}/>
          <label>Age</label>
          <input type="text" placeholder="Add Copy Here" name="age" value='' onChange={this.handleInputChange.bind(this)}/>
          <AddField />
        </section>
      );

    } else {

      return (
        <section className="personForm">
          <label>Name</label>
          <input type="text" placeholder="Add Title Here" name="title" onChange={this.handleInputChange.bind(this)}/>
          <label>Age</label>
          <input type="text" placeholder="Add Copy Here" name="age" onChange={this.handleInputChange.bind(this)}/>
          <label>Father</label>
          <SearchField type='person' placeholder="Father's Name" name="father" onInputChange={this.handleInputChange.bind(this)} />
          <AddField />
        </section>
      );

    }
  }

}

export default PersonForm;
