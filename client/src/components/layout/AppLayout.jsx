import React from "react";
import Header from "./Header";
// import { Title } from '@mui/icons-material'
import Title from "../shared/Title";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <div>Header</div>
        
        <Header />
      <Grid container height ={"calc(100vh - 4rem)"}>  
<Grid item xs={4} height={"100%"} bgcolor={"primary.main"}> First </Grid>
<Grid item xs={4} height={"100%"} bgcolor={"secondary.main"}>
        <WrappedComponent {...props} />

</Grid>
<Grid item xs={4} height={"100%"} bgcolor={"tertiary.main"}> Third </Grid>

      </Grid>
        <div>Footer</div>
      </>
    );
  };
};

export default AppLayout;
