import React from 'react';

/**
 * Use destructuring assignment to pull staticContext
 * out of props. Set staticContext's default value to 
 * an empty object
 * @param  {Object} staticContext
 * @return {JSX}
 */
const NotFound = ({ staticContext = {} }) => {
  /**
   * Add notFound property on staticContext and 
   * set to true
   * @type {Boolean}
   */
  staticContext.notFound = true;

  return <h1>Oops, this page does not exist!</h1>
};

export default {
  component: NotFound
};
