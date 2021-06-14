import React from "react";
import { StyledBox } from "./styles";

export default function ContentBox(props) {
  return (
    <StyledBox>
      <header>
        <span>{props.title}</span>
      </header>
      <div>{props.children}</div>
    </StyledBox>
  );
}
