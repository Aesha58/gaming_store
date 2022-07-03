const express = require("express");
const router = express.Router();

const {home, aboutUs, accessories, consoles, contact, games } = require("../controllers/homeController");

router.get("/", home);
router.get("/about-us", aboutUs);
router.get("/accessories", accessories);
router.get("/consoles", consoles);
router.get("/contact", contact);
router.get("/games", games);

module.exports = router;

