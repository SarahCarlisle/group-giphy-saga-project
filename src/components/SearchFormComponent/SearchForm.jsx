import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

export class SearchForm extends Component {
  state = {
    search: "",
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitInfoHandler = () => {
    this.props.dispatch({ type: "GET_SEARCH", payload: this.state.search });
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <div>
        <input
          name="search"
          value={this.state.search}
          onChange={this.changeHandler}
        />
        {"  "}
        <Button
          onClick={this.submitInfoHandler}
          variant="outlined"
          color="primary"
        >
          <SearchIcon></SearchIcon>Search Gif
        </Button>
      </div>
    );
  }
}

export default connect()(SearchForm);
