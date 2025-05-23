import { Dialog, Stack, DialogTitle, Button, Typography } from "@mui/material";
import React,{ useState} from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
const addMemberSubmitHandler = () => {
    closeHandler();
    console.log("add member submit handler called")
}
const closeHandler =()=>{}



const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
    const [members, setMembers] = useState(sampleUsers);
    const [selectMembers , setSelectMembers] = useState([]);
    const selectMemberHandler = (id) => {
        setSelectMembers((prev) =>
        prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
        );
    };

const closeHandler = () => {
    setSelectMembers([]);
    setMembers([]);
}


  return (
    <Dialog open onClose={closeHandler}>
      <Stack spacing={"2rem"} p={"2rem"} width={"20rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
           members.map((i) => (
              <UserItem key={i._id} user={i} handler={selectMemberHandler} 
              isAdded={selectMembers.includes(i._id)}/>
            ))
          ) : (
            <Typography textAlign={"center"}> NO FRIENDS </Typography>
          )}
        </Stack>
        <Stack direction={"row"} 
        alignItems={"center"}
        justifyContent={"space-evenly"}>
          <Button onClick={closeHandler}  color="error" >Cancel</Button>
          <Button  onClick={addMemberSubmitHandler}  variant="outlined" disabled={isLoadingAddMember} >Submit</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};


export default AddMemberDialog;
