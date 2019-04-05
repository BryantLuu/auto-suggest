import React, { Component } from "react";
import { Input, MenuItem } from "@material-ui/core";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    suggestions: [],
    inputValue: ""
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({ inputValue });

    if (!inputValue) {
      this.setState({ suggestions: [] });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=e1c030c90262b41deac61b0565e22368&language=en-US&page=1&query=${inputValue}`
        )
        .then(res => {
          const suggestions = res.data.results.map(movie => movie.name);
          this.setState({ suggestions });
        });
    }
  };

  handleSuggestionClick = value => {
    this.setState({ suggestions: [], inputValue: value });
  };

  renderSuggestions() {
    return this.state.suggestions.map((suggestion, key) => {
      return (
        <MenuItem
          key={key}
          component="div"
          onClick={() => this.handleSuggestionClick(suggestion)}
        >
          {suggestion}
        </MenuItem>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-suggestion-container">
          <Input
            onChange={this.handleChange}
            value={this.state.inputValue}
            fullWidth
          />
          {this.renderSuggestions()}
        </div>
      </div>
    );
  }
}

export default App;
