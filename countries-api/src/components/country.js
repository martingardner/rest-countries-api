import React, { useState } from "react";
import Col from "react-bootstrap/Col";

import "../css/country.css";

const Country = props => {
  return (
    <Col className="country" xs={12} md={3}>
      <div onClick={() => props.drilldown(props.data.alpha3Code)}>
        <div className="image-wrapper">
          <img src={props.data.flag} />
        </div>
        <div className="country-card">
          <h2>{props.data.name}</h2>
          <div>
            <span>
              <b>Population:</b> {props.data.population.toLocaleString()}
            </span>
          </div>
          <div>
            <span>
              <b>Region:</b> {props.data.region}
            </span>
          </div>
          <div>
            <span>
              <b>Capital:</b> {props.data.capital}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Country;

/*


*/
