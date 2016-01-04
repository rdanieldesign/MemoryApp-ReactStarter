/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './MemoryItem.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class MemoryItem extends Component {

  render() {

    let properties = [];

    for(var i in this.props.properties){
      properties.push(<li key={i}> {i}: {this.props.properties[i]} </li>);
    }

    return (
      <li className="MemoryItem" data-id={this.props._id}>
        <h3> {this.props.title} </h3>
        <ul>
          { properties }
        </ul>
        <a href={"/single/" + this.props._id} onClick={Link.handleClick}> See More </a>
      </li>
    );
  }

}

export default MemoryItem;
