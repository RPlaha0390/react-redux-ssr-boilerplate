import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
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

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`} </title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
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
  return { users: state.users };
}

/**
 * Recieve the server side store, then manually 
 * dispatch the fetchUsers action creator.
 * @param  {Object} store 
 * @return {Promise}
 */
function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};

