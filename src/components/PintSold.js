import React from "react";
import PropTypes from 'prop-types';

function PintSold (props) {
  event.preventDefault();
  props.onPintSold({
    kegAmt: event.target.kegAmt.value-1
  });

  return (
    {PintSold}
  )
}

PintSold.propTypes = {
  keg: PropTypes.object,
  onPintSold: PropTypes.func
}

export default PintSold;