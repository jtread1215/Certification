const router = require("express").Router();
const uploadRoutes = require("./api");

router.use("/upload", uploadRoutes);

module.exports = router;
