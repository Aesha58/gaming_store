const express = require("express");
const router = express.Router();

const { games } = require("../controllers/homeController");
const { signin, Authentication } = require("../controllers/userController");

router.get("/signin", signin);
router.post("/signin", Authentication);

module.exports = router;