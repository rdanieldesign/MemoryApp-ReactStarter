/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './MemoryList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import MemoryItem from '../MemoryItem';
import Memories from '../../stores/MemoryStore';

@withStyles(styles)
class MemoryList extends Component {

  render() {

    let items = [];

    Memories.forEach( item => {
      items.push(<MemoryItem title={item.title} copy={item.copy} properties={item} _id={item._id} key={item._id} />)
    });

    return (
      <ul className="MemoryList">
        { items }
      </ul>
    );
  }

}

export default MemoryList;
