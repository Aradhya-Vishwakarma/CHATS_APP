import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Container, Paper, Stack, Typography, Box } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Notifications as NotificationsIcon,
  Group as GroupIcon,
  Person as PersonIcon,
    Message as MessageIcon,
} from "@mui/icons-material";
import { voilet, black } from "../../constants/color";
import moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../components/styles/styledComponents";
import { DoughnutChart, LineChart } from "../../components/specific/Charts";

const DashBoard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "1rem",
      }}>
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon
          sx={{
            fontSize: "2rem",
          }}
        />
        <SearchField placeholder="Search..." />
        <CurveButton> Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0,0,0,0.5)"}
          textAlign={"center"}>
          {moment().format("dddd , D MMMM YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
      spacing={"2rem"}>
      <WidgetCard title={"Users"} value={34} Icon={<PersonIcon />} />
      <WidgetCard title={"Chats"} value={3} Icon={<GroupIcon />} />
      <WidgetCard title={"Messages"} value={453} Icon={<MessageIcon />} />
    </Stack>
  );

  const Chat = <>wji</>;
  return (
    <AdminLayout>
      <Container component={"main"} direction={"row"}>
        {Appbar}
        <Stack direction={
          { xs: "column", lg: "row"  }
        } flexWrap={"wrap"}
        justifyContent={"center"}  alignItems={{
          xs:" center",
          lg: "stretch",
        }}
        sx={{
        
          gap: "2rem",
        }}
        
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              flexGrow: 1,
              width: "100%",
              maxWidth: "45rem",
            
            }}>
            <Typography margin={"2rem 0"} variant="h4">
              
              Last Messages
            </Typography>
            <LineChart value={[23 ,28,56 ,65 ,67 ,22 ,88]}/>
          </Paper>
          <Paper
          
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              width: "100%",
              maxWidth: "25rem",
              // height: "25rem",
            }}>
            <DoughnutChart labels={["Single Chat" , " Group Chat"]} value={[23 ,78]}/>

            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}>
              <GroupIcon /> <Typography>Vs </Typography>
              <PersonIcon />
            </Stack>
          </Paper>
          Chat Area
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
};

const WidgetCard = ({ title, value, Icon }) => (
  <Paper
  elevation={3}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1.5rem",
      width: "20rem",
    }}>
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: `5px solid ${"black"}`,
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {value}
      </Typography>
      <Stack direction={"row"} spacing={"1rem"}  alignItems={"center"}>
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default DashBoard;
