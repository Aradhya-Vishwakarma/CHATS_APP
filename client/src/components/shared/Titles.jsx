import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat App",
  subtitle = "Chat with anyone on any topic",
}) => {
  return (
    <Helmet>
      <Title>{Title}</Title>
        <meta name="description" content="{ description}" />
     </Helmet>
  );
};

export default Title 
