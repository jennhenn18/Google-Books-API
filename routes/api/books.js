const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// create various routes that trigger the different queries configured in our books models file. The first "router" contains routes that does not need a specific book id. The second "router" are routes that need a specific book id in order to execute properly such as updating, removing, or searching for a particular book by the id.

// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);



module.exports = router;
