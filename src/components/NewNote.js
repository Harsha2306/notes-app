import React, { useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import MyButton from "./UI/Button";
import { useDispatch } from "react-redux";
import { noteSliceActions } from "../redux-store/notesSlice";
import { nanoid } from "@reduxjs/toolkit";
import Modal from "./UI/Modal";
import { useNavigate } from "react-router-dom";

const NewNote = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNotes, setEnteredNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [firstTimeTitle, setFirstTimeTitle] = useState(true);
  const [firstTimeNotes, setFirstTimeNotes] = useState(true);
  const [canShow, setCanShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enteredTitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    setFirstTimeTitle(false);
  };

  const enteredNotesChangeHandler = (e) => {
    setEnteredNotes(e.target.value);
    setFirstTimeNotes(false);
  };

  const onCancel = () => navigate("/");

  const addNewNoteHandler = () => {
    setIsLoading(true);
    dispatch(
      noteSliceActions.addNewNote({
        title: enteredTitle,
        notes: enteredNotes,
        id: nanoid(),
        date: new Date().toDateString(),
      })
    );
    setCanShow(true);
    setEnteredTitle("");
    setEnteredNotes("");
    setIsLoading(false);
  };

  const canSubmit =
    !firstTimeTitle &&
    !firstTimeNotes &&
    enteredTitle.trim().length !== 0 &&
    enteredNotes.trim().length !== 0;

  return (
    <>
      {isLoading && (
        <Typography sx={{ color: "#F0EB8D" }} variant="h2">
          Creating Your Notes
        </Typography>
      )}

      {!isLoading && (
        <>
          <Modal canShow={canShow} setcanShow={setCanShow}>
            Notes Saved
          </Modal>
          <Container>
            <Grid container padding={2} mt={2} rowSpacing={8}>
              <Grid
                borderRadius={4}
                mt={2}
                container
                justifyItems="center"
                padding={6}
                rowSpacing={8}
                columnSpacing={2}
                sx={{ backgroundColor: "#A0C49D" }}
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography
                    align="center"
                    sx={{ color: "#17594A" }}
                    variant="h4"
                  >
                    Create New Note
                  </Typography>
                </Grid>
                <Grid sm={6} xs={12} item>
                  <Typography
                    sx={{ color: "#17594A", fontFamily: "revert" }}
                    variant="h4"
                  >
                    Enter Title :
                  </Typography>
                </Grid>
                <Grid sm={6} xs={12} item>
                  <Input
                    sx={{ backgroundColor: "#FAF0E4" }}
                    placeholder="Enter your title here"
                    enteredValue={enteredTitle}
                    enteredValueChangeHandler={enteredTitleChangeHandler}
                  />
                </Grid>
                <Grid sm={6} xs={12} item>
                  <Typography
                    sx={{ color: "#17594A", fontFamily: "revert" }}
                    variant="h4"
                  >
                    Enter Notes :
                  </Typography>
                </Grid>
                <Grid sm={6} xs={12} item>
                  <TextArea
                    text={enteredNotes}
                    textChangeHandler={enteredNotesChangeHandler}
                  />
                </Grid>
                <Grid xs={6} item>
                  <MyButton onClick={addNewNoteHandler} disabled={!canSubmit}>
                    Save Notes
                  </MyButton>
                </Grid>
                <Grid xs={6} item>
                  <MyButton onClick={onCancel}>Cancel</MyButton>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};
export default NewNote;

