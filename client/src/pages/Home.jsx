import React from 'react';
import Title from '../components/Title';
import AppLayout from '../components/layout/AppLayout';

const Home = () => {
  return (
    <>
      <Title title="Home - Chat App" subtitle="Welcome to the Chat App" />
      <h1>Welcome to Home Page</h1>
    </>
  );
};

export default AppLayout()(Home);

