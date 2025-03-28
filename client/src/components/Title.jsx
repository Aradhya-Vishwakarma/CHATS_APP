import React from 'react';
import { Helmet } from 'react-helmet-async';

const Title = ({
  title = 'Chat App',
  subtitle = 'Chat with anyone on any topic',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={subtitle} />
    </Helmet>
  );
};

export default Title;
