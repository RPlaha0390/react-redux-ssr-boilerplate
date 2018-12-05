import React from 'react';
import App from './App';
import Home from './containers/Home';
import UsersList from './containers/UsersList';
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
				...UsersList,
				path: '/users',
			},
      {
        ...NotFound
      }
		]
	}
];


