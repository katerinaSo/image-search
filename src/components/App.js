import React, { Component } from "react";
import SearchBar from "./SearchBar";
import unsplash from '../api/unsplash';
import ListPics from './ListPics'

class App extends Component {
  state = {
    images: []
  };
  onSearchSubmit = async searchText => {
    const response = await unsplash.get("/search/photos", {
      params: { query: searchText },
      
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container " style={{ marginTop: "2rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        found: {this.state.images.length}
        <ListPics pics={this.state.images} />
      </div>
    );
  }
}

export default App;
