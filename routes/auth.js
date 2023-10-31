const authController = require("../controllers/auth");
const express=require("express");
const router= express.Router()

router.post("/signin",authController.signin)
router.post("/login",authController.login)
router.post("/getMe",authController.getMe)


module.exports = router

