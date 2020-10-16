import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export class DisplayItem extends Component {
  state = {
    category: "",
  };

  changeHandler = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  submit = () => {};

  render() {
    console.log(this.state.category);
    return (
      <div className="display-item-div">
        <img
          className="gif-image"
          key={this.props.gif.id}
          src={this.props.gif.images.fixed_width.url}
          alt="random GIF"
        />

        <FormControl>
          <Select
            value={this.state.category}
            displayEmpty={true}
            autoWidth={true}
            required
            onChange={this.changeHandler}
            labelId="Select A Category"
          >
            <MenuItem value="">Select A Category</MenuItem>
            <MenuItem value="funny">Funny</MenuItem>
            <MenuItem value="cohort">Cohort</MenuItem>
            <MenuItem value="cartoon">Cartoon</MenuItem>
            <MenuItem value="nsfw">NSFW</MenuItem>
            <MenuItem value="meme">Meme</MenuItem>
          </Select>
          <Button>🔥</Button>
        </FormControl>
      </div>
    );
  }
}

export default DisplayItem;
