
import {Add as AddIcon ,Remove as RemoveIcon} from "@mui/icons-material";
import { ListItem, Avatar, Typography, IconButton, Stack } from "@mui/material";
import { React, memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading, isAdded =false ,styling={} }) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        width={"100%"}
        {...styling}
        spacing={"2rem"}>
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
          {name}
        </Typography>
        <IconButton
          size="small"
          sx={{
            bgcolor: "primary.main",
            color: " white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}>
            {isAdded? <RemoveIcon/>: <AddIcon />}
          
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
