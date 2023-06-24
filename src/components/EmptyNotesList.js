import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const EmptyNotesList = () => {
  return (
    <Container>
      <Grid container>
        <Typography variant="h5" sx={{ color: "#F0EB8D" }}>
          You dont have any notes to display. Create one by clicking create new
          note on the top-left
        </Typography>
      </Grid>
    </Container>
  );
};

export default EmptyNotesList;
