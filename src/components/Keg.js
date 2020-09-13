import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.kegId)}>
      <h3>{props.kegName} - </h3>
        <ul>
          <li><strong>Brand:</strong> {props.kegBrand}</li>
          <li><strong>Pint Price:</strong> {props.kegPrice}</li>
          <li><strong>ABV:</strong> {props.kegABV}</li>
        </ul>
      </div>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  kegName: PropTypes.string.isRequired,
  kegBrand: PropTypes.string.isRequired,
  kegPrice: PropTypes.number.isRequired,
  kegABV: PropTypes.number.isRequired,
  kegAmt: PropTypes.number,
  kegId: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;