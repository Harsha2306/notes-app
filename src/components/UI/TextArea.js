import styled from "@emotion/styled";
import React, { useState } from "react";

const StyledTextArea = styled("textarea")(() => ({
  backgroundColor: "#FAF0E4",
  color: "#5F6F94",
  width: "100%",
  height: "500px",
  borderRadius: 20,
  padding: 5,
  fontFamily: "revert",
  fontSize: 25,
  border: 2,
  borderColor: "#F0EB8D",
}));

const TextArea = (props) => {

  return <StyledTextArea placeholder="Start entering your notes" value={props.text} onChange={props.textChangeHandler}></StyledTextArea>;
};

export default TextArea;
