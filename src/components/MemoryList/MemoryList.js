/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './MemoryList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import MemoryItem from '../MemoryItem';
import { getAllMemories } from '../../stores/MemoryStore';

@withStyles(styles)
class MemoryList extends Component {

  constructor() {
    super();
    this.state = { memories: [] };
  }

  componentDidMount() {
    getAllMemories().done( (data) => {
      this.setState({ memories: data });
    })
  }

  render() {

    let items = [];

    this.state.memories.forEach( item => {
      items.push(<MemoryItem title={item.properties.title} properties={JSON.parse(item.properties)} _id={item._id} key={item._id} />)
    });

    return (
      <ul className="MemoryList">
        { items }
      </ul>
    );
  }

}

export default MemoryList;
