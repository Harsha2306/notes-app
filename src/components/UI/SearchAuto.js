import { Autocomplete, TextField , Grid} from "@mui/material";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import MyButton from "./Button";
import { useNavigate } from "react-router-dom";

const SearchAuto = () => {
  const [enteredValue, setEnteredValue] = useState({});
  const myNotes = useSelector((state) => state.notesReducer.myList);
  const navigate = useNavigate();

  const onButtonClick = () => {
    const noteid = enteredValue.id;
    navigate(`/editNote/${noteid}`);
  };

  const options = myNotes;

  return (
    <Grid item container alignItems="center">
      <Autocomplete
        xs={6}
        onChange={(event, value) => setEnteredValue(value)}
        getOptionLabel={(options) => options.title}
        options={options}
        sx={{
          width: '60%',
          color: "#5F6F94",
          backgroundColor: "#F7F1E5",
          borderRadius: 20,
          
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search your notes" />
        )}
      />
      <MyButton xs={6} onClick={onButtonClick}>
        Search
      </MyButton>
    </Grid>
  );
};

export default SearchAuto;
