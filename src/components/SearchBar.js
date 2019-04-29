import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: ""
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchText)
  };

  render() {
    return (
      <div className="ui ">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="">
            <label>Image Search</label>
            <input
              type="text"
              onChange={e => {
                this.setState({ searchText: e.target.value });
              }}
              value={this.state.searchText}
              placeholder="image to search"
            />
            <button type="submit">find!</button>
          </div>
        </form>
        <div>{this.state.searchText}</div>
      </div>
    );
  }
}
export default SearchBar;
