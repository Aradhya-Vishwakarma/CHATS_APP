import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Chat App</title>
        <meta name="description" content="Welcome to the Chat App" />
      </Helmet>
      <h1>Welcome to Home Page</h1>
    </>
  );
};

export default Home;

