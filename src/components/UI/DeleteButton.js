import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledDeleteButton = styled(Button)(() => ({
  color: "red",
  padding: 10,
  borderRadius: 5,
  paddingBlock: 10,
  fontFamily: "revert",
}));

const DeleteButton = (props) => {
  return (
    <StyledDeleteButton onClick={() => props.onClick()}>
      Delete
    </StyledDeleteButton>
  );
};

export default DeleteButton;
