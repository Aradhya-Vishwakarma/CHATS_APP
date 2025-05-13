import React, { useState } from "react";
import {
  Grid,
  Box,
  IconButton,
  Drawer,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { graycolor } from "../../constants/color";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ManageAccounts as ManageAccountsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  ExitToApp as ExitToAppIcon
} from "@mui/icons-material";
import { useLocation, Link as LinkComponent, Navigate } from "react-router-dom";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;

export const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },

  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccountsIcon />,
  },

  {
    name: "Chats",
    path: "/admin/chats",
    icon: <GroupIcon />,
  },

  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];

const Sidebar = ({ w = "100%" }) => {
  const logoutHandler = () => {
    console.log("Logout");
  };
  const location = useLocation();
  return (
    <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant="h5" textTransform={"uppercase"}>
        CHAT APP
      </Typography>


      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link key={tab.path} to={tab.path}
          
          
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography fontSize={"1.2rem"}>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}
         <Link onClick={logoutHandler} >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon />
              <Typography>Logout</Typography>
            </Stack>
          </Link>
      </Stack>
    </Stack>
  );
};

const isAdmin = true   ; // Replace with actual admin check

const AdminLayout = ({ children }) => {
  const isAdmin = true; // Replace with actual admin check
  const [isMobile, setIsMobile] = useState(false);
  const handleMobile = () => setIsMobile(!isMobile);
  const handleClose = () => setIsMobile(false);

if(!isAdmin) { return <Navigate to={"/admin"} />; } // Redirect to home if not admin

  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          top: "1rem",
          right: "1rem",
        }}>
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}

          {/* <MenuIcon/> */}
        </IconButton>
      </Box>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
        }}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        sx={{
          bgcolor: graycolor,
        }}>
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <Sidebar w="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
