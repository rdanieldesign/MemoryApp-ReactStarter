/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './CreatePage.css';
import withStyles from '../../decorators/withStyles';
import Memories, { addMemory } from '../../stores/MemoryStore';

@withStyles(styles)
class CreatePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = { title: '', copy: ''};
  }

  componentWillUnmount() {}

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title.trim();
    let copy = this.state.copy.trim();
    console.log(title, copy);
    addMemory({title: title, copy: copy, _id: Memories.length + 1});
    this.setState({title: '', copy: ''});
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleCopyChange(e) {
    this.setState({ copy: e.target.value });
  }

  render() {
    const title = 'Create Page';
    this.context.onSetTitle(title);

    return (
      <div className="CreatePage">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Title</label>
          <input type="text" placeholder="Add Title Here" value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
          <label>Copy</label>
          <input type="text" placeholder="Add Copy Here" value={this.state.copy} onChange={this.handleCopyChange.bind(this)}/>
          <input type="submit" value="Add New Memory" />
        </form>
      </div>
    );
  }

}

export default CreatePage;
