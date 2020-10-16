import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import DisplayFavorites from "../DisplayFavoritesComponent/DisplayFavorites";
import "../App/App.css";

export class FavoritesComponent extends Component {
  componentDidMount() {
    //this.props.dispatch({ type: "GET_FAVORITES" });
  }

  render() {
    return (
      <div>
        <Header />
        <DisplayFavorites />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.searchReducer,
    favorite: state.favoritesReducer,
  };
};

export default connect(mapStateToProps)(FavoritesComponent);
