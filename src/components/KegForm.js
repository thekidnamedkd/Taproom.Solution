import React from "react";
import PropTypes from "prop-types";

function KegForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='kegName' placeholder='Name...' />
        <input type='text' name='kegBrand' placeholder='Brand...' />
        <input type='number' name='kegPrice' placeholder='Price...' />
        <input type='number' name='kegABV' placeholder='ABV...' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

KegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default KegForm;