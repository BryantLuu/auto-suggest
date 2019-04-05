import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Input, MenuItem } from "@material-ui/core";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("sums numbers", () => {
  App.state = {
    suggestions: ["foo", "foo"]
  };

  console.log(App.renderSuggestions());
  expect(1).toEqual(2);
});
