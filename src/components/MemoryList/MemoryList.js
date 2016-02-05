/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import Link from '../Link';
import MemoryItem from '../MemoryItem';
import { getAllMemories } from '../../stores/MemoryStore';

class MemoryList extends Component {

  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    getAllMemories.call(this, this.handleNewData);
  }

  handleNewData(data) {
    this.setState({ items: data });
  }

  render() {

    let items = [];

    this.state.items.forEach( item => {
      items.push(<MemoryItem title={item.title} type={item.type} properties={item.properties} _id={item._id} key={item._id} />)
    });

    return (
      <ul className="MemoryList">
        { items }
      </ul>
    );
  }

}

export default MemoryList;
