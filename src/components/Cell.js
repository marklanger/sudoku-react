import React from "react";

import "./Cell.css";

export default function Cell(props){
  return (
    <div {...props}>{props.value}</div>
  )
};
