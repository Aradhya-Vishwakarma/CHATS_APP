import { useInputValidation } from "6pp";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom"; // Correct import
import { blue } from "../../constants/color";

const AdminLogin = () => {
  const secretkey = useInputValidation("");
  const [isAdmin, setIsAdmin] = useState(false); // Use state for admin login

  const submitHandler = (e) => {
    e.preventDefault();
    if (secretkey.value === "admin123") {
      // Example validation
      setIsAdmin(true);
    } else {
      console.log("Invalid secret key");
    }
  };

  if (isAdmin) return <Navigate to="/admin/DashBoard" />;

  return (
    <div
      style={{
        background: blue,
      }}>
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
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            marginTop: "100px",
          }}>
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={submitHandler}>
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretkey.value}
              onChange={secretkey.changeHandler}
            />

            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              type="submit"
              color="primary"
              fullWidth>
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
