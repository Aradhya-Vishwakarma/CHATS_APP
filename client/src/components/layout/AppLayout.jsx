import React from "react";
import Header from "./Header";
// import { Title } from '@mui/icons-material'
import Title from "../shared/Title";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <div>Header</div>
        <Header />
        <WrappedComponent {...props} />
        <div>Footer</div>
      </>
    );
  };
};

export default AppLayout;
