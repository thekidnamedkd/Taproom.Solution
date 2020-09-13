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
      kegPrice: event.target.kegPrice.value,
      kegABV: event.target.kegABV.value,
      kegAmt: event.target.kegAmt.value
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