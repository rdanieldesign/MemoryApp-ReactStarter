/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './SinglePage.css';
import withStyles from '../../decorators/withStyles';
import MemoryItem from '../MemoryItem';
import { getSingleMemory } from '../../stores/MemoryStore';

@withStyles(styles)
class SinglePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = { memory: { properties: []}};
  }

  componentDidMount() {
    getSingleMemory(this.props._id).done( data => {
      this.setState({ memory: data });
    })
  }

  render() {
    const title = 'Home Page';
    this.context.onSetTitle(title);

    let item = this.state.memory;
    console.log(item);

    return (
      <div className="SinglePage">
        <ul className="SinglePage-container">
          <MemoryItem title={this.state.memory.title} properties={this.state.memory} _id={this.state.memory._id} key={this.state.memory._id} />
        </ul>
      </div>
    );
  }

}

export default SinglePage;
