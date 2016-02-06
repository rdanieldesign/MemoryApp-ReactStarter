/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import Link from '../Link';

class MemoryItem extends Component {

  render() {
    let properties = [];

    for(var i in this.props.properties){
      if (this.props.properties[i].id) {
        properties.push(
          <li key={i}> {i}:
            <a href={`/single/${this.props.properties[i].id}`} onClick={Link.handleClick}> {this.props.properties[i].title} </a>
          </li>
        );
      } else {
        properties.push(<li key={i}> {i}: {this.props.properties[i].title} </li>);
      }
    }

    return (
      <li className="MemoryItem" data-id={this.props._id}>
        <h3> {this.props.title} </h3>
        <ul>
          { properties }
        </ul>
        <a href={`/single/${this.props._id}`} onClick={Link.handleClick}> See More </a>
      </li>
    );
  }

}

export default MemoryItem;
