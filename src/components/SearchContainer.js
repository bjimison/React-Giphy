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
    if (query) {
      this.setState({
        query: query
      });
    }
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

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.state.query === nextState.query) {
      return false;
    }
    return true;
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.query !== this.state.query) {
      return true;
    }
    return false;
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
              // onKeyUp={this.props.onInput}
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
