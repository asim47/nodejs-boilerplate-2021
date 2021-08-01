require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const config = require("config");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload")
const app = express();
const { SuperAdminSeed } = require("./seeders/SuperAdminUser")
const { UserRouter } = require("./routes/User.routes");


const port = process.env.PORT || 3000;

const versionNo = 1



class Server {
    constructor() {
        this.initMiddlewares();
        this.initDB();
        this.initRoutes();
        this.start();
    }

    initMiddlewares() {
        app.use(cors());
        app.use(express.json());
        app.use(fileUpload())
    }


    initDB() {
        // console.log(process.env)
        mongoose.connect(process.env.mongodbCloudUrl,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }).then(() => {
                console.log("Database Connected to Database")
                SuperAdminSeed()
            }).catch(err => console.log("connection error occured:", err))
    }

    initRoutes() {
        app.use(`/api/v${versionNo}/user/`, UserRouter);

        app.get("/", (req, res) => {
            return res.send("Welcome to kenan")
        })

        app.use("*", (req, res) => {
            return res.status(404).json({
                Error: true,
                Msg: `the Endpoint ${req.originalUrl} with the method ${req.method} Is not hosted on our server!`
            })
        })
    }

    start() {
        app.listen(port, () => console.log(`app listening on  http://localhost:${port}`));
    }

}

new Server();
