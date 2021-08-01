const cloudinary = require("cloudinary").v2
const config = require("config");

const cloud = cloudinary.config({
    cloud_name: process.env.cloudnairy_name,
    api_key: process.env.cloudnairy_API_KEY,
    api_secret: process.env.cloudnairy_API_secret
});