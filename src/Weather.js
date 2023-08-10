import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      tempreture: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2e83e559867c8706e92fdf33c55ffaf1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function searchCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoComplete="off"
              onChange={searchCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="description">
        <h1>{city}</h1>
        <ul>
          <li>Last updated: Friday 10:15</li>
          <li>{weather.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={weather.icon} alt={weather.description} />

            <strong>{Math.round(weather.tempreture)}</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weather.humidity}%</li>
            <li>
              Wind: {Math.round(weather.wind)}
              km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
