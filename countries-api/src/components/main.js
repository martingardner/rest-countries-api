import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import Header from "./header";
import Section from "./section";

const Main = () => {
  const [getRestData, setRestData] = useState(null);
  const [getDarkMode, setDarkMode] = useState(true);

  const switchmode = () => setDarkMode(!getDarkMode);

  const getData = () => {
    return axios.get("https://restcountries.eu/rest/v2/all");
  };

  //api call for data
  useEffect(() => {
    let cancel = false;
    const apiData = async () => {
      let data = await getData();
      if (!cancel && Array.isArray(data.data)) {
        setRestData(data.data);
      }
    };

    apiData();

    return () => {
      cancel = true;
    };
  }, []);

  const mainClass = getDarkMode ? "darkmode" : "lightmode";

  return (
    <main className={mainClass}>
      {!getRestData ? (
        "Loading"
      ) : (
        <>
          <Header switchmode={switchmode} darkmode={getDarkMode}></Header>
          <Container>
            <Section data={getRestData}></Section>
          </Container>
        </>
      )}
    </main>
  );
};

export default Main;
