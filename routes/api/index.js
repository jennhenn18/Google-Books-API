// set constants equal to values we will use in this file
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Have router use the book routes we created in the books file
router.use("/books", bookRoutes);

// Have router use the google route we created in the google file so we can search the Google Book API
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
