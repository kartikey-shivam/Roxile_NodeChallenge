const express = require("express");
const app = express();
const router = express.Router();
const user = require("../controller/user");

router.route("/user/:id").get(user.userInfo);

module.exports = router;
