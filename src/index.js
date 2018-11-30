import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
// Initialise server side store
const store = createStore();

app.use(express.static('public'));
app.get('*', (req, res) => {
  /**
   * Map over all matched routes and check to see if the route obj
   * has property loadData. If true, call loadData and pass store. 
   * @param  [Array]  Routes
   * @param  'String' req.path
   * @return {Promise}
   */
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  /**
   * Iterate over all promises, then once resolved send 
   * store and request to renderer function
   * @param  [{Promise}]
   */
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
