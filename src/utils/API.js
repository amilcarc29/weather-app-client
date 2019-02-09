import axios from "axios";

const apiKey = "2e53218b7e31aa63d6596df481834fab";

// https://openweathermap.org/current#data

export default {
  getWeather: city =>
    axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
};
