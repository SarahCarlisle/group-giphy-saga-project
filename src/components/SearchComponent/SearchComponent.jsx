import React, { Component } from "react";
import { connect } from "react-redux";
import Display from "../DisplayComponent/Display";
import SearchForm from "../SearchFormComponent/SearchForm";

export class SearchComponent extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <Display />
      </div>
    );
  }
}

export default SearchComponent;
