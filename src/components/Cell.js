import React from "react";

import "./Cell.css";

export default class Cell extends React.Component{
  constructor(props){
    super(props);
  };

  render() {
    if(this.props.number !== 0){
      return(
      <div className="locked-cell" id={this.props.id}>
      {this.props.number}
      </div>
      );
    } else {
      return(
      <div className="playable-cell" id={this.props.id}>
      </div>
      );
    };
  };
};
