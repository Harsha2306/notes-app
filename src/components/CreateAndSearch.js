import React from "react";
import { Grid, Container } from "@mui/material";
import Button from "./UI/Button";
import Filter from "./UI/Filter";
import { useNavigate } from "react-router-dom";
import SearchAuto from "./UI/SearchAuto";

const CreateAndSearch = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid rowSpacing={4} container padding={2}>
        <Grid item xs={12} md={12} lg={3}>
          <Button onClick={() => navigate("/newNote")}>Create New Note</Button>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <SearchAuto/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Filter />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateAndSearch;
