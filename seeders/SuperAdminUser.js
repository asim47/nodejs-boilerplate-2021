// const UserModel = require("../models/UserModel")
const bcrypt = require("bcryptjs")


const SuperAdminSeed = async () => {
    try {
        // const CheckIfExist = await UserModel.findOne({ Email: "admin@kenan.com" });
        // if (CheckIfExist) {
        //     // console.log("Super admin already exists")
        //     return
        // } else {
        //     console.log("Super admin Not Found")

        //     let AdminUserObj = {
        //         FirstName: "SuperAdmin",
        //         LastName: "SuperAdmin",
        //         PhoneNo: "+92090078609",
        //         Email: "admin@kenan.com",
        //         Password: "admin123@",
        //         Address: "https://www.kenan.com",
        //         UserType: "SuperAdmin",
        //         IsVerifiedEmail: true,
        //         IsActive:true
        //     };

        //     const salt = await bcrypt.genSalt(10);
        //     const hash = await bcrypt.hash(AdminUserObj.Password, salt);

        //     AdminUserObj.Password = hash;

        //     const createdUser = await UserModel.create(AdminUserObj);
        //     console.log("Super Admin Created successfully!")
        //     console.log(createdUser) 
        //     return

        // }
    } catch (error) {
        console.log("Error while creating super admin")
        console.log(error)
    }
}

module.exports = {
    SuperAdminSeed,
}