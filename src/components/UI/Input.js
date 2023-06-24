import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled("input")(() => ({
  backgroundColor: "#F7F1E5",
  color: "#5F6F94",
  width: "80%",
  height: "40px",
  borderRadius: 20,
  padding: 5,
  fontFamily: "revert",
  fontSize: 25,
  border: 2,
  borderColor: "#F0EB8D",
}));

const Input = (props) => {
  return (
    <StyledInput
      placeholder={props.placeholder}
      onChange={props.enteredValueChangeHandler}
      value={props.enteredValue}
    />
  );
};

export default Input;
