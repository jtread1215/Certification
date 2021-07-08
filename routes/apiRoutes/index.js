const router = require("express").Router();
const attendeeRoutes = require("./attendeeRoutes");

// Book routes
router.use("/registrants", attendeeRoutes);

module.exports = router;