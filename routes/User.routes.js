const express = require("express");
const UserController = require("../controllers/UserController")
const simpleUserJWTCheck = require("../middlewares/SimpleUserValidator")
const adminUserJWTCheck = require("../middlewares/AdminUserValidator")
const allJWTCheck = require("../middlewares/UniversalUSerValidator")


class User {
    constructor() {
        this.router = express.Router();
        this.UserRouter();
    }
    UserRouter() {
        // @Route POST /api/v1/user/create
        // @DESC Create a simple user
        // @ACCESS Public
        this.router.post("/create", UserController.CreateSimpleUser);

    }
}
exports.UserRouter = new User().router;