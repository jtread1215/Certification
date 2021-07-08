const router = require("express").Router();
const attendeeRoutes = require("./attendeeRoutes");
// const userRoutes = require('./userRoutes');

router.use("/registrants", attendeeRoutes);
// router.use("/users",userRoutes);

module.exports = router;