import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField
} from "@mui/material";
import { React, useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

// const users =[ 1, 2,3]

const Search = () => {
  let isLoadingSendingRequest = false;
  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = (id) => {
    console.log("Add Friend", id);
  };

  const search = useInputValidation("");
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find people</DialogTitle>
        <TextField
          label="SEARCH"
          value={search.value}
          onChange={search.changeHandler}
          // placeholder='Search for people'
          varient="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendingRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
