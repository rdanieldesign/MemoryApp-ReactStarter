/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import EditForm from '../EditForm';
import { getSingleMemory } from '../../stores/MemoryStore';

class EditPage extends Component {

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

  render() {
    const title = 'Edit Page';
    this.context.onSetTitle(title);

    return (
      <div className="EditPage">
        <ul className="EditPage-container">
          <EditForm title={this.state.title} type={this.state.type} properties={this.state.properties} _id={this.state._id} key={this.state._id} />
        </ul>
      </div>
    );
  }

}

export default EditPage;
