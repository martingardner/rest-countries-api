import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/country-drilldown.css";

const CountryDrilldown = props => {
  console.log("props.drilldata", props.drilldata);
  return (
    <div className="country-drilldown">
      <Row>
        <Col>
          <button type="button" onClick={() => props.backToCountry()}>
            ⬅️ <span>Back</span>
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div className="image-wrapper">
            <img src={props.drilldata.flag} />
          </div>
        </Col>
        <Col xs={12} md={6} className="drilldown-card-data">
          <h2>{props.drilldata.name}</h2>
          <Row>
            <Col xs={12} md={6}>
              <div>
                <span>
                  <b>Native Name: </b> {props.drilldata.nativeName}
                </span>
              </div>
              <div>
                <span>
                  <b>Population: </b> {props.drilldata.population}
                </span>
              </div>
              <div>
                <span>
                  <b>Region: </b> {props.drilldata.region}
                </span>
              </div>
              <div>
                <span>
                  <b>Sub Region: </b> {props.drilldata.subregion}
                </span>
              </div>
              <div>
                <span>
                  <b>Capital: </b> {props.drilldata.capital}
                </span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div>
                <span>
                  <b>Top Level Domain: </b>
                  {props.drilldata.topLevelDomain.map(val => {
                    return `${val} , `;
                  })}
                </span>
              </div>
              <div>
                <span>
                  <b>Currencies: </b>
                  {props.drilldata.currencies.map(money => {
                    return `${money.name} , `;
                  })}
                </span>
              </div>
              <div>
                <span>
                  <b>Languages: </b>

                  {props.drilldata.languages.map(lang => {
                    return `${lang.name} , `;
                  })}
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <b className="mr-3">Border Countries: </b>
                {props.drilldata.borders.map(brd => {
                  return (
                    <div key={brd} className="border-countries">
                      {brd}
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CountryDrilldown;
