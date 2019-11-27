import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Country from "./country";
import CountryDrilldown from "./country-drilldown";

import "../css/section.css";

const Section = props => {
  const [getDrilldownVal, setDrilldownVal] = useState(null);
  const [getFilterWord, setFilterWord] = useState("");
  const [getFilterCategory, setFilterCategory] = useState("default");
  const [getFilterData, setFilterData] = useState([]);
  const [getFilterDropdownList, setFilterDropdownList] = useState([]);

  const drilldown = country3Code => {
    let index = props.data.findIndex(arr => arr.alpha3Code === country3Code);
    setDrilldownVal(props.data[index]);
  };

  const backToCountry = () => {
    setDrilldownVal(null);
  };

  const updateFilterWord = e => setFilterWord(e.target.value);
  const updateFilterCategory = e => setFilterCategory(e.target.value);

  /* matches search country if name matches word */
  let filterWordArr = () => {
    return props.data.filter(el => {
      return el.name === getFilterWord;
    });
  };

  /* matches filter Category if part of it */
  let filterRegionArr = () => {
    return props.data.filter(ra => {
      return ra.region === getFilterCategory;
    });
  };

  /*  create filterDropdown List */
  useEffect(() => {
    let filterSet = new Set();
    props.data.filter(e => {
      filterSet.add(e.region);
    });
    let filterCatArray = [...filterSet].sort();

    setFilterDropdownList(filterCatArray);
  }, []);

  /* update Filter Data if updateFilterWord or FilterCategory  */
  useEffect(() => {
    let wordArr = filterWordArr();
    let filterArr = filterRegionArr();
    let filterSet = [...new Set([...wordArr, ...filterArr])];
    setFilterData([...filterSet]);
  }, [getFilterWord, getFilterCategory]);

  let countryData = getFilterData.length > 0 ? getFilterData : props.data;

  return (
    <section>
      {getDrilldownVal ? (
        <CountryDrilldown
          drilldata={getDrilldownVal}
          backToCountry={backToCountry}
        />
      ) : (
        <div className="section">
          <Row>
            <Col xs={12} md={6}>
              <div className="mag-glass">🔍</div>
              <input
                type="text"
                placeholder="Search for a country..."
                value={getFilterWord}
                onChange={updateFilterWord}
              />
            </Col>
            <Col xs={12} md={6}>
              <select onChange={updateFilterCategory} value={getFilterCategory}>
                <option value="default" key="default" disabled>
                  Filter by Region
                </option>
                <option value="none" key="none">
                  none
                </option>
                {getFilterDropdownList.map(reg => {
                  return (
                    <option value={reg} key={reg}>
                      {reg}
                    </option>
                  );
                })}
              </select>
            </Col>
          </Row>
          <Row className="countryRow">
            {countryData.map(val => (
              <Country data={val} drilldown={drilldown} key={val.name} />
            ))}
          </Row>
        </div>
      )}
    </section>
  );
};

export default Section;
