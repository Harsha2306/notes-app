import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container>
      <Grid Container>
        <Grid item>
          <Typography align="center" mt={30} variant="h4" sx={{ color: "#F0EB8D" }}>
            Something went wrong, Please Click <NavLink to="/">here</NavLink> to Home
            Page
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
