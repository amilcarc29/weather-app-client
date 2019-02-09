import React from "react";

const Weather = props => {
  return (
    <p>
      It's {props.weather.main.temp}º in {props.weather.name}!
    </p>
  );
};

export default Weather;
