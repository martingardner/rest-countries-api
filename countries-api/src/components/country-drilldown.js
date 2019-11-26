import React from "react";

const CountryDrilldown = props => {
  return (
    <>
      <img src={props.drilldata.flag} />
      <h2>{props.drilldata.name}</h2>
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
      <div>
        <span>
          <b>Top Level Domain: </b>
          {props.drilldata.topLevelDomain.map(val => {
            return val;
          })}
        </span>
      </div>
      <div>
        <span>
          <b>Currencies: </b>
          {props.drilldata.currencies.map(money => {
            return money.name;
          })}
        </span>
      </div>
      <div>
        <span>
          <b>Languages: </b>
          {props.drilldata.languages.map(lang => {
            return lang.name;
          })}
        </span>
      </div>
      <button onClick={() => props.backToCountry()}>Back</button>
    </>
  );
};

export default CountryDrilldown;
