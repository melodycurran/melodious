const accountController = require('../controllers/accountController');
const express = require("express");
const router = express.Router();
const handleErrors = require('../utilities')


router.post("/login", handleErrors.errorHandler(accountController.processLogin));
router.post("/logout", handleErrors.errorHandler(accountController.processLogout));


module.exports = router;