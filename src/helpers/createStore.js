import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {
	/**
	 * Create a custom axios instance for 
 	 * server and set baseURL to full api url
	 * @type {Object}
	 */
	const axiosInstance = axios.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: { 
			cookie: req.get('cookie') || '' 
		}
	});

  const store = createStore(
    reducers, 
    {}, 
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
}