import React from "react";
import { useState } from "react";
import { Button, Container, Paper, TextField, Typography, Avatar, IconButton, Box } from "@mui/material";
import { VisuallyHiddenInput } from "../components/styles/styledComponents";
import { CameraAlt } from "@mui/icons-material";
import {useFileHandler, useInputValidation , useStrongPassword} from "6pp"
import { usernameValidator } from "../utils/validator";
import { Avatar as MuiAvatar } from "@mui/material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name=  useInputValidation("" );
  const bio=  useInputValidation("" );
  const username=  useInputValidation(""  , usernameValidator);
  const password=  useInputValidation("" );
  const avatarHandler = useFileHandler("single");

  const handleLogin = (e) => { 
    e.preventDefault();
  }
  const handleSignUp = (e) => { 
    e.preventDefault();
  }
  return (
    <div
     style={{
background: "linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5))"
    }}
    >
      
    <Container
      component={"main"}
      maxWidth={"xs"}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Paper
        elevation={3}
        style={{
          justifyContent:"center",
          // height: "",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          marginTop: "100px",
        }}>
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}
            
            onSubmit={handleLogin}
            
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
                />

              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                type="submit"
                color="primary"
                fullWidth>
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem "}>
                OR
              </Typography>
              <Button
                fullWidth
                variant="text"
                color="primary"
                onClick={toggleLogin}>
                sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={handleSignUp}
            
            >
              <Box position="relative" width={"10rem"} margin="auto">
                <MuiAvatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatarHandler.preview}
                  
                  
                  />
                 {password.error && (
                <Typography  margin= {" 1rem"} color="error" variant="caption">
                  {password.error}
                </Typography>
                )} 




                <IconButton
                  component="label"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    backgroundColor: "white",
                    boxShadow: 1,
                  }}>
                  <CameraAlt />
                  <input type="file" hidden onChange={avatarHandler.changeHandler} />
                </IconButton>
              </Box>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
                />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
                )}
                              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
                />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
                />

              {/* {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                  </Typography>
                  )} */}
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                type="submit"
                color="primary"
                fullWidth>
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem "}>
                OR
              </Typography>
              <Button
                fullWidth
                variant="text"
                color="primary"
                onClick={toggleLogin}>
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
        </div>
  );
};

export default Login;
