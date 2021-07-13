const express = require("express");
const router = require("express").Router();

const apiRoutes = require("../reactRoutes/api");

router.use("/api", apiRoutes);

module.exports = router;
