const config = require('config');
const jwt = require('jsonwebtoken');


function auth(req, res, next) {
    const token = req.headers["x-auth-token"];
    // check token

    if (!token) {
        return res.status(401).json({
            Error: true,
            Msg: "No token, Auth Denied!!!"
        });
    }

    try {
        //verify token 
        const decoded = jwt.verify(token, process.env.jwtSecret);

        if (!decoded.ID) return res.status(400).json({ msg: "Token is invalid" })
        if (!decoded.UserType) return res.status(400).json({ msg: "Token is invalid" })
        if (decoded.UserType !== "SuperAdmin") return res.status(400).json({ msg: "Token is invalid" })

        req.user = decoded;

        next();
    } catch (e) {
        res.status(400).json({ 
            Error:true,
            Msg: "Invalid user token provided!" 
        })
    }

}

module.exports = auth;