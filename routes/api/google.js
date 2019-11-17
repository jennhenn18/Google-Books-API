const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// create an api route path that triggers the GET google controller function and searches the Google Books API.

// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
