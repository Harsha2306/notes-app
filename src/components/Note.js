import React from "react";
import { Box, Grid } from "@mui/material";
import DeleteButton from "./UI/DeleteButton";
import EditButton from "./UI/EditButton";
import { useDispatch } from "react-redux";
import { noteSliceActions } from "../redux-store/notesSlice";
import { useNavigate } from "react-router-dom";

const Note = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cutNotes =
    props.notes.length > 300 ? props.notes.slice(0, 300) + "..." : props.notes;

  const NoteId = props.id;

  const onDelte = () => dispatch(noteSliceActions.deleteNote(NoteId));

  const onEdit = () => navigate(`/editNote/${NoteId}`);

  return (
    <Grid xs={12} sm={4} item>
      <Box
        sx={{
          height: "auto",
          width: "auto",
          borderRadius: 3,
          padding: 3,
          backgroundColor: "#FEFF86",
        }}
      >
        <Grid
          item
          spacing={4}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <h2 style={{ color: "#F79327" }}>{props.title}</h2>
          </Grid>
          <Grid item>
            <p style={{ color: "#898121" }}>{cutNotes}</p>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={6} lg={6} item>
              <DeleteButton onClick={onDelte} />
            </Grid>
            <Grid xs={6} lg={6} item>
              <EditButton onClick={onEdit} />
            </Grid>
            <Grid xs={12} lg={12} item>
              <p style={{ color: "#898121" }}>created: {props.date}</p>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Note;