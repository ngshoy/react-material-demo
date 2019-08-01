import React from 'react';

const Home = () => (
  <ul>
    { new Array(500).fill(null).map((v, i) => (
      <li key={i}>{i}</li>
    )) }
  </ul>
);

export default Home;