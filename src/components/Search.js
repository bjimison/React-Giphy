import React, { Component } from "react";
import "../Search.css";

class Search extends Component {
  state = {
    query: this.props.query,
    gifs: this.props.gifs
  };

  render() {
    let gifs = this.props.gifs.map((gif, idx) => {
      return (
        <div className="gif" key={idx}>
          <img src={gif.images.downsized_large.url} alt="#" />
        </div>
      );
    });
    return <div className="gifs"> {gifs} </div>;
  }
}

export default Search;
