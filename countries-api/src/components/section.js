import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Country from "./country";
import CountryDrilldown from "./country-drilldown";

const Section = props => {
  const [getDrilldownVal, setDrilldownVal] = useState(null);
  const [getFilterWord, setFilterWord] = useState("");
  const [getFilterCategory, setFilterCategory] = useState("");

  let data = props.data;

  const drilldown = country3Code => {
    let index = props.data.findIndex(arr => arr.alpha3Code === country3Code);
    setDrilldownVal(props.data[index]);
  };

  const backToCountry = () => {
    setDrilldownVal(null);
  };

  return (
    <section>
      {getDrilldownVal ? (
        <CountryDrilldown
          drilldata={getDrilldownVal}
          backToCountry={backToCountry}
        />
      ) : (
        <>
          <Row></Row>
          <Row>
            {data.map(val => (
              <Country data={val} drilldown={drilldown} key={val.name} />
            ))}
          </Row>
        </>
      )}
    </section>
  );
};

export default Section;
