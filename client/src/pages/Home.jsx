import React from 'react';
import Title from '../components/Title';
import AppLayout from '../components/layout/AppLayout';
import { Typography ,Box } from '@mui/material';
import { graycolor } from '../constants/color'; // Ensure graycolor is defined in the constants

const Home = () => {
  return (
    <Box bgcolor={graycolor} height={"100vh"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);


