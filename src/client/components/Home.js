import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the VERY home component</div>
      <button onClick={() => console.log('Hi')}>Click Me!</button>
    </div>
  );
};

export default Home;
