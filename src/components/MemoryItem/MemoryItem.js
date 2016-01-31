/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import Link from '../Link';

class MemoryItem extends Component {

  render() {
    console.log(this.props);

    let properties = [];

    for(var i in this.props.properties){
      properties.push(<li key={i}> {i}: {this.props.properties[i]} </li>);
    }

    return (
      <li className="MemoryItem" data-id={this.props._id}>
        <h3> {this.props.properties.title} </h3>
        <ul>
          { properties }
        </ul>
        <a href={"/single/" + this.props._id} onClick={Link.handleClick}> See More </a>
      </li>
    );
  }

}

export default MemoryItem;
