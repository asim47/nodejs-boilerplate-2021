const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating Scheme;

const UserSchema = new Schema({
   
}, { timestamps: true });

const User = mongoose.model("Users", UserSchema);

module.exports = User;