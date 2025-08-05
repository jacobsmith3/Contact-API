const express = require("express");
const router = express.Router();
const {getContacts,
    getContact, 
    createContact, 
    UpdateContact, 
    DeleteContact
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateToken");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(UpdateContact).delete(DeleteContact);

module.exports = router;
