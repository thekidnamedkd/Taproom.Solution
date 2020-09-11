import React from "react";
import Keg from "./Keg";

function KegList(){
  return (
    <React.Fragment>
      {props.kegList.map((keg) => (
        <Keg

          whenKegClicked = {props.onKegSelection}
          kegName={keg.kegName}
          kegBrand={keg.kegBrand}
          kegPrice={keg.kegPrice}
          kegABV={keg.kegABV}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

export default KegList;