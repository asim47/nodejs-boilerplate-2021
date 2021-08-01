const express = require("express");
const UserModel = require("../models/UserModel");
const VerificationCodesModel = require("../models/VerificaionCodeModel")
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken");
const validator = require("email-validator");
const config = require("config");
// const {  } = require("../helpers/EmailSender");

const { v4: uuid } = require('uuid');
// @Route POST /api/v1/user/create
// @DESC Create a simple user
// @ACCESS Public
const CreateSimpleUser = async (req, res) => {
    try {
     
    } catch (error) {
        return res.status(500).json({
            Error: true,
            Msg: "Something broke on the server!",
            CreatedUser: null,
            Token: "",
            Exception: error,
            ExecptionString: error?.toString() || "",
        })
    }
}


module.exports = {
    CreateSimpleUser,
}