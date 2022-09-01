const express = require("express")

const {signinController, signupController} = require("../controllers/user.js")

const router = express.Router()

router.post("/signin", signinController)
router.post("/signup", signupController)

module.exports = router;