import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  /**
   * Map over admins array and construct 
   * JSX markup for admins list
   * @return {JSX}
   */
  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

/**
 * Destructure the admins property out of the state object
 * @param  [Array] state
 * @return {Object}
 */
function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsList),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};

