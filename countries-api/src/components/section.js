import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Country from "./country";
import CountryDrilldown from "./country-drilldown";

const Section = props => {
  const [getDrilldownVal, setDrilldownVal] = useState(null);
  const [getFilterWord, setFilterWord] = useState("");
  const [getFilterCategory, setFilterCategory] = useState("none");
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
    console.log("wordArr", wordArr);
    console.log("filterArr", filterArr);

    let filterSet = [...new Set([...wordArr, ...filterArr])];
    console.log("filterSet", filterSet);
    console.log("spreadset", [...filterSet]);
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
            <Col>
              <select onChange={updateFilterCategory} value={getFilterCategory}>
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
