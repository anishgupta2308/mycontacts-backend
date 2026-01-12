const express = require("express");
const router = express.Router();

const {
  // getContacts,
  saveContact
} = require("../controllers/contactControllers");

// router.get("/", getContacts);
router.post("/", saveContact);

module.exports = router;
