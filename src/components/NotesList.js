import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import { Grid, Container } from "@mui/material";
import EmptyNotesList from "./EmptyNotesList";

const NotesList = () => {
  const myNotes = useSelector((state) => state.notesReducer.myList);

  const data = myNotes.map((note) => (
    <Note
      key={note.id}
      title={note.title}
      notes={note.notes}
      id={note.id}
      date={note.date}
    />

  ));

  return (
    <>
      {myNotes.length === 0 && <EmptyNotesList />}
      {
        <Container>
          <Grid mb={6} container spacing={3} direction="row">
            {data}
          </Grid>
        </Container>
      }
    </>
  );
};

export default NotesList;
