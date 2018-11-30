import React from 'react';
import Home from './containers/Home';
import UsersList from './containers/UsersList';

export default [
	{
		path: '/',
		...Home,
		exact: true
	},
	{
		...UsersList,
		path: '/users',
	}
];
