import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, {
  Fragment,
  lazy,
  memo,
  Suspense,
  useEffect,
  useState,
} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AvatarCard } from "../components/shared/AvatarCard";
import { Link } from "../components/styles/styledComponents";
import { bgColor, blue } from "../constants/color";
import { sampleChats, sampleUsers } from "../constants/sampleData";
import UserItem from "../components/shared/UserItem";

const ConfirmDeleteDialog = lazy(() =>
  import("../components/dialogs/ConfirmDeleteDialog")
);

const AddMemberDialog = lazy(() =>
  import("../components/dialogs/AddMemberDialog")
);

const Group = () => {
  const navigate = useNavigate();
  const [isAddMember, setIsAddMember] = useState(false); // Add state for AddMemberDialog

  const chatId = useSearchParams()[0].get("group");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);

  const navigateBack = () => {
    navigate("/");
  };
  const deleteHandler = () => {
    console.log("deletehandler confirmed");
    closeConfirmDeleteHandler();
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);
  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
  };

  const openAddMemberHandler = () => {
    setIsAddMember(true); // Open AddMemberDialog
  };

  const closeAddMemberHandler = () => {
    setIsAddMember(false); // Close AddMemberDialog
  };

  const removeMemberHandler = (id) => {
    console.log("remove member handler called", id);
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialogOpen(true);
    console.log("delete group");
  };
  const closeConfirmDeleteHandler = () => {
    console.log("delete group confirmed");
    setConfirmDeleteDialogOpen(false);
  };

  useEffect(() => {
    if (  chatId) {
    setGroupName(`Group Name ${chatId}`);
    setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const IconBtns = (
    <Fragment>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}>
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: blue,
            color: "white",
            ":hover": {
              bgcolor: "gray",
            },
          }}
          onClick={navigateBack}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </Fragment>
  );

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}>
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />

          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            {" "}
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column reverse",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}>
        Add member
      </Button>
      <Button
        variant="outlined"
        color="error"
        size="large"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}>
        Delete Group
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          backgroundImage: bgColor,
          backgroundSize: "cover",
        }}
        sm={4}
        bgcolor={blue}>
        <GroupsList myGroups={sampleChats} chatId={chatId} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent:"center",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}>
        {IconBtns}
        {groupName && (
          <>
            {GroupName}
            <Typography>Members</Typography>

            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
             
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}>
              {/* members */}

              {sampleUsers.map((i) => (
                <UserItem
                  key={i._id} // Add 
                  user={i}
                  isAdded={true} //    
                  styling={{
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                  }}
              handler={removeMemberHandler} // Example handler
                />
              ))}

            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog
            open={isAddMember}
            handleClose={closeAddMemberHandler}
            addMember={(selectedMembers) => console.log("Added members:", selectedMembers)} // Example handler
            isLoadingAddMember={false} // Example loading state
            chatId={chatId}
          />
        </Suspense>
      )}

      {confirmDeleteDialogOpen && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialogOpen}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}
      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}>
        <GroupsList width="50vw" myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ width = "100%", myGroups = [], chatId }) => (
  <Stack width={width} sx={{
    backgroundImage: bgColor,
    backgroundSize: "cover",
    height: "100vh",
  }}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
);
const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Group; 
