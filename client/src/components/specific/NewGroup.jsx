import {
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const [selectedMembers, setSelectedMembers] = useState([]);


  const groupName = useInputValidation("");
  const selectMemberHandler = (_id) => {
    setSelectedMembers((prev) =>
      prev.includes(_id)
        ? prev.filter((currElement) => currElement !== _id)
        : [...prev, _id]
    );
  };
  
  const submitHandler = () => {};
  const closeHandler = () => {} ;

  
  const [members, setMembers] = useState(sampleUsers);
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1"> Members</Typography>

        <Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(i._id)}
              // handlerIsLoading={isLoadingSendingRequest}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant="outlined" color="error" size="large">
          
            Cancel
          </Button>
          <Button variant="outlined" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
