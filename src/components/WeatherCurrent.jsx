import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import {
  WiHumidity,
  WiStrongWind,
  WiHorizonAlt,
  WiThermometer,
} from "react-icons/wi";
const apiKey = process.env.REACT_APP_API_KEY;
function WeatherCurrent({ query, toggleValue, handleLoading, isLoading }) {
  const [currentData, setCurrentData] = useState({});
  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        handleLoading(true);
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`
        );
        const data = await res.json();
        setCurrentData(data);
      } catch (err) {
        console.log(err);
      } finally {
        handleLoading(false);
      }
    };
    fetchCurrentWeather();
  }, [query, toggleValue]);
  return (
    <div className="d-flex flex-column">
      {isLoading && <Loading />}
      {!isLoading && currentData && currentData.current && (
        <>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div>
              <h2 className="d-block text-color">
                {currentData.location.name}, {currentData.location.country}
              </h2>
            </div>
            <img
              src={`https:${currentData.current.condition.icon}`}
              alt="Weather Icon"
              width="128"
              height="128"
              className="d-block"
            />
            <p className="d-block text-color fw-bolder">
              {moment(currentData.location.localtime).format("dddd")} |{" "}
              {moment(currentData.location.localtime).format("lll")}
            </p>
            {toggleValue === false ? (
              <h2 className="d-block text-color">
                {currentData.current.temp_c}° C
              </h2>
            ) : (
              <h2 className="d-block text-color">
                {currentData.current.temp_f}° F
              </h2>
            )}
            <p className="d-block text-color">
              {currentData.current.condition.text}
            </p>
          </div>
          <div className="pt-4 mt-4 separator">
            <div className="row mb-3">
              <div className="col p-0">
                <div className="d-flex gap-2 align-items-center justify-content-center">
                  <WiStrongWind
                    className="text-color"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div
                    style={{ width: "96px", height: "64px" }}
                    className="d-flex flex-column justify-content-center align-items-start">
                    <p className="d-block text-color m-0">
                      {currentData.current.wind_kph} km/h
                    </p>
                    <p className="d-block text-color m-0">Wind</p>
                  </div>
                </div>
              </div>
              <div className="col p-0">
                <div className="d-flex gap-2 align-items-center justify-content-center">
                  <WiHumidity
                    className="text-color"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div
                    className="d-flex  flex-column justify-content-center align-items-start"
                    style={{ width: "96px", height: "64px" }}>
                    <p className="d-block text-color m-0">
                      {currentData.current.humidity}%
                    </p>
                    <p className="d-block text-color m-0">Humidity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col p-0">
                <div className="d-flex gap-2 align-items-center justify-content-center">
                  <WiThermometer
                    className="text-color"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div
                    style={{ width: "96px", height: "64px" }}
                    className="d-flex flex-column justify-content-center align-items-start">
                    <p className="d-block text-color m-0">
                      {currentData.current.pressure_mb} mbars
                    </p>
                    <p className="d-block text-color m-0">Pressure</p>
                  </div>
                </div>
              </div>
              <div className="col p-0">
                <div className="d-flex gap-2 align-items-center justify-content-center">
                  <WiHorizonAlt
                    className="text-color"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div
                    style={{ width: "96px", height: "64px" }}
                    className="d-flex flex-column justify-content-center align-items-start">
                    <p className="d-block text-color m-0">
                      {currentData.current.uv}
                    </p>
                    <p className="d-block text-color m-0">UV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherCurrent;
