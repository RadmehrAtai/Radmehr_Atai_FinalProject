import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect} from "react";
import {DialogContentText} from "@mui/material";

const FormDialog = ({handleUpdate, getInfo, bool}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        handleClose();
    }, [bool]);

    return (
        <div>
            <Button variant={"contained"} className={"btn-lg"} onClick={handleClickOpen}>
                Update
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Movie</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        required={true}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => getInfo(e, "title")}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="year"
                        label="Year"
                        required={true}
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => getInfo(e, "year")}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="desc"
                        label="Description"
                        type="text"
                        required={true}
                        fullWidth
                        variant="standard"
                        onChange={(e) => getInfo(e, "desc")}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog