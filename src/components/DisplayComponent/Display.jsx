import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayItem from "../DisplayItem/DisplayItem";

export class Display extends Component {
  render() {
    return (
      <div className="display-gif">
        {this.props.search != null &&
          this.props.search.map((gif) => (
            <DisplayItem key={gif.id} gif={gif} />
          ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps)(Display);
