import React from "react";
import KegForm from "./KegForm";
import PropTypes from "prop-types";

function KegEdit (props) {
  const { keg } = props;

  function handleKegEditSubmit(event) {
    event.preventDefault();
    props.onKegEdit({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegPrice: parseInt(event.target.kegPrice.value),
      kegABV: parseInt(event.target.kegABV.value),
      kegAmt: parseInt(event.target.kegAmt.value),
      kegId: keg.kegID
    });
  }
  
  return (
    <React.Fragment>
      <KegForm 
        formSubmissionHandler={handleKegEditSubmit}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

KegEdit.propTypes = {
  onKegEdit: PropTypes.func
}

export default KegEdit;