import { useState, useEffect } from "react";
import moment from "moment";
import Loading from "./Loading";
const apiKey = process.env.REACT_APP_API_KEY;
function ForecastDisplay({ query, toggleValue, handleLoading, isLoading }) {
  const [forecastData, setforecastData] = useState(null);
  const forecastDate = 6;
  useEffect(() => {
    const fetchForecastWeather = async () => {
      try {
        handleLoading(true);
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=${forecastDate}&aqi=no&alerts=no`
        );
        const data = await res.json();
        setforecastData(data.forecast);
      } catch (err) {
        console.log(err);
      } finally {
        handleLoading(false);
      }
    };
    fetchForecastWeather();
  }, [query, toggleValue]);
  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-3">
      {isLoading && <Loading />}
      {!isLoading &&
        forecastData &&
        forecastData.forecastday &&
        forecastData.forecastday.slice(1).map((day) => (
          <div className="d-flex flex-column justify-content-center align-items-center day-card">
            <p className="d-block text-color mb-0">
              {moment(day.date).format("dddd").slice(0, 3)}
            </p>
            <img
              src={`https:${day.day.condition.icon}`}
              alt="Weather Icon"
              width="64"
              height="64"
              className="d-block"
            />

            <div className="d-flex gap-2">
              {toggleValue === false ? (
                <>
                  <p className="d-block text-color mb-0">
                    {day.day.maxtemp_c}°
                  </p>
                  <p className="d-block text-color-min mb-0">
                    {day.day.mintemp_c}°
                  </p>
                </>
              ) : (
                <>
                  {" "}
                  <p className="d-block text-color mb-0">
                    {day.day.maxtemp_f}°
                  </p>
                  <p className="d-block text-color-min mb-0">
                    {day.day.mintemp_f}°
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default ForecastDisplay;

//
