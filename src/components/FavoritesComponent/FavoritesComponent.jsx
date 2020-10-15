import React, { Component } from "react";
import { connect } from "react-redux";

export class FavoritesComponent extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_FAVORITES", payload: this.state.search });
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.searchReducer,
    favorite: state.favoritesReducer,
  };
};

export default connect(mapStateToProps)(FavoritesComponent);
