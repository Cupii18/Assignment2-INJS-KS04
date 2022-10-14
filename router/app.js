const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
router.use(require("./auth"));
router.use(require("./user"));