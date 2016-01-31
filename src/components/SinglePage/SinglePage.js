/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import MemoryItem from '../MemoryItem';
import { getSingleMemory } from '../../stores/MemoryStore';

class SinglePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      item: { properties: {} }
    };
  }

  componentDidMount() {
    getSingleMemory.call(this, this.props._id, this.handleNewData);
  }

  handleNewData(data) {
    this.setState({ item: data });
  }

  render() {
    const title = 'Home Page';
    this.context.onSetTitle(title);

    return (
      <div className="SinglePage">
        <ul className="SinglePage-container">
          <MemoryItem properties={this.state.item.properties} _id={this.state.item._id} key={this.state.item._id} />
        </ul>
      </div>
    );
  }

}

export default SinglePage;
