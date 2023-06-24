import React from "react";
import CreateAndSearch from "../components/CreateAndSearch";
import NotesList from "../components/NotesList";

const HomePage = () => {
  return (
    <>
      <CreateAndSearch />
      <NotesList />
    </>
  );
};

export default HomePage;
