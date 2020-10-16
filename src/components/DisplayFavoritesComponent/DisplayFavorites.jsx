import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

// import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  div: {},
  container: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  alignItemsAndJustifyContent: {
    textAlign: "center",
  },
  select: {},
}));

function DisplayFavorites(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [gifs, setGifs] = React.useState([]);

  useEffect(() => {
    props.dispatch({ type: "GET_FAVORITES" });
  }, []);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getFavorites = () => {
    setOpen(false);
    filterGif();
  };

  const filterGif = () => {
    if (category != "all") {
      setGifs(props.favorites.filter((gif) => gif.name === category));
    } else {
      setGifs(props.favorites);
    }
    console.log(gifs);
  };

  const handleDelete = (id) => {
    console.log("Gif deleted");
    props.dispatch({
      type: "DELETE_FAVORITE",
      payload: id,
    });
  };

  return (
    <>
      <div className={classes.alignItemsAndJustifyContent}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Choose Your Favorite Gifs Category
        </Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Select a Category</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
                <Select
                  className={classes.select}
                  native
                  value={category}
                  onChange={handleChange}
                  input={<Input id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  <option value="all">All</option>
                  <option value="funny">Funny</option>
                  <option value="cohort">Cohort</option>
                  <option value="cartoon">Cartoon</option>
                  <option value="nsfw">NSFW</option>
                  <option value="meme">MEME</option>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={getFavorites}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="display-gif">
        {props.favorites != null &&
          gifs.map((gif) => (
            <div className="display-item-div" key={gif.id}>
              <img className="gif-image" src={gif.url} alt="random GIF" />
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => handleDelete(gif.id)}
              >
                <DeleteForeverIcon></DeleteForeverIcon>
              </Button>
            </div>
          ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({ favorites: state.favorites });

export default connect(mapStateToProps)(DisplayFavorites);
