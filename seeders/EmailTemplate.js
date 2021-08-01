// const EmailTemplatesModel = require("../models/EmailTemplate")


const arr = [
    {
        Type: "SendForgetPasswordCode",
        EmailTemplate: `
        <div>
        <h1>Hi $USER_NAME! </h1>
        <h3>Please use this code to reset your password:  $CODE </h3>
        <div/>
        `,
        Subject: "Verifiction Code To Reset Password",
        Variables: "$USER_NAME , $USER_EMAIL, $CODE"
    },
]
 


const EmailTemplateSeeder = async () => {
    // try {
    //     arr.forEach(async (value) => { 
    //         const find = await EmailTemplatesModel.findOne({ Type: value.Type });
    //         if (find) return
    //         await EmailTemplatesModel.create(value)
    //         console.log(`${value.Type} added`)
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
}

module.exports = {
    EmailTemplateSeeder
}