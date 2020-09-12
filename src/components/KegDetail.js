import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
        <h3>{keg.kegName}</h3>
        <h3>{keg.kegBrand}</h3>
        <h3>{keg.kegPrice}</h3>
        <h3>{keg.kegABV}</h3>
      <hr/>
      <button onClick={() => onClickingDelete(keg.kegId)}>Remove Keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;