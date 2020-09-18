import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import KegForm from "./KegForm";

function KegAdd(props) {
  function handleKegAddSubmission(event) {
    event.preventDefault();
    props.onKegAddCreation({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegPrice: parseInt(event.target.kegPrice.value),
      kegABV: parseInt(event.target.kegABV.value),
      kegAmt: parseInt(event.target.kegAmt.value),
      kegId: v4()
    });
  }
  return (
    <React.Fragment>
      <KegForm
        formSubmissionHandler={handleKegAddSubmission}
        buttonText="Add Keg"
      />  
    </React.Fragment>
    )
  };
KegAdd.propTypes = {
    onAddKegCreation: PropTypes.func,
};

export default KegAdd;