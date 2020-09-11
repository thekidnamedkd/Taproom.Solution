import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) => (
        <Keg
          kegName={keg.kegName}
          kegBrand={keg.location}
          kegPrice={keg.issue}
          kegABV={keg.kegABV}
          kegId={keg.kegId}
          key={keg.kegId}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;