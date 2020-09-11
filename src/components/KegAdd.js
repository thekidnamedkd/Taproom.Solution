import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function KegAdd(props) {
  function handleAddKegSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegPrice: event.target.kegPrice.value,
      kegABV: event.target.kegABV.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>

    </React.Fragment>
    )
  };
KegAdd.propTypes = {
    onAddKegCreation: PropTypes.func,
};

export default KegAdd;