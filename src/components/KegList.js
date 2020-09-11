import React from "react";
import Keg from "./Keg";

function KegList(){
  return (
    <React.Fragment>
      {props.kegList.map((keg) => (
        <Keg
          kegName={keg.kegName}
          kegBrand={keg.kegBrand}
          kegPrice={keg.kegPrice}
          kegABV={keg.kegABV}
          kegId={keg.kegId}
          key={keg.kegId}
        />
      ))}
    </React.Fragment>
  );
}

export default KegList;