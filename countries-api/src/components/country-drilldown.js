import React from "react";

const CountryDrilldown = props => {
  console.log("drilldata", props.drilldata);
  return (
    <>
      {props.drilldata.name}

      <button onClick={() => props.backToCountry()}>Back</button>
    </>
  );
};

export default CountryDrilldown;
