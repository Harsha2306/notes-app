import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledEditButton = styled(Button)(() => ({
  color: "green",
  padding: 10,
  borderRadius: 5,
  paddingBlock: 10,
  fontFamily: "revert",
}));

const EditButton = ({onClick}) => {
  return <StyledEditButton onClick={onClick}>Edit</StyledEditButton>;
};

export default EditButton;
