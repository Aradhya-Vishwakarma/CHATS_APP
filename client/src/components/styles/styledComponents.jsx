import React from "react";
import { styled } from "@mui/material/styles";
import {Link as LinkComponent} from "react-router-dom"
import { white ,graycolor } from "../../constants/color";
// import { Box } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  border: "0",
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

export const Link = styled(LinkComponent)`
text-decoration: none;
color: black;
padding: 1rem;
&:hover{
background-color:rgba(0,0,0,0.1);
}


`
export const InputBox= styled("input")({

  width: "100%",
  height:"100%",
  border: "none",
  outline: "none",
  backgroundColor: `${graycolor}`,
  borderRadius: "1rem",
  padding: " 2rem",
  
})
export const SearchField = styled("input")
`
padding: 1rem  ;
width: 20vmax;
border: none;
outline: none;
border-radius: 1.5rem;
background-color: ${white};
font-size: 1.2rem;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
outline: 2px solid ${graycolor};

`
export const CurveButton = styled("button")`
border-radius: 1.5rem;
padding: 1rem 2rem;
background-color: ${white};
color: black;
border: none;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
font-size: 1.2rem;
curser: pointer;
&:hover{
  background-color: rgba(0,0,0,0.1);
  // transition: all 0.3s ease-in-out;
}


`


