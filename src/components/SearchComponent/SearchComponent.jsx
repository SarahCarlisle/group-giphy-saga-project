import React, { Component } from "react";
import { connect } from "react-redux";
import Display from "../DisplayComponent/Display";
import SearchForm from "../SearchFormComponent/SearchForm";
import Header from "../Header/Header";
//import "../App/App.css";

export class SearchComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchForm />
        <Display />
      </div>
    );
  }
}

export default connect()(SearchComponent);
