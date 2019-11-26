import React, { useState } from "react";

const Country = props => {
  return (
    <>
      <button onClick={() => props.drilldown(props.data.alpha3Code)}>
        Drilldown {props.data.name}
      </button>
    </>
  );
};

export default Country;
