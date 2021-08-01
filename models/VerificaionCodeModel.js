const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating Scheme;

const VerificationCodeSchema = new Schema({
    Email: {
        type: String,
        required: true,
        unique: false,
    },
    Code: {
        type: String,
        required: true,
        unique: false,
    },
}, { timestamps: true });

const VerificationCodes = mongoose.model("VerificationCodes", VerificationCodeSchema);

module.exports = VerificationCodes;