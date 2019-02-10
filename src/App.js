import React, { Component } from "react";
import "./App.css";

import Input from "./components/Form/Input";
import Weather from "./components/Weather/Weather";

class App extends Component {
  state = {
    weather: null,
    city: "",
    isLoading: false,
    error: false
  };

  componentDidMount() {
    // Resets weather and error states.
    this.setState({ isLoading: true, weather: null, error: false });
    fetch("/search-location-weather/Buenos Aires")
      .then(res => res.json())
      .then(result => {
        if (result.data.cod === "404") {
          this.setState({ isLoading: false, error: true });
        } else {
          this.setState({ weather: result.data, isLoading: false });
        }
      })
      .catch(error => {
        this.setState({ isLoading: false, error: true });
      });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <form action="/search-location" method="post">
          <Input
            name="city"
            type="text"
            className="ghost-input"
            placeholder="Enter a City"
            onChange={this.handleInputChange}
            required
          />
          <Input type="submit" className="ghost-button" value="Get Weather" />
        </form>
        {this.state.weather && !this.state.isLoading ? (
          <Weather weather={this.state.weather} />
        ) : null}
        {this.state.error ? <p>City not found!</p> : null}
      </div>
    );
  }
}

export default App;
