const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes - this contains the books and google routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
