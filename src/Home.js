import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SearchContainer from "./components/SearchContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is the Home Component</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
