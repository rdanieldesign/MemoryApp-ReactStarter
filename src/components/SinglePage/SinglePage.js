/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './SinglePage.css';
import withStyles from '../../decorators/withStyles';
import MemoryItem from '../MemoryItem';
import Memories from '../../stores/MemoryStore';

@withStyles(styles)
class SinglePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Home Page';
    this.context.onSetTitle(title);

    let item = Memories.filter( x => {
      return x._id == this.props._id;
    })[0];

    return (
      <div className="SinglePage">
        <ul className="SinglePage-container">
          <MemoryItem title={item.title} copy={item.copy} _id={item._id} />
        </ul>
      </div>
    );
  }

}

export default SinglePage;
