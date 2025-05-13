import { Dialog, DialogContentText, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import React from 'react';

const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this group? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          NO
        </Button>
        <Button onClick={deleteHandler} color="error">
         YES
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
