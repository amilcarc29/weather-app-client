import React, { Component } from "react";
import ReactAutocomplete from "react-autocomplete";

import Cities from "../../cities/cities";

class AutocompleteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    let inputProps = {
      name: "city",
      type: "text",
      className: "ghost-input",
      placeholder: "Enter a City"
    };

    return (
      <ReactAutocomplete
        items={Cities.cities}
        shouldItemRender={(item, value) =>
          item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        getItemValue={item => item.name}
        renderItem={(item, highlighted) => (
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
          >
            {item.name}, {item.country}
          </div>
        )}
        inputProps={inputProps}
        value={this.state.value}
        onChange={e => {
          this.setState({ value: e.target.value });
        }}
        onSelect={(value, item) => {
          this.setState({ value: value });
          this.props.changed(item.id);
        }}
      />
    );
  }
}

export default AutocompleteInput;
