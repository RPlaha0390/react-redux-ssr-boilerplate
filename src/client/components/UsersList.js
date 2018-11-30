import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  /**
   * Map over users array and construct 
   * JSX markup for user list
   * @return {JSX}
   */
  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  }

  render() {
    return (
      <div>
        Here is a big list of users:
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

/**
 * map the store state to component props for use.
 * @param  [Array] state
 * @return {Object}
 */
function mapStateToProps(state) {
  console.log(state.users[0]);
  return { users: state.users };
}

/**
 * Recieve the server side store, then manually 
 * dispatch the fetchUsers action creator.
 * @param  {Object} store 
 * @return {Promise}
 */
export function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);

