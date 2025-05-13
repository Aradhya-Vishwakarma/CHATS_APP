import React,{useRef} from 'react'
import AppLayout from '../components/layout/AppLayout'
import {IconButton, Stack} from '@mui/material'
import { graycolor ,bgColor } from '../constants/color';
import { AttachFile as AttachFileIcon ,Send as SendIcon } from '@mui/icons-material';
import {InputBox} from '../components/styles/styledComponents'
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessages } from '../constants/sampleData';

import MessageComponent from '../components/shared/MessageComponent';

const user ={
  _id:"hsifhidhfi",
  name:"Vishnu",
 
  
}
const Chat = () => {

  const containerRef = useRef(null);
  return (
  <>
  <Stack ref={containerRef}
  boxSizing={"border-box"}
  padding={"1rem"}
  spacing={"1rem"}
  bgcolor={graycolor}
  height={"90%"}
  sx={{
    overflowX:"hidden",
    overflowY:"auto",
  }}>
    {
      sampleMessages.map((i) => (
        <MessageComponent key={i._id} message={i} user={user}  />
      ))
    
    }
  </Stack>
  <form style={{height: "10%"}}>
    <Stack direction={"row"} alignItems={"center"} height={"100%"} padding={"1rem"} position={"relative"}>
      <IconButton sx={{
        position:"absolute",
        left:"1rem",
        rotate:"30deg",
      }}>
        <AttachFileIcon />
      </IconButton>
      <InputBox placeholder='Message'    />
      <IconButton type='submit' sx={{
        rotate:"-30deg",
        backgroundColor:"primary.main",
        color:"white",
        marginLeft:"1rem",
        padding:"0.5rem",
        "&:hover":{
          backgroundColor:"primary.dark",
        },
      }}>
        <SendIcon />
      </IconButton>
    </Stack>
    <FileMenu />

  </form>
  </>
  );
}

export default AppLayout()(Chat);
