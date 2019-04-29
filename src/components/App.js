import React, { Component } from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";


class App extends Component {
    onSearchSubmit(searchText){
      axios.get("https://api.unsplash.com/search/photos",{
          params:{query: searchText},
          headers:{
              Authorization: 'Client-ID ed420bd263ff5690a5aaab697b1040f0b396162f02a5e19427651eb1e6e03007' 
          }

      });  
    }


  render() {
    return (
      <div className="ui container " style={{ marginTop: "2rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
