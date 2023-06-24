import React from "react";
import { Typography } from "@mui/material";

const Header = (props) => {
  return (
    <div>
      <Typography
        sx={{ backgroundColor: "#2D2727", padding: 2, color: "#F0EB8D" }}
        align="center"
        variant="h2"
      >
        {props.title}
      </Typography>
    </div>
  );
};

export default Header;