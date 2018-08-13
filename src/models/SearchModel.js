import axios from "axios";

const api_key = "nGwbBG5WSosstuoL9YqWkZTAHcR0sEE9";

class SearchModel {
  static all(query) {
    let url =
      "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + api_key;
    let request = axios.get(url);
    return request;
  }
}

export default SearchModel;
