const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?q=${req.body.searchParam}&api_key=${process.env.API_KEY}&limit=16`
    )

    .then((response) => {
      res.status(200).send(response.data.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
