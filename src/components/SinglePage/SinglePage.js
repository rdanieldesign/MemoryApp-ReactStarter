/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import MemoryItem from '../MemoryItem';
import { getSingleMemory, deleteMemory } from '../../stores/MemoryStore';
import Link from '../Link';

class SinglePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      title: '',
      type: '',
      _id: '',
      properties: {}
    };
  }

  componentDidMount() {
    getSingleMemory.call(this, this.props._id, this.handleNewData);
  }

  handleNewData(data) {
    this.setState({
      title: data.title,
      type: data.type,
      _id: data._id,
      properties: data.properties
    });
  }

  handleDelete(e) {
    deleteMemory(this.props._id);
  }

  render() {
    const title = 'Home Page';
    this.context.onSetTitle(title);

    return (
      <div className="SinglePage">
        <ul className="SinglePage-container">
          <MemoryItem title={this.state.title} type={this.state.type} properties={this.state.properties} _id={this.state._id} key={this.state._id} />
          <a href={`/edit/${this.props._id}`} onClick={Link.handleClick}>Edit</a>
          <a href='#' onClick={this.handleDelete.bind(this)}>Delete</a>
        </ul>
      </div>
    );
  }

}

export default SinglePage;
