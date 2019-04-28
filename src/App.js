import React, { Component } from "react";
import "./App.css";

import Input from "./components/Form/Input";
import Weather from "./components/Weather/Weather";
import AutocompleteInput from "./components/Autocomplete/AutocompleteInput";

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
    fetch("/search-location-weather")
      .then(res => res.json())
      .then(result => {
        if (result.data.cod === "404") {
          this.setState({
            weather: result.data,
            isLoading: false,
            error: true
          });
        } else {
          this.setState({ weather: result.data, isLoading: false });
        }
      })
      .catch(error => {
        this.setState({ isLoading: false, error: true });
      });
  }

  handleInputChange = value => {
    this.setState({
      city: value
    });
  };

  render() {
    return (
      <div className="App">
        <form action="/search-location" method="post">
          <AutocompleteInput changed={this.handleInputChange} />
          <Input type="submit" className="ghost-button" value="Get Weather" />
        </form>
        <br />
        {this.state.weather && !this.state.isLoading ? (
          <Weather weather={this.state.weather} error={this.state.error} />
        ) : null}
      </div>
    );
  }
}

export default App;
