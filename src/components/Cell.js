import React from "react";

import "./Cell.css";

export default function Cell(props){
  if(props.number !== 0){
    return(
    <div className={props.status} id={props.id}>
    {props.number}
    </div>
    );
  } else {
    return(
    <div className={props.status} id={props.id}>
    </div>
    );
  };
};
