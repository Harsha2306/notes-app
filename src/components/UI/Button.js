import React from "react";
import { styled } from "@mui/material";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#2D2727",
  color: "#F0EB8D",
  padding: 10,
  borderRadius: 5,
  paddingBlock: 10,
  fontFamily: "revert",
  "&:hover": {
    backgroundColor: "#898121",
    color: "#F0EB8D",
  },
  "&:disabled": {
    color: "red",
  },
}));

const MyButton = (props) => {
  return (
    <StyledButton disabled={props.disabled} onClick={props.onClick} size="large">
      {props.children}
    </StyledButton>
  );
};

export default MyButton;
