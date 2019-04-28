import React from "react";

// const ClearNight = "/assets/clear-night.svg";
const Cloudy = "/assets/cloudy.svg";
const Rainy = "/assets/rainy.svg";
const Snowy = "/assets/snowy.svg";
const Sunny = "/assets/sunny.svg";
const Thunderstorm = "/assets/thunderstorm.svg";
const NotFound = "/assets/notfound.svg";

const Weather = props => {
  // FIXME: Better error handler.

  let weatherId = props.error ? 404 : props.weather.weather[0].id;
  let weatherIcon = null;

  if (weatherId === 404) {
    weatherIcon = NotFound;
  } else if (weatherId <= 232) {
    // Thunderstorm
    weatherIcon = Thunderstorm;
  } else if (weatherId >= 300 && weatherId <= 531) {
    // Rainy
    weatherIcon = Rainy;
  } else if (weatherId >= 600 && weatherId <= 622) {
    // Snowy
    weatherIcon = Snowy;
  } else if (weatherId === 800) {
    // Clear: chequear la hora.
    weatherIcon = Sunny;
  } else if (weatherId >= 801 && weatherId <= 804) {
    // Cloudy
    weatherIcon = Cloudy;
  }

  return (
    <div>
      <img src={process.env.PUBLIC_URL + weatherIcon} alt="Weather icon" />
      <p>
        {props.error
          ? "City not found"
          : `It ${props.weather.main.temp}º in ${props.weather.name}!`}
      </p>
    </div>
  );
};

export default Weather;
