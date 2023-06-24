import React, { useState } from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { noteSliceActions } from "../../redux-store/notesSlice";

const Filter = () => {
  const [filter, setFilter] = useState("None");
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  if (filter === "DateAsc") dispatch(noteSliceActions.byDateAsc());
  else if (filter === "DateDsc") dispatch(noteSliceActions.byDateDsc());
  else if (filter === "TitleAsc") dispatch(noteSliceActions.byTitleAsc());
  else if (filter === "TitleDsc") dispatch(noteSliceActions.byTitleDsc());

  return (
    <>
      <InputLabel
        sx={{ color: "#F0EB8D", fontFamily: "revert" }}
        id="filter-label"
      >
        Filter By
      </InputLabel>
      <Select
        labelId="filter-label"
        id="filterId"
        value={filter}
        label="Age"
        onChange={onFilterChange}
        sx={{
          color: "#F0EB8D",
          fontFamily: "revert",
          borderBlockColor: "#F0EB8D",
        }}
      >
        <MenuItem value="None">None</MenuItem>
        <MenuItem value="TitleAsc">Title Ascending</MenuItem>
        <MenuItem value="TitleDsc">Title Descending</MenuItem>
        <MenuItem value="DateAsc">Date Ascending</MenuItem>
        <MenuItem value="DateDsc">Date Descending</MenuItem>
      </Select>
    </>
  );
};

export default Filter;