import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.kegName} - </h3>
      <ul>
        <li><strong>Brand:</strong> {props.kegBrand}</li>
        <li><strong>Pint Price:</strong> {props.kegPrice}</li>
        <li><strong>ABV:</strong> {props.kegABV}</li>
      </ul>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  kegName: PropTypes.string,
  kegBrand: PropTypes.string,
  kegPrice: PropTypes.number,
  kegABV: PropTypes.number
};

export default Keg;