import React from "react";
import Header from "./Header";
// import { Title } from '@mui/icons-material'
import Titles from "../shared/Titles";
import { Grid } from "@mui/material";
import { ChatList } from "../specific/Chatlist";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id ,groupChat) =>{
      e.preventDefault();
      console.log("Delete Chat " , _id, groupChat)
    }
    return (
      <>
        {/* <Title/> */}
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block " },
           }}
            height={"100vh"}>
            
           <ChatList chats={sampleChats} chatId={chatId} handleDeleteChat={handleDeleteChat}
         
           />
          </Grid>
          <Grid
            item
            
            xs={12}
            sm={6}
            md={6}
            lg={6}
            height={"100vh"}
           >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
        
           item 
           marginInlineStart={"auto"}
            // xs={12}
            // sm={5}
            // md={4}
           lg={3}
            height={"100vh"}
           sx={{  display:{xs:"none",sm:"block", md:"block"},
            bgcolor:"rgba(14, 12, 12, 0.85)",
      }}>
        
          <Profile/>
          </Grid>
        </Grid>
        {/* <div>Footer</div> */}
      </>
    );
  };
};

export default AppLayout;
