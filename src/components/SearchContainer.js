import React, { Component } from "react";
import Search from "./Search";
import SearchModel from "../models/SearchModel";

class SearchContainer extends Component {
  state = {
    query: "",
    gifs: []
  };

  handleInput = event => {
    let query = event.target.value;
    this.setState({
      query
    });
  };

  searchGif = e => {
    e.preventDefault();
    console.log("searchGif query = ", this.state.query);
    let query = this.state.query;
    // console.log(query);
    SearchModel.all(query).then(res => {
      // console.log(res);
      this.setState({
        guery: "",
        gifs: res.data.data
      });
    });
  };

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <form onSubmit={this.searchGif}>
          <label>
            Search Gifs
            <input
              id="searchInput"
              onInput={this.handleInput}
              name="name"
              type="text"
              value={this.state.query}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
        <Search gifs={this.state.gifs} query={this.state.query} />
      </div>
    );
  }
}

export default SearchContainer;
