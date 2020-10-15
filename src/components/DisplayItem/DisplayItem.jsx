import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class DisplayItem extends Component {
  render() {
    return (
      <div className="display-item-div">
        <img
          key={this.props.gif.id}
          src={this.props.gif.images.original.url}
          alt="random GIF"
        />
        <form>
          <Button>🔥</Button>
          <select required>
            <option>Funny</option>
            <option>Cohort</option>
            <option>Cartoon</option>
            <option>NSFW</option>
            <option>Meme</option>
          </select>
        </form>
      </div>
    );
  }
}

export default DisplayItem;
