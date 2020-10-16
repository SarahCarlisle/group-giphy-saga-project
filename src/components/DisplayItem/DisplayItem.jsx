import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { connect } from "react-redux";

export class DisplayItem extends Component {
  state = {
    category: "",
  };

  changeHandler = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  submit = () => {
    this.props.dispatch({
      type: "ADD_FAVORITE",
      payload: {
        category: this.state.category,
        url: this.props.gif.images.fixed_width.url,
      },
    });
  };

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
        <form onSubmit={this.submit}>
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
              <MenuItem value="1">Funny</MenuItem>
              <MenuItem value="2">Cohort</MenuItem>
              <MenuItem value="3">Cartoon</MenuItem>
              <MenuItem value="4">NSFW</MenuItem>
              <MenuItem value="5">Meme</MenuItem>
            </Select>
            <Button type="submit">🔥 Add to Favorites</Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default connect()(DisplayItem);
