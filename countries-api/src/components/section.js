import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Country from "./country";
import CountryDrilldown from "./country-drilldown";

const Section = props => {
  const [getDrilldownVal, setDrilldownVal] = useState(null);
  const [getFilterWord, setFilterWord] = useState("");
  const [getFilterCategory, setFilterCategory] = useState("");
  const [getFilterData, setFilterData] = useState([]);

  const drilldown = country3Code => {
    let index = props.data.findIndex(arr => arr.alpha3Code === country3Code);
    setDrilldownVal(props.data[index]);
  };

  const backToCountry = () => {
    setDrilldownVal(null);
  };

  const updateFilterWord = e => setFilterWord(e.target.value);

  /*
    let filterwordarr = props.data.filter(el => {
      return el.name === e.target.value;
    });
    console.log("filterwordarr", filterwordarr);
    */
  /* update Filter Data if updateFilterWord or FilterCategory  */

  let filterWordArr = () => {
    return props.data.filter(el => {
      return el.name === getFilterWord;
    });
  };

  useEffect(() => {
    let wordArr = filterWordArr();
    console.log("wordArr", wordArr);

    setFilterData(wordArr);
  }, [getFilterWord]);

  let countryData = getFilterData.length > 0 ? getFilterData : props.data;

  return (
    <section>
      {getDrilldownVal ? (
        <CountryDrilldown
          drilldata={getDrilldownVal}
          backToCountry={backToCountry}
        />
      ) : (
        <>
          <Row>
            <Col>
              <input
                type="text"
                placeholder="search term"
                value={getFilterWord}
                onChange={updateFilterWord}
              />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            {countryData.map(val => (
              <Country data={val} drilldown={drilldown} key={val.name} />
            ))}
          </Row>
        </>
      )}
    </section>
  );
};

export default Section;
