import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// Proxy configuration
app.use(
  '/api', 
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      /**
       * Include x-forwarded-host header to redirect 
       * the user back to localhost:3000, or a domain
       * that does not match the API domain. 
       */
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  // Initialise server side store
  const store = createStore(req);
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
    const context = {};
    const content = renderer(req, store, context);

    /**
     * Check if context has property notFound.
     * If it's true then set response to 404
     * @param  {Boolean}
     */
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
