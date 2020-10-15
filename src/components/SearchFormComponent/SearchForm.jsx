import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Input from "@material-ui/core/Input";

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
    this.props.dispatch({
      type: "GET_SEARCH",
      payload: { searchParam: this.state.search },
    });
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <div className="search-form">
        <Input
          name="search"
          value={this.state.search}
          onChange={this.changeHandler}
          placeholder="Search Gif"
        />
        <br />
        <br />
        <Button
          onClick={this.submitInfoHandler}
          variant="outlined"
          color="primary"
        >
          <SearchIcon></SearchIcon>Search For Gifs
        </Button>
      </div>
    );
  }
}

export default connect()(SearchForm);
