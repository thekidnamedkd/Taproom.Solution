import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onPintSold } = props;
  return (
    <React.Fragment>
      <h3> {keg.kegName} Details</h3>
      <ul>
        <li>Brand: {keg.kegBrand}</li>
        <li>Price: {keg.kegPrice}</li>
        <li>ABV: {keg.kegABV}</li>
        <li>Pints Left: {keg.kegAmt}</li>
      </ul>
      <hr/>
      <button onClick = {() => onPintSold(keg.kegId)}>Pint Sold</button>
      <hr />
      <button onClick = { props.onClickingEdit }>Change Keg Info</button>
      <button onClick = {() => onClickingDelete(keg.kegId)}>Remove Keg</button>
      
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onPintSold: PropTypes.func

};

export default KegDetail;