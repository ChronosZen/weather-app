import React, { useState } from "react";
import ForecastDisplay from "./components/ForecastDisplay";
import SearchBar from "./components/SearchBar";
import WeatherCurrent from "./components/WeatherCurrent";
import Container from "react-bootstrap/Container";
import SwitchButton from "./components/SwitchButton";

const App = () => {
  const [query, setQuery] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  function handleSetQuery(city) {
    setQuery(city);
  }
  function handleToggleValue() {
    setToggleValue(!toggleValue);
  }
  function handleLoading(value) {
    setIsLoading(value);
  }
  return (
    <Container className="p-4 m-auto mt-5 mb-5 max-md-width">
      <SearchBar handleSetQuery={handleSetQuery} />
      <h2 className="d-block text-color">Current Weather</h2>
      {query === false ? (
        <Container
          className="p-5 mb-4 bg-box main-app shadow max-md-width"
          style={{ height: "70vh" }}>
          <h4 className="d-block text-color m-0">
            Type city and click search to check the weather
          </h4>
        </Container>
      ) : (
        <>
          <Container className="p-5 mb-4 bg-box main-app shadow max-md-width position-relative">
            <SwitchButton
              handleToggleValue={handleToggleValue}
              toggleValue={toggleValue}
            />
            <WeatherCurrent
              query={query}
              toggleValue={toggleValue}
              handleLoading={handleLoading}
              isLoading={isLoading}
            />
          </Container>
          <h2 className="d-block text-color">5 Days Forecast</h2>
          <Container className="p-5 mb-4 bg-box main-app shadow max-md-width">
            <ForecastDisplay
              query={query}
              toggleValue={toggleValue}
              handleLoading={handleLoading}
              isLoading={isLoading}
            />
          </Container>
        </>
      )}
    </Container>
  );
};

export default App;
