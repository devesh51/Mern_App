const { signup } = require("../controllers/AuthController");
const { signupValidation } = require("../middlewares/AuthValidation");

const router = require("express").Router();

router.post("/login", (req, res) => {
  res.send("login success");
});

router.post("/signup", signupValidation, signup);

module.exports = router;
