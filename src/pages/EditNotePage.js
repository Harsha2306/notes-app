import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import EditNote from "../components/EditNote";

const EditNotePage = () => {
  const params = useParams();
  const notes = useSelector((state) => state.notesReducer.myList);
  const note = notes.find((n) => n.id === params.noteId);

  return (
    <>
      <EditNote title={note.title} notes={note.notes} id={note.id} coru="u" />
    </>
  );
};

export default EditNotePage;