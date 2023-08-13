import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import Date from "./Date";

export default function DataWeather(props) {
  return (
    <div className="DataWeather">
      <div className="description">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            Last updated:
            <Date date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <WeatherIcon code={props.data.icon} />
            <WeatherTemp celsius={props.data.tempreture} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>
              Wind: {Math.round(props.data.wind)}
              km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
