import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import { React, memo } from "react";
import { sampleNotifications } from "../../constants/sampleData";

const Notifications = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    // console.log("Add Friend", id)
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"}>
        <DialogTitle>Notification</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({ sender, _id }) => (
            <NotificationItem
              sender={sender}
              _id={_id}
              handler={friendRequestHandler}
              key={_id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};
export default Notifications;

const NotificationItem = memo(({ sender, _id, handler }) => {
  const {name , avatar} = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        width={"100%"}
        spacing={"2rem"}>
        <Avatar/>
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
          {`${name} has sent you a friend request`}
        </Typography>
      
      <Stack direction={{xs:"column", sm:"row"}} >
        <Button onClick={() =>handler({_id , accept: true})}>Accept</Button>
        <Button color="error" onClick={() => handler({_id , accept: false})}>Reject</Button>
      </Stack>
      </Stack>
    </ListItem>
  );
});
