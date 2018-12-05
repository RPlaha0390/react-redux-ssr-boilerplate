import React from 'react';
import App from './App';
import Home from './containers/Home';
import UsersList from './containers/UsersList';
import AdminsList from './containers/AdminsList';
import NotFound from './components/NotFound';

export default [
	{
		...App,
		routes: [
			{
				path: '/',
				...Home,
				exact: true
			},
      {
        ...AdminsList,
        path: '/admins'
      },
			{
				...UsersList,
				path: '/users',
			},
      {
        ...NotFound
      }
		]
	}
];


