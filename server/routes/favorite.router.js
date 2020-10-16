const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `SELECT "favorites"."id", "favorites"."url",  "category"."name" FROM "favorites"
JOIN "category" ON "favorites"."category_id" = "category"."id" ;`;
  pool
    .query(queryText)
    .then((response) => {
      // console.log("Response in the favorites router", response);
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("ERROR getting favorites", err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  let queryText = `INSERT INTO "favorites" ("url", "category_id") VALUES ($1,$2)`;
  pool
    .query(queryText, [req.body.url, req.body.category])
    .then((result) => res.sendStatus(200))
    .catch((err) => {
      console.log("ERROR posting favorite", err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/:id", (req, res) => {
  console.log(req.params);
  let queryText = `DELETE FROM "favorites" WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      console.log("Delete favorite with the ID", req.params.id);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error making query", err);
      res.sendStatus(500);
    });
});

module.exports = router;
