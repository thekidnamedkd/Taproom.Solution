import React from "react";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.kegName} - </h3>
      <ul>
        <li>{props.kegBrand}</li>
        <li>{props.kegPrice}</li>
        <li>{props.kegABV}</li>
      </ul>
      <hr/>
    </React.Fragment>
  );
}

export default Keg;